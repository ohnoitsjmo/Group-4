/* eslint-disable prettier/prettier */
// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

// Assume we have a universal API that returns Promises
// and ignore the implementation details
import { fetchItem } from "./api";
import ShopDataModel from "@/models/shop/ShopDataModel.js";
import CartDataModel from "@/models/cart/CartDataModel.js";
import AnnouncementDataModel from './models/home/AnnouncementDataModel';

export default new Vuex.Store({
    // IMPORTANT: state must be a function so the module can be
    // instantiated multiple times
    state: () => ({
      announcements: {

      },
      currentCategory: "Woodwinds",
      user: {
        loggedIn: false,
        userLevel: "user"
      },
    }),

    actions: {
      login: function({ commit }, payload) {
        const { email, password } = payload;
        return axios.post("api/login", { email, password }).then((res) => {
          console.log(res)
          if(res.data.success && res.data.success === true){
            let loggedIn = res.data.success
            let userLevel = res.data.user.role
            commit("login", { loggedIn, userLevel });
          }
        });
      },
      logout: function({ commit }) {
        return axios.get("/api/logout").then(() => {
          commit("logout");
        });
      },
      fetchItem({ commit }, id) {
        // return the Promise via `store.dispatch()` so that we know
        // when the data has been fetched
        debugger;
        return fetchItem(id).then(item => {
          commit("setItem", { id, item });
        });
      },
      fetchAnnouncements({ commit }, id) {
        // return the Promise via `store.dispatch()` so that we know
        // when the data has been fetched
        debugger;
        return fetchAnnouncements(id).then(announcement => {
          commit("setAnnouncements", { id, announcement });
        });
      }
    },
    mutations: {
      setItem (state, { id, item }) {
        Vue.set(state.items, id, item)
      },
      setAnnouncements (state, { id, item }) {
        Vue.set(state.announcements, id, announcement)
      },
      login (state, { loggedIn, userLevel }) {
        Vue.set(state.user, "loggedIn", loggedIn)
        Vue.set(state.user, "userLevel", userLevel)
      },
      logout: function(state){
        Vue.set(state.user, "loggedIn", false)
        Vue.set(state.user, "userLevel", "Customer")
      },
    }
  })
export let ShopModel = new ShopDataModel();
export let CartModel = new CartDataModel();
export let AnnouncementModel = new AnnouncementDataModel();