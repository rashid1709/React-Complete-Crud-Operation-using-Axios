import { useEffect,useState } from 'react';
import { TableBody, TableCell, TableHead, TableRow, Table,styled,Button } from '@mui/material'
import React from 'react';
import {Link} from 'react-router-dom';
import { getUsers,deleteUser } from '../service/api';

const StyledTable = styled(Table)`
 width:90%;
 margin:30px auto 0 auto;
`
const Thead = styled(TableRow)`
background:#000;
& > th {
  color:#fff;
  font-size:20px;
}
`
const TBody = styled(TableRow)`
& > td {
  font-size:20px;
}
`
function AllUsers() {

  const [users,setUsers] = useState([]);
  useEffect(()=>{
    getUserDetails();
  },[])

  const getUserDetails =async () => {
    let response = await getUsers();
    console.log(response);
    setUsers(response.data);
  } 

  const deleteUserData = async(id) => {
     await deleteUser(id);
     getUserDetails();
  }
  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>ID</TableCell>
          <TableCell>NAME</TableCell>
          <TableCell>USERNAME</TableCell>
          <TableCell>EMAIL</TableCell>
          <TableCell>PHONE</TableCell>  
          <TableCell>Action</TableCell>  
        </Thead>
      </TableHead>
      <TableBody>
        {
         users.map(user=>(
            <TBody>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                <Button variant="contained" color="secondary" onClick={()=>deleteUserData(user.id)}>Delete</Button>
              </TableCell>
            </TBody>
         ))
        }
      </TableBody>
    </StyledTable>
  )
}

export default AllUsers
