import { useState } from "react"

const HookCounterTwo = () => {

const initialCount = 0

const [count, setCount] = useState(initialCount)


const incrementFive = ()=>{
  for (let i =0; i<5; i ++) 
    setCount(prevCount => prevCount + 1) // guncel degeri almak icin, yanlis hesaplamayi onlemek icin kullanilir
}


  return (
  <div>
    Count: {count}
    <button onClick={()=>setCount(initialCount)}>Reset</button>
    <button onClick={()=>setCount(count + 1)}>Incresement</button>
    <button onClick={()=> setCount(count-1)}>Decresement</button>

    <button onClick={incrementFive}>Increment 5</button>
    </div>

)
}

export default HookCounterTwo