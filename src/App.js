import React from 'react'
import HelloWorld from './components/HelloWorld';
import Users from './components/Users';
import Card from './components/Card';
import styles from "./App.module.css";
import {users} from "./data";
import Events from './components/Events';



const App = () => {
  return (
    <div>
      <Events />








      {/* RENDERING A LIST... With unique values */}

      {/* <h1>List of users</h1>
      {users.map( (user) => {
        return(
          <Card key={user.id}>
            <Users name={user.name} job={user.job} />
          </Card>
        )

      })} */}



      {/* CHILDREN PROPS */}

      {/* <HelloWorld /> */}
      {/* <Users />
      <Users name="Bobo" job="Architect"/>
      <Users name="Osamuohan" job="Developer"/> */}

    </div>
  )
};


export default App;

