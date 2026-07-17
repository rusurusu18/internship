// import React from 'react'
// import { useState } from 'react'
// import React from 'react'
// import { useState } from 'react'


// const App = () => {
//   const [count,setCount]=useState(1)
//   function increase(){
//     setCount(count+1);
//   }
//   return (
//     <>
//     <h1>{count}</h1>
//     <button onClick={increase} className='bg-amber-800 text-blue-800'>increment</button>
    
      
//     </>
//   )
// }
/// example of the useEffect
// export default App
// setIntervale is used to repeatedly execute a function or a code snippet at fixed time intervals

//import React, { useEffect, useState } from 'react'


// const App= ()=>{
//     const[count,setCount]=useState(0)
//     useEffect(()=>{
//         console.log("component mounted")
//         return()=>{
//             console.log("component removed")
//         }
//     },[count])
//     return(
//         <>
//         <h1>hello mounting</h1>
//         <button onClick={()=>{setCount(count+1)}}>Increment</button>
//         </>
//     )
// }

// export default App



//Example of Life cycle 

// import React, { useState } from 'react'
// import Timer from "./components/Timer"


// const App = () => {
//   const[showerTimer,setShowerTimer]=useState(true)
//   return (
//     <>
//       <h1>React Lifecycle with timer</h1>
//       <button onClick={()=>{setShowerTimer(!showerTimer)}}>{showerTimer ? "stop Timer" : "start Timer"}</button>
//       <hr />
//       {showerTimer && <Timer />}
//     </>
//   )
// }

// export default App



//----useContext----//

// import React from 'react'
// import UserContext from './context/userContext'
// import Navbar from './components/Navbar'


// const App = () => {
//     const name="Rushu"
//   return (
//     <UserContext.Provider value={name} >
//       <Navbar />

//     </UserContext.Provider>
//   )
// }

// export default App

//UserContext makes the user available to every components inside 

//------Fetch-API-Using-React----//

//____CRUD__OPERATIONS____//

// import React, { useEffect, useState } from 'react'

// const API = 'https://jsonplaceholder.typicode.com/posts'

// const App = () => {
//   const [posts, setPosts] = useState([])
//   const [title, setTitle] = useState('')
//   const [body, setBody] = useState('')

//   const getPosts = async () => {
//     try {
//       const response = await fetch(API)
//       const data = await response.json()
//       setPosts(data.slice(0, 10))
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   useEffect(() => {
//     getPosts()
//   }, [])

//   const addPost = async () => {
//     if (!title) {
//       return
//     }

//     try {
//       const response = await fetch(API, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           title,
//          body
//         })
//       })

//       const data = await response.json()
//       setPosts([data, ...posts])
//       setTitle('')
//       setBody('')
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   // performing update "PUT"
//   const updatePost = (post) => {
//     fetch(`${API}/${post.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         id: post.id,
//         title: 'new title',
//         body: 'new data updated'
//       })
//     })
//       .then(function (response) {
//         return response.json()
//       })
//       .then(function (data) {
//         setPosts(posts.map((item) => (item.id === post.id ? data : item)))
//         console.log(data)
//       })
//       .catch(function (error) {
//         console.error(error)
//       })
//   }

//   // Deleting the Post
//   const deletePost = async (id) => {
//     try {
//       await fetch(`${API}/${id}`, {
//         method: "DELETE",
//       });

//       setPosts(posts.filter((post) => post.id !== id));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Fetch API with React</h1>
//       <div>
//         <input
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Post title"
//         />
//         <input value={body} onChange={(e)=> setBody(e.target.value)}
//         placeholder='post body'
//         />

//         <button onClick={addPost}>Add post</button>
//       </div>

//       {/* Reads the posts */}
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id} style={{ marginBottom: '20px' }}>
//             <strong>{post.title}</strong>
//             <p>{post.body}</p>
//             <button onClick={() => updatePost(post)} style={{ marginRight: '10px' }}>
//               Update title
//             </button>
//             <button onClick={() => deletePost(post.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App


//event handling

// import React from 'react'

// const App = () => {
//   const handleClick = function (){
//     alert("button clicked")
//   }
//   return (
//     <>
//       <button onClick={handleClick}>Click Me</button>
//     </>
//   )
// }

// export default App


//onChange and onSubmit event

// import React, { useState } from 'react'

// const App = () => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   function handleSubmitform(e){
//     e.preventDefault(); // it doesn't want the page to reload in react applications
//     alert("Form Successfully Submitted!")
//     // Reset form
//     setName('')
//     setEmail('')
//     setPassword('')
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//       <form
//         onSubmit={handleSubmitform}
//         className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md grid gap-4"
//       >
//         <h2 className="text-2xl font-semibold text-gray-800 text-center">Sign up</h2>

//         <label className="flex flex-col">
//           <span className="text-sm text-gray-600 mb-1">Name</span>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
//           />
//         </label>

//         <label className="flex flex-col">
//           <span className="text-sm text-gray-600 mb-1">Email</span>
//           <input
//             type="email"
//             placeholder="you@example.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
//           />
//         </label>

//         <label className="flex flex-col">
//           <span className="text-sm text-gray-600 mb-1">Password</span>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
//           />
//         </label>

//         <button
//           type="submit"
//           className="mt-2 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
//         >
//           Submit
//         </button>

//       </form>
//     </div>
//   )
// }

// export default App



//Using axios CRUD operations

// import React, { useEffect } from 'react'
// import axios from 'axios'

// const App = () => {

//   //get requests
//   axios.get("https://jsonplaceholder.typicode.com/posts")
//   .then(response)=>{
//     console.log((response.data)
//   )
// }
// .catch(error)=>{
//   console.log(error)
// }

// useEffect(()=>{

//   axios.get("https://jsonplaceholder.typicode.com/posts")
//   .then((response)=>{
//     console.log(response.data)
//   })
//   .catch((err)=>{
//     console.log(err)
//   })
// },[])

// //post  method 
// axios.post("https://jsonplaceholder.typicode.com/posts", {
//   title: "React",
//   body: "axios example performing in react",
//   userId: 1
// })
//   .then((response) => {
//     console.log(response.data)
//   })

// // put (Update)
// axios.put("https://jsonplaceholder.typicode.com/posts/1", {
//   title: "next.js",
//   body: "axios example performing in next.js",
//   userId: 1
// })
//   .then((response) => {
//     console.log(response.data)
//   })

//   axios.delete("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response)=>{
//     console.log("Data deleted successfully")
//   })
 
//   return (
//     <>
//       <h1>Didn't get data</h1>
//     </>
//   )
// }

// export default App

