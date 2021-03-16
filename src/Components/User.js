import React from "react"



const User =({user})  => {

  return (
    <div style={{padding:'10px',margin:'10px',width:'350px',borderStyle:'groove'}} > 
       <h3>Name:{user.name}</h3>
       <p>username{user.username}</p>
     
      </div>
  )

  }
  


export default User;
