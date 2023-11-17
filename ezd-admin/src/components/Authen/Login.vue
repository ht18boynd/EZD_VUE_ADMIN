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
                    <Form
                      class="row g-3"
                      @submit="handleLogin"
                      :validation-schema="authSchema"
                    >
                      <div class="col-12">
                        <label for="email" class="form-label">Email</label>
                        <Field
                          type="text"
                          name="email"
                          class="form-control"
                          placeholder="Please Input Email"
                        />
                        <ErrorMessage name="email" class="text-danger" />
                      </div>
                      <div class="col-12">
                        <label for="inputChoosePassword" class="form-label"
                          >Password</label
                        >
                        <div class="input-group" id="show_hide_password">
                          <Field
                            type="password"
                            name="password"
                            class="form-control border-end-0"
                            placeholder="Enter Password"
                          />
                          <a
                            href="javascript:;"
                            class="input-group-text bg-transparent"
                            ><i class="bx bx-hide"></i
                          ></a>
                        </div>
                        <ErrorMessage name="password" class="text-danger" />
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
                          <button
                            type="submit"
                            class="btn btn-primary"
                            :disabled="loading"
                          >
                            <span
                              v-show="loading"
                              class="spinner-border spinner-border-sm"
                            ></span>
                            Sign in
                          </button>
                        </div>
                      </div>
                      <div class="form-group">
                        <div
                          v-if="message"
                          class="alert alert-danger"
                          role="alert"
                        >
                          {{ message }}
                        </div>
                      </div>
                    </Form>
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
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "loginPage",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const authSchema = yup.object().shape({
      email: yup.string().required("Email is required"),
      password: yup.string().required("Password is required"),
    });
    return {
      authSchema,
      loading: false,
      message: "",
      // rememberMe: false,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
    const token = localStorage.getItem("token");
    console.log(token);
    console.log(this.currentUser);
  },
  methods: {
    handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>
