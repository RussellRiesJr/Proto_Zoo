function Animal (name) {
  this.name = name
}

function Panthera (name) {
  Animal.call(this, name)
  this.genusName = "Panthera"
}

Panthera.prototype = new Animal()

function Canis (name) {
  Animal.call(this, name)
  this.genusName = "Canis"
}

Canis.prototype = new Animal()

function Tigris (name) {
  Panthera.call(this, name)
  this.speciesName = "Tiger"
}

Tigris.prototype = new Panthera()

function Leo (name) {
  Panthera.call(this, name)
  this.speciesName = "Lion"
}

Leo.prototype = new Panthera()

function Dirus (name) {
  Canis.call(this, name)
  this.speciesName = "Dire Wolf"
}

Dirus.prototype = new Canis()

function Latrans (name) {
  Canis.call(this, name)
  this.speciesName = "Coyote"
}

Latrans.prototype = new Canis()

var direwolf = new Dirus("Ghost")
console.log("name", direwolf.name)
console.log("genus", direwolf.genusName)
console.log("species", direwolf.speciesName)

