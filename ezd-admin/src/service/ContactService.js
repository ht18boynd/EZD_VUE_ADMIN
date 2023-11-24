import axios from 'axios';

const axiosInstance = axios.create({
    headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'multipart/form-data',
    },
});

const CONTACT_API_BASE_URL = 'http://localhost:8081/api/contacts/';

class ContactService {
   
    
    async getAllContacts() {
        return await axiosInstance.get(CONTACT_API_BASE_URL);
    }
    async getContactById(id) {
        try {
            const response = await axiosInstance.get(`${CONTACT_API_BASE_URL}${id}`);
            
            return response;
        } catch (error) {
            console.error('Error getting quiz by ID:', error);
            throw error;
        }
    }
   // Trong ContactService.js
async createAndSendEmail(toEmail, subject, content) {
    const formData = new FormData();
    formData.append('toEmail', toEmail);
    formData.append('subject', subject);
    formData.append('content', content);
  
    try {
      const response = await axios.post(`${CONTACT_API_BASE_URL}reply`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Đặt kiểu dữ liệu là form-data
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating and sending email:', error);
      throw error;
    }
  }
  
   

   
}

export default new ContactService();
