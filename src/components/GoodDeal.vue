<template>
    <div class="container" id="bon_plans">
      <h3>Nos bon plans 🥝</h3>
      <div class="card-container">
        <div v-for="promotion in promotions" class="single-card" :key="promotion.index">
          <div class="card-text">
            <h3>Valentine Day ❤️</h3>
            <span>plus que 1 heure 🕢</span>
          </div>
          <h2>-50% sur le 2ème</h2>
          <p>*voir les conditions</p>
        <button class="btn">👀</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "GoodDeal",
  props: {
    promotions: Array
  },
}
</script>

<style scoped>

  .container{
    margin: 10px 0 0 10px;
  }

  h3{
    font-family: Nunito, serif;
  }

  .card-container{
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    overflow-x: auto;
    padding-top: 15px;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  .card-container::-webkit-scrollbar {
    display: none;
  }

  .single-card{
    width: 275px;
    flex: none;
    height: 120px;
    background-color: #d7d7d7;
    margin: 10px 8px;
    border-radius: 20px;
    position: relative;
  }

  .single-card:nth-child(1){
    margin-left: 0;
  }

  .card-text{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    font-family: Nunito, serif;
    margin: 16px 0 0 10px;
  }

  .card-text > h3{
    font-weight: 600;
  }
  .card-text > span{
    color: #b1b1b1;
    font-size: 10px;
    margin-right: 7px;
  }

  h2{
    font-size: 24px;
    font-family: Nunito, serif;
    font-weight: bold;
    margin: 8px 0 0 10px;
  }

  p{
    color: #b1b1b1;
    font-size: 10px;
    font-family: Nunito, serif;
    font-weight: 600;
    margin-left: 10px;
  }

  .btn{
    position: absolute;
    right: 0;
    bottom: 0;
    border: none;
    background-color: #21B05C;
    border-bottom-right-radius: 15px;
    border-top-left-radius: 10px;
    width: 36px;
    height: 30px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>