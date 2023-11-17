import authService from "@/service/authService/auth.service";

const user = JSON.parse(localStorage.getItem('user'));
//state
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
    namespaced: true,
    state: initialState,
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
          loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
          },
          logout(state) {
            state.status.loggedIn = false;
            state.user = null;
          },
          registerSuccess(state) {
            state.status.loggedIn = false;
          },
          registerFailure(state) {
            state.status.loggedIn = false;
          },
          refreshToken(state,accessToken){
            state.status.loggedIn = true;
            state.user = { ...state.user, accessToken: accessToken };
          }
    },
    actions:{
        login({commit},user){
            return authService.login(user).then(
              user => {
                    commit('loginSuccess', user);
                    return Promise.resolve(user);
                  },
                  error => {
                    commit('loginFailure');
                    return Promise.reject(error);
                  }
            );
        },
        logout({ commit }) {
            authService.logout();
            commit('logout');
        },
        register({ commit }, user) {
            return authService.register(user).then(
              response => {
                commit('registerSuccess');
                return Promise.resolve(response.data);
              },
              error => {
                commit('registerFailure');
                return Promise.reject(error);
              }
            );
        },
        refreshToken({commit},accessToken){
          commit('refreshToken', accessToken);
        }

    }
};