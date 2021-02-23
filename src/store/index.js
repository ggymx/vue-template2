import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: JSON.parse(localStorage.getItem("userInfo")),
    //打开的页面
    openPages: [],
    activePages: [],
  },
  getters: {
    userInfo: (state) => state.userInfo,
    openPages: (state) => state.openPages,
    activePages: (state) => state.activePages,
  },
  mutations: {
    SET_USERINFO(state, data) {
      state.userInfo = data;
      //vuex刷新后会丢失，需要存储在localStorage
      localStorage.setItem("userInfo", JSON.stringify(data));
    },
    SET_OPENPAGE(state, data) {
      state.openPages.push(data);
    },
    SET_CLOASEPAGE(state, data) {
      const pageIndex = state.openPages.findIndex(
        (page) => page.path == data.path
      );
      console.log("关闭页面的index", pageIndex);
      //关闭页面
      state.openPages.splice(pageIndex, 1);
    },
    SET_ACTIVEPAGE(state, data) {
      state.activePages.push(data);
    },
    SET_CLOASEACTIVEPAGE(state, data) {
      // const pageIndex = state.activePages.findIndex(
      //   (page) => page.path == data.path
      // );
      // //关闭页面
      // state.activePages.splice(pageIndex, 1);
      //关闭tag后把缓存中该页面的记录全部删除
      state.activePages = state.activePages.filter(
        (page) => page.path != data.path
      );
      console.log("当前缓存的页面-------", state.activePages);
    },
  },
  actions: {
    //异步请求
    setUserInfo({ commit }, data) {
      setTimeout(() => {
        commit("SET_USERINFO", data);
      }, 1000);
    },
    setActivePage({ commit }, data) {
      commit("SET_ACTIVEPAGE", data);
    },
    setOpenPage({ commit, state }, data) {
      //已存在页面的则不添加到tag中
      if (!state.openPages.find((page) => page.path == data.path)) {
        commit("SET_OPENPAGE", data);
      }
      commit("SET_ACTIVEPAGE", data);
    },
    setClosePage({ commit, state }, data) {
      commit("SET_CLOASEPAGE", data);
      commit("SET_CLOASEACTIVEPAGE", data);
    },
    setCloseActivePage() {
      commit("SET_CLOASEACTIVEPAGE", data);
    },
  },
  modules: {},
});
