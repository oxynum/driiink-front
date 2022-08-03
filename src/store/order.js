import { defineStore } from "pinia";


export const useOrderStore = defineStore({
    id: 'order',

    state: () => ({
        contents: JSON.parse(localStorage.getItem('order')) ?? {}
    }),
    

    getters: {

    },

    actions: {

    }
})