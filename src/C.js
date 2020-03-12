import React, { useContext } from 'react'
import {Context} from "./Context"

export default function C() {
    const data=useContext(Context)
    console.log(data)
    return (
        <div>
            <h1>This is component C</h1>
    <p>{data.count}</p>
    <button onClick={()=>data.setCount(data.count+1)}>increment</button>

    <ul>
        {data.items.map(item=>{
            return(<li key={item}>{item}</li>)
        })}
    </ul>
    <button onClick={()=>data.additem([...data.items,"item3"])}>Add item</button>
        </div>
    )
}
