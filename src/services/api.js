import axios from 'axios';

//Key aaf4ee1bdf1c7f708ecadd9bf43c94660165b24e
// base url https://api-ssl.bitly.com/v4/


export const key = 'aaf4ee1bdf1c7f708ecadd9bf43c94660165b24e'

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
    }
})

export default api;
