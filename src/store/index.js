import {createStore} from 'vuex'

export default createStore({
    state: {
        cart: [],
        cartTotal: 0
    },
    mutations: {
        addRemoveCart(state, payload){

            payload.toAdd?
            state.cart.push(payload.product) :
            state.cart = state.cart.filter(function(obj){
                return obj.id !== payload.product.id
            });
            state.cartTotal = state.cart.reduceRight((accumulator, object) => {
                return parseFloat(accumulator) + parseFloat(object.price*object.qty); 
            },0); 

            localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal)); 
            localStorage.setItem('cart', JSON.stringify(state.cart)); 

            console.log(state.cartTotal)
            console.log(state.cart)

        },

        updateCart(state, payload){
            state.cart.find(o => o.id === payload.product.id).qty = payload.product.qty; 

            state.cartTotal = state.cart.reduceRight((accumulator, object) => {
                return parseFloat(accumulator) + parseFloat(object.price*object.qty); 
            },0); 

            localStorage.setItem('cartTotal',JSON.stringify(state.cartTotal)); 
            localStorage.setItem('cart',JSON.stringify(state.cart)); 

            console.log(state.cartTotal)
            console.log(state.cart)
        }
        
    },
    actions: {}, 
    modules: {}, 
})