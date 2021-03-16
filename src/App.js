import React, { useEffect, useState }  from "react"
import axios from "axios"
import UsersList from "./Components/UsersList"



const App = () => {
  const users1 = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }]
  var tab = []
  const [users , setUsers]= useState([])
  useEffect(()=>{
    const url = `https://jsonplaceholder.typicode.com/users`
    axios.get(url)
      .then(function (response) {
        // handle success 
        response.data.map(elm=>
          tab.push(elm)
      )
      setUsers(tab)
      })
      .catch(function (error) {
        // handle error
        //console.log(error);
      })
      .then(function () {
        // always executed
      }); 
      
  },[])
 
  
 
  
    let t = []
    



  return (
    <div className="App"> 
    <UsersList userslist={users} />
      </div>
  )

  }
  


export default App;
