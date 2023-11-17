import api from "./api";
import authHeader from "./auth.header"
import tokenService from "./token.service";

class AuthService{

    async login(auth) {
        return await api
          .post('/auth/signin', {
            email: auth.email,
            password: auth.password
          })
          .then(response => {
            if (response.data.accessToken) {
              tokenService.setUser(response.data);
            }
  
            return response.data;
          });
      }
    logout() {
        // localStorage.removeItem('user');
        tokenService.removeUser();
      }
    register(auth) {
        return api.post('/api/signup', {
          name: auth.username,
          accountName: auth.accountName,
          email: auth.email,
          password: auth.password,
          address:auth.address,
          country: auth.country,
          phoneNumber: auth.phoneNumber,
          gender: auth.gender,
          balance: auth.balance
        });
      }
      getPublicContent() {
        return api.get("/auth/all");
      }
    
      getUserBoard() {
        return api.get("/auth/user", { headers: authHeader() });
      }
    
      getModeratorBoard() {
        return api.get("/auth/provider", { headers: authHeader() });
      }
    
      getAdminBoard() {
        return api.get("/auth/admin", { headers: authHeader() });
      }
}
export default new AuthService();