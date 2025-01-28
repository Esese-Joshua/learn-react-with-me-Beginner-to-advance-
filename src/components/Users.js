import React from 'react'
import Button from './Button'

// Internal method to assign a value to props....

// const Users = (props) => {
//   return (
//     <div>
//         <div className='user'>
//             <h2>Name: {props.name || "Default names"} </h2>
//             {/* <h3>Job: Developer</h3> */}
//             <h3>Job: {props.job || "Default jobs"} </h3>
//         </div>
//     </div>
//   )
// }


// External method to assign a value to props....

// Users.defaultProps = {
//     name:"Default name",
//     job:"Default job",
// }

// export default Users



// PROPS DESTRUCTURING....

const Users = ({name, job}) => {
    return (
        <div>
            <div>
              <h2>Name: {name} </h2>
              <h3>Job: {job} </h3>
              <Button>Submit</Button>                 
            </div>           
        </div>
    )
  };


Users.defaultProps = {
    name:"Default name",
    job:"Default job",
}

  export default Users
