import React from "react"
import User from './User'


const UsersList = ({userslist})  => {

  return (
    <div style={{display:'flex', flexWrap:'wrap'}}> 
      { userslist.map(user => 
      <User user={user}  />
       )}
    
      </div>
   ) }
  


export default UsersList;
