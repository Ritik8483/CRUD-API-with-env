import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUsers, updatedUserDetails, updateUsers } from '../action/action';

const EditAddUser = () => {
    const navigate=useNavigate();
    const dispatch =useDispatch();
    const [inputText,setInputText]=useState({
        name:'',
        email:'',
        address:'',
        contact:'',
    });
    const {id} =useParams();

    const editUserData=useSelector((state)=>state.FETCH_REDUCER.user.data);

    useEffect(()=>{
        dispatch(updateUsers(id));
    },[]);

    useEffect(()=>{
        if(editUserData){
            setInputText({...editUserData})
        }
    },[editUserData]);

    
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
        // console.log('VALUES',inputText);
        dispatch(updatedUserDetails(inputText,id))
        navigate('/');
    }

    const handleHome=()=>{
        navigate('/');
    }
    const {name,email,contact,address}=inputText;

  return (
    <div>
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'-20px' ,flexDirection:'column'}}>
            <TextField onChange={inputEvent} value={name || ''} name='name' style={{width:'350px',marginTop:'20px'}} id="standard-basic" label="Name" variant="standard" />
            <TextField onChange={inputEvent} value={email || ''} name='email' style={{width:'350px',marginTop:'20px'}} id="standard-basic" label="Email" variant="standard" />
            <TextField onChange={inputEvent} value={contact || ''} name='contact' style={{width:'350px',marginTop:'20px'}} id="standard-basic" label="Contact" variant="standard" />
            <TextField onChange={inputEvent} value={address || ''} name='address' style={{width:'350px',marginTop:'20px'}} id="standard-basic" label="Address" variant="standard" />
            <Button style={{marginTop:'30px'}} type='submit' variant='contained' color='primary'>Update User</Button>
            <div>
               <Button onClick={handleHome} style={{backgroundColor:'green',marginTop:'30px'}} type='submit' variant='contained' >Home Page</Button>
            </div>
          </div>
        </form>
    </div>
  )
}

export default EditAddUser