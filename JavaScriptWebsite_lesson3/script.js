var client = {
    firstName: "Петр",
    secondName: "Петрович",
    age: 28,
    email: "petrpetrovich@fakemail.com"
};

console.log(client);

console.log("Имя Фамилия: ", client.firstName, client.secondName);

client.phoneNumber = "+8 (999) 000 27-11";

client.phoneNumber = "521512521521";

console.log(client);

const someObject = {};
someObject.someKey = "SomeValue";

const someObject2 = new Object();


// Конструктор Объектов
function Car(brand, model, modifications, releaseYear, color){
    this.brandName = brand;
    this.modelName = model;
    this.mods = modifications;
    this.year = releaseYear;
    this.paintColor = color;
}

var newCar = new Car("Toyota","Hillux","none",1990,"Red");

console.log(newCar);

var newCar2 = new Car("KIA","Hillux","none",1990,"Red");
newCar2.extraKey = "??????";

console.log(newCar2);


// Циклы
for (let key in newCar){
    console.log(key + ":", newCar[key]);
}



function Cat(breed, eyeColor, weight, name){
    this.breedType = breed;
    this.colorOfEyes = eyeColor;
    this.bodyWeight = weight;
    this.chosenName = name;
    this.describe = function() {
        return "Breed: " + breed + " eyeColor: " + eyeColor + " weight: " + weight + " name: " + name;
    }
    this.jump = function (){
        console.log(name, "has jumped!")
    }
}


var newCat = new Cat("SomeCat","Blue",100,"Catty");

newCat.jump();
console.log(newCat.describe());



function add(a,b){
    return a + b;
}

console.log(add(5,5));

function greet(name="Friend"){
    console.log("Hello",name + "!");
}

greet("Bob");

greet();


// Функции высшего порядка
function A(callback){
    let msg = "A";
    msg += callback();
    return msg;
}

function B(){
    return "B";
}

console.log(A(B));


function greeting(name, callback){
    const greeting = "Hello" + " " + name + "!";
    callback(greeting);
}

function printMsg(msg){
    console.log("Messege:", msg);
}

greeting("Bob",printMsg);

//Пример замены function
const hello1 = () => "Hello1, World!";
console.log(hello1);

function hello2 (){
    return "Hello, World";
}
console.log(hello2);


const square1 = (x) => x*x;
console.log(square1(5));

function square2(x){
    return x*x;
}
console.log(square2(1));

const addAndLog = (a,b) => {
    const result = a+b;
    console.log(result);
    return result;
}









































