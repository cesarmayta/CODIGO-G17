import axios from 'axios';

const API_URL = 'http://localhost:8000/api'

class AuthService{

    login(usuario,password){
        return axios
        .post(API_URL + "/login",{
            username:usuario,
            password:password
        })
        .then(res=>{
            if(res.data){
                localStorage.setItem('token',JSON.stringify(res.data))
            }

            return res.data;
        })
    }

}

export default new AuthService();