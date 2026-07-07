//performing crud operations

//GET
async function getUsers() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users"); 
  let users = await response.json();
  console.log(users);
}

getUsers();


//POST
async function createPost() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "Learning Fetch API",
        body: "This is a POST request using async and await.",
        userId: 1
      })
    });

    let data = await response.json();

    console.log("Created Post:");
    console.log(data);
  }

createPost();


//PUT
async function updatePost() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "Updated title",
        body: "The post is successfully updated.",
      })
    });

    let data = await response.json();
    console.log("Updated Post:");
    console.log(data);
  }

updatePost();


//DELETE
async function deletePost() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
  method:"DELETE",
  })
  console.log("post deleted")
}

deletePost()