import './App.css';
import { useState } from 'react';   //usestate-hook in function

function App() {
  const[counter,setcounter]=useState(0);  
  //counter -state -to hold values  , setcounter-values set

  function incrementcounter(){
  setcounter(counter+1);
  }
  
  function decrementcounter(){
  if(counter!==0){   //not equalto Zero
  setcounter(counter-1);
  }
  }

  function reset(){
  setcounter(0)
  }

  return (
     <div id='a1'
      style={{
      display:'flex',
      flexdiretion:'column',
      alignItems:'center',
      justifyContent:'center',
      border:'5px solid black',
      borderRadius:'20px',
      width:'40%',
      height:'300px',
      backgroundColor:'orange',
      marginLeft:'400px',
      marginTop:'100px'
    }}
        className="App">
        <header className="App-header">
        <h2>Counter Application</h2>
        <h2>{counter}</h2>
        <button
        style={
          {
            backgroundColor:"blue",
            color:"black",
            padding:"10px",
          }
        }
         onClick={incrementcounter}>ADD</button>
         <button
          style={
           {
             backgroundColor:"red",
             color:"black",
             padding:"10px"
           }
         }
         onClick={decrementcounter}>REDUCE</button>
        <button
          style={
          {
            backgroundColor:'green',
            color:'black',
            padding:'10px'
          }
          }
         onClick={reset}>RESET</button>

      </header>
    </div>
  );
}

export default App;
