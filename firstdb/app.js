const express = require('express')
const mysql = require('mysql2/promise')

const app = express()
const PORT = 3000

// This will hold the actual single connection. Can handle multiple users but MySQL will queue them 
// as it can execute only one query per connection. Use a pool for parallel query processing
let connection   

// Connection string / object
let connectionStr = {
  host: process.env.MYSQL_HOST || 'localhost',
  user: 'admin',
  password: 'admin',
  database: 'people'
}

async function connectToDatabase() {
  try {
    connection = await mysql.createConnection(connectionStr)
    const dbName = connection.config.database                 // Rather than use connectionStr.database, get it from the database to confirm it
    console.log(`Connected to MySQL database "${dbName}"`)
  } catch (error) {
    console.error('Connection error:', error.message)
  }
}

app.get('/names', async (req, res) => {
  if (!connection) {
    return res.status(503).send("Database not connected")
  }

  try {
    const [result] = await connection.execute(`select * from people`)
    res.json(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

app.listen(PORT, () => console.log(`App server listening on port ${PORT}`))

connectToDatabase()
