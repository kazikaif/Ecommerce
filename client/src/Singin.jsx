import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Singin(){
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const Navigate = useNavigate()
  function handleSubmit(){
e.PreventDefault();
axios.post('http://localhost:3001/signin',{name, email, password})
.then((res)=>{
    console.log(res.data);
    alert("Register Successfully")
    Navigate("/")
})

  }
    return(
        <>
        <form onSubmit={handleSubmit}>
        <input type="text" name="Username" onChange={(e)=>setName(e.target.value)}/>
        <input type="email" name="Email" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" name="Password"onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit">Singin</button>

        </form>
        </>
    )
}
export default Singin();