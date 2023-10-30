import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "Cache-Control": "no-cache",
  },
});

const API_BASE_URL = "http://localhost:8081/api/v1"; // Địa chỉ gốc của API

class LoginService {
  login(credentials) {
    const LOGIN_API_URL = `${API_BASE_URL}/auth/signin`; // Địa chỉ đăng nhập
    return axiosInstance.post(LOGIN_API_URL, credentials).then((response) => {
      const token = response.data.token;
      // Lưu JWT vào localStorage hoặc Vuex state
      localStorage.setItem("token", token);
      return response;
    });
  }

  // Thêm hàm này để kiểm tra kết nối với máy chủ
  checkServerConnection() {
    return axiosInstance
      .get("http://localhost:8081/api/v1/auth/signin")
      .then((response) => {
        console.log("Kết nối với máy chủ thành công.");
        return response;
      })
      .catch((error) => {
        console.error("Kết nối với máy chủ thất bại:", error);
        throw error;
      });
  }
}

export default new LoginService();
