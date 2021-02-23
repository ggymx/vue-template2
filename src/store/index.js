import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: JSON.parse(localStorage.getItem("userInfo")),
  },
  getters: {
    userInfo: (state) => state.userInfo,
  },
  mutations: {
    SET_USERINFO(state, data) {
      state.userInfo = data;
      //vuex刷新后会丢失，需要存储在localStorage
      localStorage.setItem("userInfo", JSON.stringify(data));
    },
  },
  actions: {
    //异步请求
    setUserInfo({ commit, state }, data) {
      setTimeout(() => {
        commit("SET_USERINFO", data);
      }, 1000);
    },
  },
  modules: {},
});
