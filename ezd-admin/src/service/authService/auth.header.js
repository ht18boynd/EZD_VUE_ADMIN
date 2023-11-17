export default function authHeader() {
    let auth = JSON.parse(localStorage.getItem("user"));
  
    if (auth && auth.accessToken) {
      return { Authorization: 'Bearer ' + auth.accessToken }; // for Spring Boot back-end
      // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
      return {};
    }
  }