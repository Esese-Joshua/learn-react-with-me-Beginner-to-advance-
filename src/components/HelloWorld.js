import React from "react";
import styles from "./HelloWorld.module.css";

// const HelloWorld = () => {
//     const name = "Joshua"
//     const age = 89;
//     const link = "https://google.com";

//     return (
//         <div> 
//             <div className="head">
//                 <h5>My name is {name}</h5>
//                 <h4>{5 + 10}</h4>
//                 <a href={link}> Google </a>    
//             </div>
             
//             <div>
//                 <h2 style={headerStyle}>This is fresh </h2>

//                 <h3 style={{ color:"red", backgroundColor:"blue" }}> I am {age} years old </h3>
//             </div>
//         </div>
//     )
//   };

//   const headerStyle = {
//     color:"red",
//     backgroundColor:"black"
//   }


//   export default HelloWorld;

//   // Rules for writing JSX
//   // 1. Always return s single element
//   // 2. Use camelCase for HTML attributes.
//   // 3. className replaces class




// SCOPPING CSS FILES

const HelloWorld = () => {
    return(
        <div>
            <div className={styles.header}>
                <h1>Hello World</h1>
            </div>
            <div className={styles["header-blue"]}>
                <h1>Hello World</h1>
            </div>            
        </div>    
    );
};


export default HelloWorld;
