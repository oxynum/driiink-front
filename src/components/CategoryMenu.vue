<template>
  <ul>
    <li v-for="category in categories" :key="category.index"><a :href="'#' + category">{{ category }}</a></li>
  </ul>
</template>

<script>
export default {
  name: "CategoryMenu",

  props: {
    categories : Array
  },

}
</script>

<style scoped>
  ul{
    display: flex;
    white-space: nowrap;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  ul::-webkit-scrollbar {
    display: none;
  }

  li{
    margin: 45px 5px 20px 5px;
    font-family: Nunito, serif;
  }

  a{
    padding: 6px 22px;
    border-radius: 50px;
    border: none;
    color: black;
    background-color: #F2F2F2;
    text-decoration: none;
  }

</style>