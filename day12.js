//fetch api is a built in js api that is used to send http requests and receive responses from a server. It returns a promise that resolves to the response of the request.
//fetch api is used to get data from the server and display it on the web page.

//it is commonly used to:
// - get data (get data (--GET))
// - send data (send data (--POST))
// - update data (update data (--PUT / PATCH))
// - delete data  (delete data (--DELETE))

// why do we use fetch api?
// - easy to use and understand
// - is built in js api
// - it returns a promise that can be used to handle the response of the request
// - it can be used to send and receive data from a server
// - frondend needs data from the backend
// - without this our website cannot communicate with the server

//let url = https://localhost/5000/api
//basic get request


//---------------------------------------------------------------------------------------------------------//
//get request perform
fetch("https://jsonplaceholder.typicode.com/users") //sending the request to the server
.then (function(response){

    //receives the server response
    console.log("loading data...");

    return response.json(); //converts the json into a javascript object
})


//dispalys the data 
//.then (function(data){
//    console.log(data);
// })



.then (function(data){

    let output=""
    data.foEach(function(user){

     output+='<li>${user.name}</li>';
     });
    document.getElementByID("users").innerHTML=output;
})

//fetch using the async and await

async function getUsers(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users") //receives the server response
    let users = await response.json()
    console.log(users)
}

getUsers()

//------------------------------------------------------------------------------------------------------------------------------------------//

//post request perform(POST) user sends data

fetch("https://jsonplaceholder.typicode.com/users", {
    method:"POST",
    headers:{   // headers provide the extra information about the request
        "Content-Type": "application/json"  //ma json format ma data lei send gardai xu    
    },

    body:JSON.stringify({   // converts the js object into the json string 
        title:"javascript learnig or fetch post requests learning",
        body:"learning fetch api",
        userId:1      
    })
})

.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data)
})


//---------------------------------------------------------------------------------//
//PUT
