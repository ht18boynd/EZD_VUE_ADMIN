<template>
  <div>
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
                    <form
                      class="row g-3 was-validated"
                      @submit="login"
                      novalidate
                    >
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
                          required
                        />
                        <div class="invalid-feedback">
                          Không Được Để Trống
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-github me-2 icon-inline"
                          >
                            <path
                              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                            ></path>
                          </svg>
                        </div>
                        <div class="valid-feedback">Looks good!</div>
                      </div>

                      <div class="col-12">
                        <label for="inputChoosePassword" class="form-label"
                          >Password</label
                        >
                        <div class="input-group" id="show_hide_password">
                          <input
                            type="password"
                            class="form-control"
                            id="inputChoosePassword"
                            v-model="userData.password"
                            placeholder="Enter Password"
                            required
                          />
                          <a
                            href="javascript:;"
                            class="input-group-text bg-transparent"
                            ><i class="bx bx-hide"></i
                          ></a>
                          <div class="invalid-feedback">
                            Không Được Để Trống
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-github me-2 icon-inline"
                            >
                              <path
                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                              ></path>
                            </svg>
                          </div>
                          <div class="valid-feedback">Looks good!</div>
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
        // this.$router.push("/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log In successfully!",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          // Chuyển hướng sau khi người dùng xác nhận thông báo
          window.location.href = "/";
        });
      } catch {
        console.log("Error");
        Swal.fire("Login Fail!", "You clicked the button!", "error");
      }
    },
  },
};
</script>
