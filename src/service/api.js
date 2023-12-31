import axios from 'axios';

const API_URL='http://localhost:3002/users';

export const AddData = async (data) => {
    try {
        return await axios.post(API_URL,data);
    } catch (error) {
        console.log('Error while getting AddUser api',error.message);
    }
}

export const getUsers = async() => {
 try {
    return await axios.get(API_URL);
 } catch (error) {
    console.log('error while getting getUsers Api',error.message);
 }
}
export const getUser = async(data) => {
    try {
       return await axios.get(`${API_URL}/${data}`);
    } catch (error) {
       console.log('error while calling getUser Api',error.message);
    }
   }

export const EditData = async (data,id)=>{
            try {
                return await axios.put(`${API_URL}/${id}`,data)
            } catch (error) {
                console.log('error while updating edit data',error.message);
            }
}

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${API_URL}/${id}`)
    } catch (error) {
        console.log('error while deleteUser Record',error.message);
    }
}