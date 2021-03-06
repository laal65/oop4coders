function Person(name, byear) {
    this.name = name;
    this.byear = byear;
    Person.nbr++;
}

Person.nbr = 0;

Person.prototype.info = function(){
    console.log("My name: " + this.name + ", My birth year: " + this.byear);
}

Person.population = function(){
    return Person.nbr;
}

var p = new Person("Karim", 1986);
var p2 = new Person("Karim+1", 1987);

p.info();
p2.info();
var nbr = Person.population();

console.log("The number of persons: " + nbr);
p2 = null;
nbr = Person.population();
console.log("The number of persons: " + nbr);
