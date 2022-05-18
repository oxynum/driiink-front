<template>
  <div class="container" :id="slug">
    <h3>{{ categoriesName }}</h3>
    <div class="card-container">
      <div class="single-card" v-for="product in categoriesProduct" :key="product.index">
        <img :src="product.image" :alt="product.name">
        <div class="card-text">
          <span class="title">{{ product.name }}</span>
          <p>{{ product.description }}</p>
          <div class="card-price">
            <h2>{{ formattedPrice(product.price) }}</h2>
            <button><font-awesome-icon icon="plus" /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props: {
    categoriesName: String,
    slug: String,
    categoriesProduct: Array,
  },
  methods: {
    formattedPrice: (price) =>{
      let priceInEuros = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price / 100)
      return priceInEuros
    }
  }
}
</script>

<style scoped>

.container{
  margin: 10px 0 0 0;
}

h3{
  font-family: Nunito, serif;
  margin-left: 10px;
}

.card-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 10px;
}

.single-card{
  height: 293px;
  width: 180px;
  background-color: #2D2D2D;
  margin: 5px 0;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
}

img{
  width: 100%;
  height: 142px;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.card-text{
  color: white;
  display: flex;
  flex-direction: column;
  margin: 10px;
  font-family: Nunito, serif;
}

.title{
  font-weight: 600;
}

p{
  font-size: 10px;
  margin-top: 10px;
}

.card-price{
  margin-top: 38px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h2{
  margin-left: 10px;
  font-weight: bold;
}

span{
  font-size: 12px;
}

button{
  background: #20B25D;
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 20px;
  color: white;
  text-align: center;
  font-size: 20px;
}
</style>