
import {  useState } from 'react';
import './App.css';


function App() {
 
 
  const[allvalues,setValues]=useState([]);
  const[name,setName]=useState("")
  function handleChange(e){
    setName(e.target.value);
  }
  
    function handleClick(){
     setValues([...allvalues,{
       id:allvalues.length,
       firstname:name
       
     }])
      setName("");
    };
    
    function Remove(id){
      setValues(allvalues.filter((item) => item.id !== id)); 
  }
 


 
  return (
    <div className="App">
       <h1>To Do List</h1>
      <div className="main1">
       <div className="input">
        
      <textarea type="text" value={name}  placeholder="enter text" className="name" onChange={handleChange} />
      <button onClick={handleClick}>Submit</button></div>
      <div className="output">
      {allvalues.map((allvalues)=>{
        return(
           <div className="content" key ={allvalues.id}><h2 >  {allvalues.firstname}</h2><button onClick={()=>Remove(allvalues.id)}>Remove</button></div>
      )})}<br/></div>
      </div>
    </div>
  );
}


export default App;
