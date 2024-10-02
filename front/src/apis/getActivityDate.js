import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const getWebinarData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/webinar/webinar-date`);
  
      console.log('webinar data:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching webinar data:', error);
      throw error;
    }
  };
  

export default getWebinarData