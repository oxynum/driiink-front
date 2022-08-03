import { defineStore } from "pinia";

export const useCartStore = defineStore({
    id: 'cart',

    state: () => ({
        contents: JSON.parse(localStorage.getItem('cart')) ?? {}
    }),
    

    getters: {
        // getCount(state){
        //     return state.contents.length
        // },
        // getCart(state){
        //     return state.contents
        // },
        // getTotal(state){
        //     state.contents.forEach(el => {
        //         el
        //     });
        // },
    },

    actions: {
        add(product){
            if(this.contents[product.id]){
                this.contents[product.id].quantity += 1
            } else {
                this.contents[product.id]= {
                    product,
                    quantity: 1
                }
            }
        },
        remove(product){
            if (!this.contents[product.id]) {
                return
            } else{
                delete this.contents[product.id]
            }
        },
        emptyCart(){
            this.contents
        }
        //TODO TOUT REUNIR EN UNE FONCTION
    }
})