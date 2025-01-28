import React from 'react'


// Just as the regular js events, react exhibites similar characrter. This can be either done as a function or as an inline function. For this example, I did just the external function, as it is common practice for big projects.  

// Also note that when calling a event, do not call it as a regular function with the parentencies (). This will automatically trigger the event even without calling that event 

const Events = () => {
    const handleClick = () => {
        alert("You clicked this Button")
    }
    
  return (
    <div>
      <h1> Handling Events </h1>
      <button className='btn' onClick={handleClick}> Click Me! </button>
    </div>
  )
}

export default Events
