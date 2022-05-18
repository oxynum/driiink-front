<template>
    <div class="container" id="bon_plans">
      <h3>Nos bon plans 🥝</h3>
      <div class="card-container">
        <div v-for="promotion in promotions" class="single-card" :key="promotion.index">
          <div class="card-text">
            <h3>{{ promotion.name }}</h3>
            <p>{{ promotion.description }}</p>
            <span>Commander</span>
          </div>
          <img :src="promotion.img" alt="cocktail">
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
    background-color: #20B25D;
    margin: 10px 20px;
    border-radius: 20px;
    position: relative;

  }


  .card-text{
    display: flex;
    flex-direction: column;
    color: white;
    font-family: Nunito, serif;
    margin: 16px 0 0 27px;
  }

  .card-text > h3{
    font-weight: 600;
    margin-bottom: 7px;
  }

  .card-text > p {
    white-space: pre-line;
    width: 207px;
    text-align: center;
    font-size: 14px;
  }

  .card-text > span{
    margin-top: 15px;
    position: relative;
  }

  .card-text > span::before{
    content: ">";
    position: absolute;
    left: -10px;
  }

  img{
    position: absolute;
    top: -20px;
    right: -30px;
    z-index: 1;
    height: 132px;
    object-fit: contain;
  }

</style>