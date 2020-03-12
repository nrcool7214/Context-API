import React,{useContext} from 'react'
import C from './C'
import {Context} from "./Context"

export default function B() {
    const data=useContext(Context)
    console.log(data)
    return (
        <div>

            <h1>This is component B</h1>
    <p>{data.count}</p>
    <button onClick={()=>data.setCount(data.count+1)}>increment</button>


<hr/> 
<C/>
        </div>
    )
}
