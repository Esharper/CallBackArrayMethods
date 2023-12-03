'use strict'

function greet(name) {
    console.log('Hello ' + name);
}
greet('John');

// Output: Hello John

greet('Alice');
// Output: Hello Alice



function Goodbye(name) {
    console.log('Goodbye ' + name);
}

Goodbye('John');
Goodbye('Alice');

const button=document.getElementById('myButton');

function onButtonClick(){
    console.log('Button was clicked')
}
const functionReference=onButtonClick

button.addEventListener('click', onButtonClick);

console.log(function (){
    console.log('reference function: button clicked');
});

const num = (
[1, 2, 3,],
[4, 5, 6],
[7, 8, 9]);
function onCount(element) {
    console.log(element);
}

num.forEach(onCount);

for (let E = 1; E < num.length; E++) {
    console.log(num[E]*2);
    console.log('index:' + E)
}
num.forEach((item,index)=>{
console.log(item*2);
console.log('index: ' + index);
});

for (let E = 0; E < num.length; E++) {
    for (let L = 0; L < num[E].length; L++) {
        console.log(num[E][L]);
    }
}



    for (let L = 2; L < num[L].length; L++) {
        console.log(num[E][L]);
        if (num[E][L].length > 1) {    
            num.push(num[E][L]);
        }
    }

    for (let E = 0; E < num.length; E++) {
        for (let L = 0; L < num[E].length; L++) {
            console.log(num[E][L]);
        }
    }

num.forEach(num => {
    console.log(num);
  });


