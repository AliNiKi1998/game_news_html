// function Car(make , model , year){
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }

// Car.prototype.run = function(speed){
//     return speed
// }

// let ford = new Car('dsd','gfgfg','ttyt');
// ford.color = 'red';

// console.log(Car);
// console.log(ford);

// let benz = Object.create(ford)
// benz.makesmail = function(){
//     console.log('test');
// }

// console.log(benz);


let name = 'ddddddddddddlf';
let obj = {
    name : 'ali',
    lastName : 'niki',
    color : name
}


 obj["fNam-e"] = 'jabar'

 obj.func = function(test){
     console.log(test , this.color);
 }

 

console.log(obj.call(name));






















