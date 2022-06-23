<template>
  <header>
    <div class="burger-logo">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="cart">
      <router-link :to="{ name: 'Cart', params: { id: this.id} }"><font-awesome-icon icon="cart-shopping" /></router-link> 
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      id: this.$route.params.id 
    }
  }
}

</script>

<style>
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
  }

  a{
    color: black;
  }
</style>