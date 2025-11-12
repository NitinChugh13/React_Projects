import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // using hook declare the variable 
 const[counter , setCount]= useState(15);

  // let counter = 15; leads to unpredictable behavious at ui 
  const IncreaseVal = ()=>{
    // counter += 1; we have to update the value using the setCount method and we cant do it directly now 
    if(counter < 20){
    // setCount(counter + 1);

    //interview question What is the output of the multiple setCount ANS _ it will run only single time 

    // setCount(counter+1);
    // setCount(counter+1);
    // setCount(counter+1);
    // setCount(counter+1);

    //What if i want to increase the count to 4 
    setCount((prevValue)=> prevValue+1);
    setCount((prevValue)=> prevValue+1);
    setCount((prevValue)=> prevValue+1);
    setCount((prevValue)=> prevValue+1);

    }
    // console.log(counter);
  }
   const DecreaseVal = ()=>{
    // counter += 1; we have to update the value using the setCount method and we cant do it directly now 
    if(!(counter <= 0)){
    setCount(counter - 1);
    }
    // console.log(counter);
  }

  return (
    <>
      <h1>COUNTER : {counter}</h1>
      <button onClick={IncreaseVal} >Increase Count : {counter}</button><br></br><br></br>
      <button onClick={DecreaseVal}>Decrease Count : {counter}</button>      
    </>
  )
}

export default App
