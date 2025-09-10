
import './App.css'
import UseEffectHooks from './components/UseEffectHooks'
import { useState } from 'react';
import User from './components/User'

function App() {
 
const [visible, setVisible] = useState(true)
  return (
    <div className="container text-center mt-4">
      <button className="btn btn-danger"
      onClick={()=>setVisible(!visible)}> 
        {visible ? "Gizle" : "Goster"}
      </button>
        {/* <UseEffectHooks/> */}
     { visible &&  <User/>}
    </div>
  )
}

export default App
