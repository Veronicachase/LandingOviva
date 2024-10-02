import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const addWebinarData = async (data) => {
  try {
   
    const response = await axios.post(`${apiUrl}/web-email`, data, {
     
    });

    console.log('email data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding email:', error);
    throw error;
  }
};

export default addWebinarData
