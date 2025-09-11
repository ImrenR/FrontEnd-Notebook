import { useState } from "react"



const HookCouter = () => {

  const [count, setCount] = useState(0)


  return(
  <div>
    <button onClick={()=>setCount(count + 1)}>Count {count}</button>
    </div>
)}

export default HookCouter