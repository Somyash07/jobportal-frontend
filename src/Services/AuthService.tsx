import axios from 'axios';
// const base_url = "http://localhost:8080/auth/"
const base_url = "https://jobportal-backend-q6fs.onrender.com/auth/"
const loginUser = async (login:any)=> {
    return axios.post(`${base_url}login`, login)
        .then((result:any) => result.data)
        .catch((error:any) =>{throw error;});
}

export {loginUser};