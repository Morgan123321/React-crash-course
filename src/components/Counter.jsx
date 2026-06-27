import React, { useState } from 'react';

function Counter() {
    const [cart, setCart] = useState({item:'apple',quantity:10});
    
    function incremenetCounter() {
    setCounter (counter + 1)
  
    }
    
    function decrementCounter() {
   setCounter (counter - 1)
   
    }
    return (
        <div>
            <button onClick= {()=> null}>-</button>
            {cart.quantity}
            <button onClick={()=> null}>+</button>
        </div>
    );
}

export default Counter