<template>
  <header>
    <div class="burger-logo">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="cart">
      <router-link :to="{ name: 'Cart', params: { id: this.id} }"><font-awesome-icon icon="cart-shopping" /></router-link>
      <div>{{ counter }}</div> 
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props:{
    counter: Number
  },
  data() {
    return {
      id: this.$route.params.id,
      cart: []
    }
  },
  async beforeMount(){
    if(JSON.parse(sessionStorage.getItem('cart'))){
        this.cart = JSON.parse(sessionStorage.getItem('cart'))
    }

  }
}

</script>

<style lang="scss" scoped>
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 60px;
    margin: 0 auto;
  }

  .burger-logo{
    height: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .burger-logo > span{
    width: 20px;
    height: 2px;
    border-radius: 1px;
    background: black;
  }

  .burger-logo > span:nth-child(2){
    width: 13px;
  }

  .cart{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    & > div {
      position: absolute;
      top: -10px;
      left: -10px;
      background-color: #21B05C;
      color: white;
      font-family:  Nunito, serif;
      font-size: 12px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }

  a{
    color: black;
  }
</style>