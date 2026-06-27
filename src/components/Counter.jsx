import React, { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0)
    function incremenetCounter() {
    setCounter ((prevCounter)=> prevCounter + 1)
    setCounter ((prevCounter)=> prevCounter + 1)
    }
    
    function decrementCounter() {
   setCounter ((prevCounter)=> prevCounter -1)
   setCounter ((prevCounter)=> prevCounter -1)
    }
    return (
        <div>
            <button onClick={decrementCounter}>-</button>
            {useState}
            <button onClick={incremenetCounter}>+</button>
        </div>
    )
}

export default Counter