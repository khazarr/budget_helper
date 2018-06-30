import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        halko: 1,
        uploadedData: null,
    },
    mutations: {
        setUploadedData(state, payload) {
            state.uploadedData = payload
        }
    },
    getters: {
        getUploadedData(state) {
            return state.uploadedData
        }
    }
})