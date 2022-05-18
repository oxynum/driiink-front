<template>
  <ul>
    <li v-for="category in categories" :key="category.index"><a :href="category.slug">{{ category.name }}</a></li>
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
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
    color: black;
    text-decoration: none;
  }

  .active{
    background-color: black;
    color: white;
    box-shadow: none;
  }
</style>