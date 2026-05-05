// Main differences from postgress demo
// VALUES (?, ?, ?)
// id INT AUTO_INCREMENT PRIMARY KEY


const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: "admin",
  password: "admin",
  database: "mysql_demo_db"
});

const PORT = 3000;

// Create table
app.get('/create-table', async (req, res) => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS people (
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        age INT NOT NULL
      )
    `);
    res.json({ message: "Table created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Insert data
app.post('/people', async (req, res) => {
  const { first_name: fName, last_name: lName, age } = req.body;

  try {
    const [result] = await pool.query(
      `INSERT INTO people (first_name, last_name, age) VALUES (?, ?, ?)`,
      [fName, lName, age]
    );

    // MySQL doesn't support RETURNING *, so fetch the row manually
    const [rows] = await pool.query(
      `SELECT * FROM people WHERE id = ?`,
      [result.insertId]
    );

    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read data
app.get('/people', async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM people");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Drop table
app.delete('/people', async (req, res) => {
  try {
    await pool.query('DROP TABLE IF EXISTS people');
    res.json({ message: "Table dropped" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));


//------------------- Functions -------------------------
// Do a simple query to see if there is a response
async function isConnected() {
  try {
    const connection = await pool.getConnection() // Get a connection from the pool. Wait for it to return
    const [rows] = await connection.execute('select 1')
    console.log(`Database connection successful`)
  } catch (err) {
    console.error('Database connection FAILED:', err.message)
    await pool.end() // Close all pool connections and wait until complete
 //   await new Promise(res => setTimeout(res, 1000)) // Suspend for a second
    process.exit(1)  // Kill the app as it can't connect
  }
}

// isConnected()