import axios from 'axios';

import { getCookie, setCookie } from './Cookies';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
})

// Request Interceptor
axiosInstance.interceptors.request.use(
    config => {
        // You Can Dynamically Set Headers Here!
        const acctkn = getCookie()
        if (acctkn) {
            config.headers['authaccesskey'] = `${acctkn}`;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    response => {
        console.log('Response Interceptor Success')
        console.log(response)

        const acctkn = getCookie()

        if(!acctkn) setCookie(response.data.data.accessToken, response.data.data.refreshToken)

        return response;
    },
    error => {
        // Any Status Codes Outside Range of 2xx Cause this Function to Trigger
        console.log('Response Interceptor Error')
        console.log(error.response.status);
        console.log(error)

        // Handle errors
        if (error.response.status === 401) {
            // Handle Unauthorized Errors, for Example
            console.error('Unauthorized, Loggin Out ...');
        }

        return Promise.reject(error);
    }
);


export { axiosInstance }