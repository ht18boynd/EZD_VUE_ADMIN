import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "Cache-Control": "no-cache",
    "Content-Type": "multipart/form-data",
  },
});

const FEEDBACK_API_BASE_URL = "http://localhost:8081/api/feedbacks/";

class FeedbackService {
  async getAllFeedbacks() {
    return await axiosInstance.get(FEEDBACK_API_BASE_URL);
  }

 
}

export default new FeedbackService();
