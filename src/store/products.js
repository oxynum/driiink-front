import { defineStore } from "pinia";


export const useProductStore = defineStore({
    id: 'products',

    state: () => ({
    }),
    

    getters: {

    },

    actions: {
        priceFormatter(price){
            return `${(price/100).toFixed(2)} €`
        },
    }
})