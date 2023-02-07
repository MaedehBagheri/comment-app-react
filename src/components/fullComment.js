import "./app.css"
import axios from "axios";
import { useEffect,useState } from "react";


const FullComment =({commentId,setComments,setSelectedId})=>{
  const[comment,setComment]=useState(null);

    useEffect(() =>{
       if(commentId){
        axios
        .get(`http://localhost:3001/posts/${commentId}`)
        .then((response)=> setComment(response.data))
        .catch((error)=>{
            console.log(error)})
        }}
        ,[commentId])


        const deleteHandler=async()=>{
        try {
          await  axios.delete(`http://localhost:3001/posts/${commentId}`)
          const {data} = await axios.get("http://localhost:3001/posts/");
          setComments(data);
          setSelectedId(null)
          setComment(null)
        } catch (error) {
          
        }     
        }
        let commentDetail =<p>please select a comment !</p>;

if (commentId) commentDetail =<p>loading ...</p>




    if(comment) {
  commentDetail=(

          <div className="fullcomment">
          <p>name:{comment.name}</p>
          <p>email:{comment.email}</p>
          <p>{comment.body}</p>
          <button onClick={deleteHandler}>delete</button>
          </div>
  )
    }
      
return commentDetail;
}

export default FullComment;