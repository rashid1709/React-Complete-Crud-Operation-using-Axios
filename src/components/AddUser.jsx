import { FormControl, FormGroup, InputLabel,Input,Typography,Button,styled,Box } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AddData } from '../service/api';

const Fg = styled(FormGroup)`
display:flex;
alignItems:center;
flexDirection:column;
justifyContent:center;
width:50%;
margin: 5% auto 0 auto;


&> div {
  margin-top:20px;
}
`

const initialValues ={
  name:'',
  username:'',
  email:'',
  phone:''
}


function AddUser() {
  
  const [user,setUser] = useState(initialValues);
  const navigate = useNavigate();
  const onValuechange = (e) => {
    setUser({
      ...user,[e.target.name]:e.target.value
    })
   
  }
  const addUserDetails =async () => {
    await AddData(user);
    navigate('/all');
  }
  return (
    <div>

      <Fg>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=>onValuechange(e)} name='name' />
        </FormControl>
        <FormControl>
            <InputLabel>UserName</InputLabel>
            <Input onChange={(e)=>onValuechange(e)} name='username'/>
        </FormControl>
        <FormControl> 
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=>onValuechange(e)} name='email'/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=>onValuechange(e)} name='phone'/>
        </FormControl>
        <FormControl>
            <Button onClick={()=>addUserDetails()} variant='contained'>Add User</Button>
        </FormControl>
      </Fg>
      
    </div>
  )
}

export default AddUser
