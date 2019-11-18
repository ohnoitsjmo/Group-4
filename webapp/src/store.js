/* eslint-disable prettier/prettier */
// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Assume we have a universal API that returns Promises
// and ignore the implementation details
import { fetchItem } from "./api";
import ShopDataModel from "@/models/shop/ShopDataModel.js";
export default new Vuex.Store({
    // IMPORTANT: state must be a function so the module can be
    // instantiated multiple times
    state: () => ({
      currentCategory: "Woodwinds"
    }),

    actions: {
      fetchItem({ commit }, id) {
        // return the Promise via `store.dispatch()` so that we know
        // when the data has been fetched
        debugger;
        return fetchItem(id).then(item => {
          commit("setItem", { id, item });
        });
      }
    },
    mutations: {
      setItem (state, { id, item }) {
        //Vue.set(state.currentCategory)
        // Vue.set(state.items, id, item)
      },
      setCurrentCategory (categoryName) {
        debugger;
        state.currentCategory = categoryName
      }
    }
  })

export let ShopModel = new ShopDataModel();