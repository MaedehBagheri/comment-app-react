import FullComment from "../components/fullComment"
import Newcomment from "../components/newComment"
import Comment from "../components/comment"
import "./main.css";
import axios from "axios";
import { useEffect, useState } from "react";





const Discussion =()=>{

    const[comments,setComments] =useState(null)
const[selectedId,setSelectedId]=useState(null)

useEffect(() =>{
    axios.get("http://localhost:3001/posts")
    .then((response)=>{
        setComments(response.data.slice(0,4))
    })
    .catch((error)=>{
        console.log(error)
    })
},[])


const SelectCommentHandler=(id)=>{
  setSelectedId(id)
}

const postHandler=(comment)=>{

    axios.post("http://localhost:3001/posts",{
      ...comment,
      postId:6,
    }).then((res) =>{ return axios.get("http://localhost:3001/posts")} )
    .then(res => setComments(res.data))
    .catch()
    
    
    }
    




    return(
        <>
        <section className="main">
           {comments ? 
           comments.map(c => 
           <Comment 
           key={c.id}
           name={c.name}
           onClick={()=>SelectCommentHandler(c.id)}
            email={c.email}/>) : <p>loading ...</p>}
        </section>
        <section><FullComment setSelectedId={setSelectedId} setComments={setComments} commentId={selectedId} /></section>
        <section><Newcomment onAddPost={postHandler}/></section>
        
        
        </>
    )
}

export default Discussion;