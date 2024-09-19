function windowSize() {
    document.getElementById("widht").innerHTML = window.innerWidth + " / " + screen.availWidth;
    document.getElementById("height").innerHTML = window.innerHeight + " / " + screen.availHeight;
}


//alert("Hello world!!!");


function confirmFunc() {
    if (confirm("Выбрать ок или отмена")) {
        window.document.getElementById("text").innerHTML = "CONFIRMED"
    } else {
        window.document.getElementById("text").innerHTML = "CANCELLED"
    }
}

//alert(window.document.getElementById("text").innerHTML);


function showParagraph() {
    document.getElementById("text2").style.display = "block";
    document.getElementById("text2").style.backgroundColor = "#8a3b68";
}

function hideParagraph() {
    document.getElementById("text2").style.display = "none";
}

function toggleVisibility() {
    if (document.getElementById("text2").style.display === "none") {
        showParagraph();
    } else {
        hideParagraph();
    }
}


function getArray() {
    let pArray = document.getElementsByTagName("p");
    alert(pArray);
    console.log(pArray);
    pArray[2].innerText = "HELLO WORLD!"
}

function replaceText() {
    let inputObj = document.getElementsByTagName("input")[0];
    let pArray = document.getElementsByTagName("p");
    for (let i = 0; i < pArray.length; i++) {
        console.log(i);
        pArray[i].innerText = i + "." + inputObj.value;
    }
}

function addText(){
    let inputObj = document.getElementsByTagName("input")[0];
    let pArray = document.getElementsByTagName("p");
    for (let i = pArray.length - 1; i > 0; i--) {
        console.log(i);
        pArray[i].innerText += i + "." + inputObj.value;
    }
}














