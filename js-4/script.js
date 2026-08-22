let str="come lets go";
console.log(str.length);

let str1="Hello";
let str2=" Vijayawada";
console.log(str1.concat(str2));

let text="Carry on";
console.log(text.indexOf("n"));

let url="Book Store";
console.log(url.slice(5));
console.log(url.slice(0,5));

let greeting="Hyderabad";
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());

let vegetables="tomato.ladies finger.brinjal";
console.log(vegetables.split("."))

let name="  Charan  ";
console.log(name.trim());

let sentance="casual wear";
console.log(sentance.replace("casual","night"))

let str3=`Hello,World`;
console.log(str3);

let nem ="charan";
let greet="Hello,"+name+"Welcome to class";
console.log(greet);

let a=10;
let b=5;
console.log(`This sum is ${a+b}`);

let d=10;
let e=5;
let f=a+b;
console.log(`This sum is ${d} and ${e} is ${f}`);

let messages="This is line 1.\n"+
"This is line 2.\n"+
"This is line 3.";
console.log(messages);

let message=`This is line 4.
This is line 5.
This is line 6.`;
console.log(message);

let ni="Akhila";
let age=19;
let html=`
<div> 
<h2>${ni}</h2>
<p>Age: ${age}</p>
</div>
`;
console.log(html);

var myArray=[1,"Hello",[2,3]];
myArray.splice(1,1,"Hello World",[4,5]);
console.log(myArray)
