import React from 'react'

const Events = () => {

  const handleTikla= ()=> {
    alert("Clicked")
  }



  return (
    <div className="text-danger display-4">
      REACT EVENTS
      
      <button className="btn btn-primary m-2 d-flex align-items-center"onClick={handleTikla}>CLICK</button>
      
      
      </div>
  )
}

export default Events