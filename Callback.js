// Asynchronus javascript
console.log("Hello");
console.log("Hello");
setTimeout(()=>{
    console.log("Hello from Javascript Programming")
},1000);
console.log("Hello");
console.log("Hello");
// Callback ==> is a function passed as argument to another function.
function sum(a,b){
    console.log(a + b);
}
function calculator(a,b,sum){
    sum(a,b);
}

calculator(1,2,sum);
// Callback hell ==> Nested Callbacks stacked below one another forming a pyramid structure.(pyramid of DOM)
// This style of Programming becomes difficult to manage & understand.
function getdata(dataid,getnextdata){
    setTimeout(()=>{
        console.log("Data",dataid);
        if(getnextdata){
            getnextdata();
        }
    },4000);

}
// callback hell
getdata(1,()=>{
    console.log("Getting data 2....");
    getdata(2,()=>{
        console.log("Getting data 3 ......");
    getdata(3,()=>{
        console.log("Getting data 4......");
    getdata(4);
    })
    })
});
// Callback hell is problem in javascript ,so to resolve that we use promise.
