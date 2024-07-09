// async function always return a promise.
// await pauses excuetion of it's surroundings async functions until promise is setteled.
// syntax ;; async function myfunc(){},
 function myfunc(dataid){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
         console.log("Weather Data",dataid);
         resolve(200);
       },4000);
    });
    
} 
// await is used inside async functions
async function getWeatherdata(){
    console.log("Weather Data 1.....");
    await myfunc(1);
    console.log("Weather Data 2.....");
    await myfunc(2);
}
// problem was that how we wait for one task to complete then we will complete
// another task.
// async await has solved this problem.
// to excute async function we has to call them in console unnecessarily.
// to improve them we has another approach.
// IIFE ;; is a function that is called immediately as soon it is defined.
// (()=>{
//        })();       that function is called IIFE.it can be simple function
// or async function also.
// an iife function .
(async function(){
    console.log("Getting Weather Data 1.....");
    await myfunc(1);
    console.log(" Getting Weather Data 2.....");
    await myfunc(2);
})();