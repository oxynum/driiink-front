import { defineStore } from "pinia";
import { getMenu } from "@/services/getMenu";

export const useAppStore = defineStore({
    id: 'app',

    state: () => ({

    }),
    

    getters: {

    },

    actions: {
        async getMenus(){
            return await getMenu()
        }
    }
})