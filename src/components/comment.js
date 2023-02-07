import "./app.css";
const Comment=({name , email,onClick})=>{
    return(
        <div className="main">
            
        <div className="comment" onClick={onClick}>
            <p>name:{name}</p>
            <p>email:{email}</p>
            </div>
            
            </div>
    )
}

export default Comment ;