import React, { useEffect, useState } from 'react'

const App = () => {

  const [state , setState] = useState("posts")
  const [count , setCount] = useState(0)

  useEffect(()=>{
    console.log("componentdidMount")
  },[count])
  useEffect(()=>{
console.log("componentdidUpdate")
return ()=>{
  console.log("unmount")
}
  },[state])

  return (
    <div>

    <button onClick={()=>setState("posts")}>Posts</button>
    <button onClick={()=>setState("user")}>user</button>
    <button onClick={()=>setState("coments")}>comments</button>
    <button onClick={()=>setCount(count+1)}>{count}</button>
    {state}
    
    </div>
  )
}

export default App








// import React,{useState} from 'react';


// function App() {
 
//   const [email , setEmail] = useState("");
//   const [password , setPassword] = useState("");
//   const handleSubmit = () => {
//   const userEmail = [];
//   localStorage.setItem("userEmail",JSON.stringify(email));
  
 
//   const userPassword = [];
//   localStorage.setItem("userPassword",JSON.stringify(password));
//   console.log(userPassword,"userpassword");
// };
//   const handleUser = () => {
//      if(!email || !password){
//        alert("error")
//      }else{
//       alert(   JSON.parse(localStorage.getItem("userEmail")))
//       alert(   JSON.parse(localStorage.getItem("userPassword")))
//      }
//   }
//   return (
//     <div className="App">
//      <input type="email" onChange={(e)=>setEmail(e.target.value)} />
//      <input type="password" onChange={(e)=>setPassword(e.target.value)} />
//      <button onClick={handleSubmit}>signup</button>

//      <button onClick={handleUser}>Check user</button>
     
//     </div>
//   );
// }

// export default App;
