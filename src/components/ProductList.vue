<template>
  <div class="container">
    <h3>{{ productList.category }}</h3>
    <div class="card-container">
      <ProductCard v-for="singleProduct in productList.products[0]" :key="singleProduct" :productInfo="singleProduct"/>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";

export default {
  name: "ProductList",
  components: {
    ProductCard
  },
  props: {
    productList: Object,
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
  align-content: flex-start;
  margin-top: 10px;
}


</style>