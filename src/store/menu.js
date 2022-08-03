import { getMenu } from "@/services/getMenu";
import { defineStore } from "pinia";


export const useMenuStore = defineStore({
    id: 'menu',

    state: () => ({
        contents : {}
    }),
    
    getters: {

    },

    actions: {
        async fetchAllMenus(id){
            this.contents = await getMenu(id)
        }
    }
})