import React,{useState} from 'react';


function App() {
 
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const handleSubmit = () => {
  const userEmail = [];
  localStorage.setItem("userEmail",JSON.stringify(email));
  
 
  const userPassword = [];
  localStorage.setItem("userPassword",JSON.stringify(password));
  console.log(userPassword,"userpassword");
};
  const handleUser = () => {
     if(!email || !password){
       alert("error")
     }else{
      alert(   JSON.parse(localStorage.getItem("userEmail")))
      alert(   JSON.parse(localStorage.getItem("userPassword")))
     }
  }
  return (
    <div className="App">
     <input type="email" onChange={(e)=>setEmail(e.target.value)} />
     <input type="password" onChange={(e)=>setPassword(e.target.value)} />
     <button onClick={handleSubmit}>signup</button>

     <button onClick={handleUser}>Check user</button>
     
    </div>
  );
}

export default App;
