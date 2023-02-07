
import { useState } from "react";
import "./app.css"

const Newcomment =({onAddPost})=>{

  const [comment,setComment] =useState({

    name:"",
    email:"",
    content:"",
  })


const nameHandler=(e)=>{
setComment({...comment,name:e.target.value});
}

const emailHandler=(e)=>{
  setComment({...comment,email:e.target.value});
}
const contentHandler=(e)=>{
  setComment({...comment,content:e.target.value});
}






    return(
        <div className="newcomment">
          
<div >
  <label>name</label>
<input typr="text" onChange={nameHandler}/>
</div>


<div>
<label>email</label>
 <input typr="email" onChange={emailHandler}/></div>
<div> 
 <label>body</label>
<input typr="textarea" onChange={contentHandler}/>
</div>
            

        <button onClick={()=> onAddPost(comment)} >add new comment</button> 
        </div>
    )
}

export default Newcomment;