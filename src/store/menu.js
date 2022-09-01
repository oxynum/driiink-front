import { getMenu } from "@/services/getMenu";
import { activeMenu } from "@/utils/activeMenu";  
import { defineStore } from "pinia";


export const useMenuStore = defineStore({
    id: 'menu',

    state: () => ({
        contents : {}
    }),
    
    getters: {
        async getActiveMenu(){
            this.contents = await activeMenu(this.contents)
        }
    },

    actions: {
        async fetchAllMenus(id){
            this.contents = await getMenu(id)
        }
    }
})