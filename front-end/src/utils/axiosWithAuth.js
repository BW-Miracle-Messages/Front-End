import axios from 'axios'; 

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({ 
        baseURL: "https://miracle-messages2019.herokuapp.com/api",
        headers: {
            Authorization: token
        }
    });
};