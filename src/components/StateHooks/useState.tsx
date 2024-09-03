import {useState} from 'react'

const UseState = () => {
    const [count, setCount] = useState(110);

    const increment = () => setCount((currentCount) => currentCount + 1);
    const decrement = () => setCount((currentCount) => currentCount - 1);
    const reset = () => setCount(111);

    return (
        <div className="State">
            <h1>Counter: {count} </h1>
            <div>
                <button onClick={increment}>+1</button>
                <button onClick={decrement}>-1</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>

    )
}
export default UseState