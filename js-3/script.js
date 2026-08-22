// console.log("Tis is my looping and functions");
// let a=1;
// console.log(a);
// console.log(a+1);
// console.log(a+2);


// for (let i=1;i<=100;i++){
//     console.log(i);
// }

// let obj={
//     name:"Rani",
//     roll:30,
//     branch:"cse",
// }
// for (const i in obj) {
//     const element = obj[i];
//     console.log(i);
//     console.log(obj[i]);
//     console.log(i,obj[i]);
// }
// for (const i of "Hey") {
//     console.log(i);
// }
// let i=1;
// while(i<50){
//     console.log("Hey i am niki");
//     i++;
// }
// let t=2
// do{
//     console.log("Hey");
//     t++;
// }while(i<=50)


let a = 32;
let b = 44;
let max = (a > b) ? a : b;
console.log("max num :" + max);

let x = "guava";
switch (x) {
    case "banana":
        console.log("This is a Banana");
        break;
    case "apple":
        console.log("This is a apple");
        break;
    default:
        console.log("I dont need fruits");
}

for (let i = 0; i <= 100; i++) {
    if (i % 8 === 0) {
        console.log(i);
    }
}
function nice(name) {
    console.log("Hey " + name + " you are nice1");
    console.log("Hey " + name + " you are nice2");
    console.log("Hey " + name + " you are nice3");
    console.log("Hey " + name + " you are nice4");
}
nice("sree");
// console.log("Hey pandu,you are nice1");
// console.log("Hey pandu,you are nice2");
// console.log("Hey pandu,you are nice3");
// console.log("Hey pandu,you are nice4");

function sum(a, b) {
    // console.log(a+b);
    return a + b;
}
total = sum(7, 6);
console.log(total);


function sum2(a, b, c = 7) {
    console.log(a + b + c);
}
sum2(4, 8)

const fun1 = () => {
    console.log("I am an arrow function", );
}
fun1("Hello")