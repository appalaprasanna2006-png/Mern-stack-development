// let arr=[1,2,3,4]
// let n=arr.length
// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i]*arr[i])
// }

// let arr1=[5,4,1,3,2,5,7,9,6,3]
// let m=arr1.length
// for(let i=1;i<=m;i+=2){
//     console.log(arr1[i]*arr1[i])
// }

// let arr2=[1,2,3,4,5]
// let n1=arr2.length
// for(let i=arr2.length-1;i>=0;i--){
//     console.log(arr2[i]+1)
// }

// let arr3=[1,2,3,4,5]
// let n2=arr3.length
// for(let i=arr3.length-1;i>=0;i--){
//     console.log(arr3[i])
// }

// a="*"
// let n=a.length
// for(let i=1;i<=5;i++){
//     console.log("*".repeat(i));
// }

// b="*"
// let n1=b.length
// for(let i=5;i<=0;i--){
//     console.log("*".repeat(i));
// }


// var myarray=[1,2,"Fruits","vegetables",5]
// myarray.forEach(function(element){
//     console.log(element);
// });

// var myarray=[1,2,3,4,5]
// for(var i of myarray){
//     console.log(i)
// }



// arr=[1,2,3,4,5]
// let arr2=arr.map(function (i){
//    console.log(arr)
//     return i**2;
// })


// let arr=[1,2,3,4,5]
// let arr2=arr.filter(function(i){
//     return i%2===0;
// })

// let arr = [1, 2, 3, 4, 5]
// let sum = arr.reduce(function (a, c) {
//     return a + c;
// }, 1);
// console.log(sum)

// let sum2 = (a, b) => {
//     return a + b;
// }
// console.log(arr.reduce(sum2, 1))


function factor(n) {
    let fact = 1
    for (let i = 1; i <= n; i++) {
        fact = fact * i
    }
    return fact
}
arr6 = [5, 7, 2, 8, 4, 5]
n = arr6.length
for (let i = 0; i <= n; i++) {
    console.log(factor(arr6[i]))
}