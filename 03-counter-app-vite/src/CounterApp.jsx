import React, {useState} from 'react';
import PropTypes from "prop-types"

export const CounterApp = ({value}) => {

   const [counter, setCounter] = useState(value)

   const handleClick= (e)=>{
    console.log(e)
    //setCounter(counter + 1)
    
    e=="+1" ? setCounter(counter + 1) :
    e=="-1" ? setCounter(counter - 1): 
     setCounter(value);
    
   }
   


    return (
        <>
            <h1  >CounterApp</h1>
            <h2 data-testid="h2"> {counter} </h2>
            <button  data-testid="+1" onClick={()=>handleClick("+1")}>+1</button>
            <button onClick={()=>handleClick("-1")} >-1</button>
            <button  aria-label='btn-reset' onClick={()=>handleClick("reset")}>Reset</button>
        </>
    );
}

CounterApp.propTypes = {
value : PropTypes.number.isRequired,

}


