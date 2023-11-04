<template>
  <div class="wrapper">
    <div class="section-authentication-cover">
      <div class="">
        <div class="row g-0">
          <div
            class="col-12 col-xl-7 col-xxl-8 auth-cover-left align-items-center justify-content-center d-none d-xl-flex"
          >
            <div
              class="card shadow-none bg-transparent shadow-none rounded-0 mb-0"
            >
              <div class="card-body">
                <img
                  src="assets/images/login-images/login-cover.svg"
                  class="img-fluid auth-img-cover-login"
                  width="650"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            class="col-12 col-xl-5 col-xxl-4 auth-cover-right align-items-center justify-content-center"
          >
            <div class="card rounded-0 m-3 shadow-none bg-transparent mb-0">
              <div class="card-body p-sm-5">
                <div class="">
                  <div class="mb-3 text-center">
                    <img src="assets/images/logo-icon.png" width="60" alt="" />
                  </div>
                  <div class="text-center mb-4">
                    <h5 class="">EZD Admin</h5>
                    <p class="mb-0">Please log in to your account</p>
                  </div>
                  <div class="form-body">
                    <form class="row g-3" @submit="login">
                      <div class="col-12">
                        <label for="inputEmailAddress" class="form-label"
                          >Email</label
                        >
                        <input
                          type="email"
                          class="form-control"
                          id="inputEmailAddress"
                          placeholder="Please Input Email"
                          v-model="userData.email"
                        />
                      </div>
                      <div class="col-12">
                        <label for="inputChoosePassword" class="form-label"
                          >Password</label
                        >
                        <div class="input-group" id="show_hide_password">
                          <input
                            type="password"
                            class="form-control border-end-0"
                            id="inputChoosePassword"
                            v-model="userData.password"
                            placeholder="Enter Password"
                          />
                          <a
                            href="javascript:;"
                            class="input-group-text bg-transparent"
                            ><i class="bx bx-hide"></i
                          ></a>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckChecked"
                          />
                          <label
                            class="form-check-label"
                            for="flexSwitchCheckChecked"
                            >Remember Me</label
                          >
                        </div>
                      </div>
                      <div class="col-md-6 text-end">
                        <a href="/forgotpass">Forgot Password ?</a>
                      </div>
                      <div class="col-12">
                        <div class="d-grid">
                          <button type="submit" class="btn btn-primary">
                            Sign in
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="login-separater text-center mb-5">
                    <span>OR SIGN IN WITH</span>
                    <hr />
                  </div>
                  <div class="list-inline contacts-social text-center">
                    <a
                      href="javascript:;"
                      class="list-inline-item bg-facebook text-white border-0 rounded-3"
                      ><i class="bx bxl-facebook"></i
                    ></a>
                    <a
                      href="javascript:;"
                      class="list-inline-item bg-twitter text-white border-0 rounded-3"
                      ><i class="bx bxl-twitter"></i
                    ></a>
                    <a
                      href="javascript:;"
                      class="list-inline-item bg-google text-white border-0 rounded-3"
                      ><i class="bx bxl-google"></i
                    ></a>
                    <a
                      href="javascript:;"
                      class="list-inline-item bg-linkedin text-white border-0 rounded-3"
                      ><i class="bx bxl-linkedin"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--end row-->
      </div>
    </div>
  </div>
  <!--end wrapper-->
</template>

<script>
import { user, authInfo } from "@/store";
import Swal from "sweetalert2";
import AuthService from "@/service/AuthService";
import { jwtDecode } from "jwt-decode";
export default {
  name: "loginAdmin",
  data() {
    return {
      userData: {
        email: null,
        password: "",
      },
    };
  },
  methods: {
    async login(event) {
      try {
        event.preventDefault();
        console.log(this.userData.email + this.userData.password);
        const response = await AuthService.login(this.userData);
        const token = response.data.token;
      
      // Lưu JWT vào localStorage hoặc Vuex state
      localStorage.setItem("token", token);
      console.log(token);
        const decoded = jwtDecode(token);
        console.log(decoded);
        // Gán giá trị sub vào biến user
        user.value = decoded.sub;
        console.log("globle :" + user.value);
        // Fetch the complete Auth information
        const authInfoResponse = await AuthService.findByEmail(user.value);
        authInfo.value = authInfoResponse;
        console.log(authInfoResponse);
        console.log("authen globle ID: " + authInfo.value.id);
        console.log("authen globle Name: " + authInfo.value.name);
        window.location.href = "/";
        Swal.fire("Login Success!", "You clicked the button!", "success");
      } catch {
        console.log("Error");
        Swal.fire("Login Fail!", "You clicked the button!", "error");
      }
    },
  },
};
</script>


