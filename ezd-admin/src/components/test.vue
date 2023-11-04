<template>
  <div>
    <h1>Thông tin người dùng</h1>
 
    <!-- Các thông tin khác từ authInfo -->
  </div>
</template>

<script>
import AuthService from "@/service/AuthService";
import { jwtDecode } from "jwt-decode";
export default {
  name: "UserProfile",
  data() {
    return {
      userInfor:[],
      BASE_URL: process.env.BASE_URL,
    };
  },
  methods: {
    async findByEmail(){

      const decoded = jwtDecode(localStorage.getItem("token"));
      const userGmail =decoded.sub;
     const response = await AuthService.findByEmail( userGmail);
     this.userInfor=response;
     console.log(this.userInfor);

    }

    
  },
  async created() {
   
   await this.findByEmail();

 },
};
</script>
