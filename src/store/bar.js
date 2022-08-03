import { defineStore } from "pinia";
import { getBarInfo } from "@/services/getBarInfo";

export const useBarStore = defineStore({
    id: 'bar',

    state: () => ({
        contents : {}
    }),
    
    getters: {

    },

    actions: {
        async fetchData(id){
            this.contents = await getBarInfo(id)
        }
    }
})