import axios from 'axios';

const API_URI = 'https://mernbackend-4-7rn8.onrender.com';

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URI}/upload`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}