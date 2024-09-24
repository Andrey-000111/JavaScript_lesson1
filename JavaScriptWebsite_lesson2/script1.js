//типы переменных (let,const,var)
let variable1 = 1;
const variable2 = 1;
var variable3 = 1;

//примитивные типы данных

//String, Строка
let text = "Helo World";
console.log(text);

//Number,Число
let someNumber = 123;
console.log(someNumber);

//BigInt,Большие целые числа
let largeNumber = 123456789123456789123456789n;
console.log(largeNumber);

//Boolean, ложь истина
let isActive = true;
console.log(isActive);

//Symbol, генерация уникальных ключей ID
let symbol = Symbol("symbol");
console.log(symbol);

//Undefuned, не определенный
let undefinedType = undefined;

//Null, пустое
let nullType = null;

//Ложные значения
let falsy1 = null; //пусто
let falsy2 = undefined; //перепенная не назначена
let falsy3 = false; //лож
let falsy4 = NaN; //не является числом
let falsy5 = 0;
let falsy6 = -0;
let falsy7 = 0n;
let falsy8 = "";

if (falsy8) {
    //Строка Есть, что то делать!
} else {
    //Строка ПУСТАЯ!
}

//Сравнение
console.log("null==undefined: ", null == undefined);
console.log("null===undefined: ", null === undefined);

console.log("1=='1': ", 1 == "1");
console.log("1==='1': ", 1 === "1");


// CONST & VAR
const constantString = "Hello World!";

try {
    constantString = "Goodbye!"; //Избегать остановки , через ловлю ошибки
} catch (error) {
    console.log(error);
}

var doNotUseThis = "DANGEROUS";

//Hoisting, "Поднятие"
function hoistingDemo() {
    let letValue1 = "letValue1";
    
    //If Block
    if(true){
        let letValue2 = "letValue2";
        var varValue = "varValue";
        console.log("Область видимости Условия: ", letValue2, varValue);
    }
    
    console.log("Область видимости Функции: ", letValue1, varValue);
    
    //console.log("Область видимости Условия снаружи: ", letValue2, varValue);
    
}


hoistingDemo();



//Для кнопки "ДОБАВИТЬ ЗАГОЛОВОК"
function addHeader(){
    const newHeader1 = document.createElement('h1');
    document.body.appendChild(newHeader1);
    newHeader1.textContent = "Hello World Header 1";
}


function addInputs(){
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    console.log(input1,input2);
    
    let input1Value = Number(input1.value);
    let input2Value = Number(input2.value);
    console.log(input1Value,input2Value);
    
    let result = input1Value + input2Value;
    console.log(result);
    
    const pTagAnswer = document.getElementById("inputAnswer");
    inputAnswer.textContent = result;
}

function forLoopDemo(){
    const for1 = document.getElementById("for1");
    
    let n = 10;
    for(let i=0; i < n; i++){
        for1.textContent +=i;
    }
}

forLoopDemo();
















































