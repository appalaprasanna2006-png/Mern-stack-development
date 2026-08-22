var myarray=[1,"hello",[2,3]]
console.log(myarray.length);
myarray.push("world");
myarray.pop();
myarray.shift();
myarray.unshift(1);
console.log(myarray.slice(1,2));
myarray.splice(1,1,"hello world",[4,5]);
console.log(myarray);