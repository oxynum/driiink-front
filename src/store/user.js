import { defineStore } from "pinia";

export const useUserStore = defineStore({
    id: 'user',

    state: () => ({
        id: 1,
        firstname: 'Elyes',
        lastname: 'Voisin',
        gender: 'Homme',
        email: 'elyesvoisin52@gmail.com',
        phone: '0760606060',
        roles: ['User'],
        orders: [''],
        favoriteBar: '',
    }),
    

    getters: {
        getName(state) {
            return state.firstname
        },
        
    },

    actions: {
        setName(state, newName){
            state.firstname = newName
            return state.firstname
        }
    }
})