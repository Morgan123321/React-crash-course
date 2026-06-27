function Counter() {
    function incremenetCounter() {
    console.log('incrementCounter()')
    }
    
    function decrementCounter() {
    console.log('decrementCounter')
    }
    return (
        <div>
            <button onClick={decrementCounter}>-</button>
            {0}
            <button onClick={incremenetCounter}>+</button>
        </div>
    )
}

export default Counter