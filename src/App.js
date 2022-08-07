import React,{useEffect,useState} from 'react'
import axios from 'axios';
function App() {
  const[data,setdata]=useState([]);
  useEffect(()=>{
 axios.get('https://jsonplaceholder.typicode.com/users').then(
   response=>setdata(response.data))
  
  },[])
  return (
    <div>
    
  {data.map(item=><li key={item.id}> {item.name}</li>)}
    
    </div>
  )
   }
   export default App