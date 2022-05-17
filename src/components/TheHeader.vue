<template>
  <header>
    <div class="burger-logo">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="cart">
      <font-awesome-icon icon="cart-shopping" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
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
    position: relative;
  }

  .cart::before{
    content: '3';
    color: white;
    display: flex;
    justify-content: center;
    font-family: 'Lato',serif;
    font-weight: 700;
    font-size: 9px;
    align-items: center;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #21B05C;
    position: absolute;
    top: -5px;
    left: -5px;
  }

</style>