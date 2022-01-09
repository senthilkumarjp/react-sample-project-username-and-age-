import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from './AddUsers.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
// import UsersList from './UsersList';

const AddUsers = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');

    const AddUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title:'Invalid input!',
                message:'please enter a valid name and age.'
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title:'Invalid age!',
                message:'please enter a valid age (>0).'
            })
            return;
        }
        props.onAdduser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }
    const usernamechangehandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const Agechangehandler = (event) => {
        setEnteredAge(event.target.value);
    }
    const errorHandler=()=>{
        setError(null);
    }
    return (
        <div>
           {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={AddUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input type="text" id="username" value={enteredUsername} onChange={usernamechangehandler}></input>
                    <label htmlFor='Age'>Age (Years)</label>
                    <input type="text" id="Age" value={enteredAge} onChange={Agechangehandler}></input>
                    <Button type='submit'>Add users</Button>
                </form>
                {/* <UsersList /> */}
            </Card>
        </div>
    )
}

export default AddUsers;
