//sychronous js it is used to execute the code line by line and wait for the previous line to finish before executing the next line. It is blocking in nature.

// console.log("Start");
// console.log("synchronous code");
// console.log("end of the program");

//problem statement that we faced in synchronous js
let datas=[
    {
        name:"Rushu",
        role:"developer",
        address:"ith"
    },
    {
        name:"lily",
        role:"js developer",
        address:"brt"
    }
]

function getdatas(){
    setTimeout(()=>{
        let output="";
        datas.forEach((datas,index)=>{
            //output='<li> {data.name} </li>'
            console.log(datas.name);
        })
        document.body.innerHTML=output;
    },1000)
}

//asynchronous js 
// it allows the js to perform long running tasks like loading data from server without stopping the rest of the program 

//promise it is an object that represents the result of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected.
//it may resolve or reject

//syntax using promise resolved the statement
let promise=new Promise(function(resolve,reject){
    let login = false;
    if (login){
        resolve("login successful");
    } else {
        reject("login failed");
    }
})

promise.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error);
})
//async and await
