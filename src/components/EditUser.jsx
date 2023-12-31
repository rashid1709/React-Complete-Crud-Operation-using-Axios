import { FormControl, FormGroup, InputLabel,Input,Typography,Button,styled,Box } from '@mui/material';
import React, { useState,useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';

import { getUser,EditData } from '../service/api';

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


function EditUser() {
  
  const [user,setUser] = useState(initialValues);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    loadUser();
  },[])
  const loadUser = async () => {
    let response = await getUser(id);
    setUser(response.data);
  }
  const onValuechange = (e) => {
    setUser({
      ...user,[e.target.name]:e.target.value
    })
   
  }
  const editUserDetails =async () => {
    await EditData(user,id);
    navigate('/all');
  }
  return (
    <div>

      <Fg>
        <Typography variant="h4">Edit User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=>onValuechange(e)} name='name' value={user.name} />
        </FormControl>
        <FormControl>
            <InputLabel>UserName</InputLabel>
            <Input onChange={(e)=>onValuechange(e)} name='username' value={user.username}/>
        </FormControl>
        <FormControl> 
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=>onValuechange(e)} name='email' value={user.email}/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=>onValuechange(e)} name='phone'value={user.phone}/>
        </FormControl>
        <FormControl>
            <Button onClick={()=>editUserDetails()} variant='contained'>Update User</Button>
        </FormControl>
      </Fg>
      
    </div>
  )
}

export default EditUser
