let circle={
  radius:0,
  area:0,
  colour: 'blue',
  
  calcArea: function(){
    circle.area = Math.PI * circle.radius * circle.radius
  },

  setRadius: function(r) {
    circle.radius=r
    circle.calcArea()
  },

  getArea: function(){
    return circle.area
  }
}

// Object properties are available to access
circle.radius = 2
console.log(`Circle colour is ${circle.colour}`)

// Functions are available
console.log(`The circle area is wrong at ${circle.getArea()}`)

// Using getter and setter functions enables us to control activity in the object
circle.setRadius(10)
console.log(`Circle area is ${circle.getArea()}`)

// This is wandering into object oriented programming ...