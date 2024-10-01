function normalFun1() {
    console.log("Обычная функция");
}
normalFun1();

() => {
    console.log("невызываемая стрелочная функция");
}

(() => {
    console.log("вызываемая стрелочная функция при создании");
})()

function normalFun2(a, b) {
    console.log("normalFun2 ", a + b);
}
normalFun2(3, 4);


((a, b) => {
    console.log("(a+b)=>:", a + b);
})(5, 6)

//Цепной вызов Функции
const calculator = {
    value: 0,
    setValue(initValue) {
        this.value = initValue;
        return this;
    },
    add(number) {
        this.value += number;
        return this;
    },
    getResult() {
        return this.value;
    }
}

let result = calculator.setValue(15).add(10).add(25).getResult();
console.log("calcResult: ", result);


//Строковые функции,Цепной Вызов
document.getElementById("strEvent").addEventListener("click",
    () => {
        let inputStr = document.getElementById("strInput").value;
        console.log("strEvent called!");
        console.log(allCaps(inputStr));

        let pArray = document.getElementById("pDiv").getElementsByTagName("p");
        console.log(pArray);

        pArray[0].textContent = allCaps(inputStr);
        pArray[1].textContent = allLower(inputStr);
        pArray[2].textContent = reverseText(inputStr);
    }
)

function allCaps(str) {
    return str.toUpperCase();
}

function allLower(str) {
    return str.toLowerCase();
}

function reverseText(str) {
    return str.trim().split('').reverse().join('').toUpperCase();
}

//Функции Callback, функции которые вызываю другие функции
function task1(callback) {
    let t = Math.round(Math.random() * 5000);
    setTimeout(
        () => {
            console.log("Task 1 completed:", t);
            callback();
        },
        t
    )
}

function task2(callback) {
    let t = Math.round(Math.random() * 5000);
    setTimeout(
        () => {
            console.log("Task 2 completed:", t);
            callback();
        },
        t
    )
}

task1(() => {
    task2(() => {
        console.log("All tasks completed!")
    })
});


//Promises, Обещания
var promiseState1 = false;
var promiseState2 = true;

var promise1 = new Promise(function (resolve, reject) {
    if (promiseState2) {
        resolve("promise 1 successful!");
    } else {
        reject("promise 1 rejected");
    }
})

var promise2 = new Promise(function (resolve, reject) {
    if (promiseState2) {
        resolve("promise 2 successful!");
    } else {
        reject("promise 2 rejected");
    }
})

promise1.then(
    function (message) {
        console.log(message);
        return promise2;
    }
).catch(
    function (msg){
        console.log("do something else...");
    }
)



























