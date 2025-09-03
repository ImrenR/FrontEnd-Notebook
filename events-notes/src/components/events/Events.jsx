import React from 'react'

const Events = () => {

  const handleTikla= (event)=> {
    alert("Clicked")
    console.log(event)
  }

const writeMessage = (msg)=>{
console.log(msg)
}

  return (
    <div className="text-danger display-4">
      REACT EVENTS
      {/** 1. Call with referance */}
      <button className="btn btn-primary m-2 d-flex align-items-center"onClick={handleTikla}>CLICK</button>
       {/** 2. with call back function */}
     <button className="btn btn-danger m-2 d-flex align-items-center"onClick={()=>alert("DELETED")}> DELETE
     </button>
      {/** 3. Using parameters*/}

       <button className="btn btn-success" onClick={()=>writeMessage("Parameter Sent") }>Message me</button>
       <p>OLA!</p>
      </div>
  )
}

export default Events