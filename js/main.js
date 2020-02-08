
function log(){
    console.log("FUNTION LOG");
    console.group();
    console.log("Nested Log");
    console.group();
    console.log("More Nested Log");
    console.warn("We go warning");
    console.groupEnd();
    console.log("Back to level 2");
    console.groupEnd();
    console.log("Back to the outer level");
}



// console.time("start")
// console.time("second")
// async function wait(ms) {
//     return new Promise(r => setTimeout(r, ms));
//   }

// async function foo() {
//     console.timeEnd("second")
//     await wait(500);
//     console.timeEnd("start")
// }
// foo();


// var count = 0;
// const API_ENDPOINT = "https://randomuser.me/api/";
// async function apiCall()  {
//     let _promise = await fetch(API_ENDPOINT); 
//     let _json = await _promise.json();
//     if(count++ ==5 ) clearInterval(x);
//     console.log(_json);
// }

// // setTimeout(apiCall,200);
// // var x = setInterval(apiCall, 2000);

