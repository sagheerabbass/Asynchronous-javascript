// Promises ==> eventual Completetion of a task.it is an object in js.
// it is solution to callback hell.
// Promise is a object that has three states ;; pending,fulfilled,rejected.
// resolve and reject are two callbacks provided by javascript.
// promise functions has two handlers called resolve,reject.
let promise=new Promise((resolve,reject)=>{
    console.log("I am Promise");
    resolve("Suceess");
    // reject("Some error here");
})
// in general Programming we do not create Promise it is created by our program.
// when we try to fetch data from api ,then it will return a promise with two
// handlers.
// after printing output we will call resolve or reject function that will 
// change state of promise.
// A javascript object can be
// pending: result undefined
// resolved : result is a value
// rejected : result is an error object.
// Promise :-
// After fulfilling promise if we want  to do some work ,we use promise.then
// promise.then((res)) =>{})
// After rejection of promise if we want to do some work then we will use promise.catch.
// promise.catch((err))=>{}) 
const getpromise=()=>{
    return new Promise((resolve,reject)=>{
     console.log("I am Promise");
     resolve("Suceess");
    });
};

let pramise=getpromise();
pramise.then((res)=>{
    console.log("Suceess" ,res);
})
pramise.catch((err)=>{
    console.log("rejected",err);
})
// Promise chain
// placing one then into another is called promise chain
function asnycfunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("data1");
        resolve("Suceess");
        },4000);  
      });
};
function asnycfunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("data2");
        resolve("Suceess");
        },4000);  
      });
};
console.log("Fetching data 1");
let p1=asnycfunc1();
p1.then((res)=>{
    console.log("fetching data 2....");
    let p2=asnycfunc2();
    p2.then((res)=>{
    })
})
// Actual Promise chain
asnycfunc1().then((res)=>{
        return asnycfunc2();
}).then((res)=>{
    
})