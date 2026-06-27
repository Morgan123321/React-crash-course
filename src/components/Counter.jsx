import React, { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);
    
    function incremenetCounter() {
    setCounter (count + 1)
  
    }
    
    function decrementCounter() {
   setCounter (count - 1)
   
    }
    return (
        <div>
            <button onClick={decrementCounter}>-</button>
            {count}
            <button onClick={incremenetCounter}>+</button>
        </div>
    );
}

export default Counter