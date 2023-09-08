import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0)

    const handelAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const handelRemove = () => {
        const removeCount = count - 1;
        if(removeCount === -1){
            return 0;
        }
        setCount(removeCount)
    }

    return (
        <div style={{border:"2px solid blue"}}>
            <h3>counter:{count}</h3>
            <button onClick={handelAdd}>add</button>
            <button onClick={handelRemove}>remove</button>
        </div>
    )
    
}