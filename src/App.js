import React, {useState} from 'react';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {
  const[usersList,setusersList]=useState([]);

  const AddUserHandler=(uName,uAge)=>{
    setusersList((prevUsersList)=>{
      return[...prevUsersList,{name:uName, age:uAge, id:Math.random().toString()}];
    })
  };
  return (
    <div >
      <AddUsers onAdduser={AddUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
