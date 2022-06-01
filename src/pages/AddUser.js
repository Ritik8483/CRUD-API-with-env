import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUsers } from '../action/action';

const AddUser = () => {
    const navigate=useNavigate();
    const dispatch =useDispatch();

    const [inputText,setInputText]=useState({
        name:'',
        email:'',
        address:'',
        contact:'',
    });
    const inputEvent=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInputText((lastValue)=>{
            return{
                ...lastValue,
                [name]:value
            }
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('VALUES',inputText);
        dispatch(addUsers(inputText))
        navigate('/');
    }

    const handleHome=()=>{
        navigate('/');
    }
    const {name,email,contact,address}=inputText;

  return (
    <div>
        <h2>Add Users</h2>
        <form onSubmit={handleSubmit}>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'-20px' ,flexDirection:'column'}}>
            <TextField onChange={inputEvent} value={name} name='name' style={{width:'350px',marginTop:'20px'}} id="standard-basic" label="Name" variant="standard" />
            <TextField onChange={inputEvent} value={email} name='email' style={{width:'350px',marginTop:'20px'}} id="standard-basic" label="Email" variant="standard" />
            <TextField onChange={inputEvent} value={contact} name='contact' style={{width:'350px',marginTop:'20px'}} id="standard-basic" label="Contact" variant="standard" />
            <TextField onChange={inputEvent} value={address} name='address' style={{width:'350px',marginTop:'20px'}} id="standard-basic" label="Address" variant="standard" />
            <Button style={{marginTop:'30px'}} type='submit' variant='contained' color='primary'>Add User</Button>
            <div>
               <Button onClick={handleHome} style={{backgroundColor:'green',marginTop:'30px'}} type='submit' variant='contained' >Home Page</Button>
            </div>
          </div>
        </form>
    </div>
  )
}

export default AddUser