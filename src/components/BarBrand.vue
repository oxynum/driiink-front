<template>
  <div class="barbrand">
    <img class="bar-img" :src="bar_img_src" alt="coktail">
    <h3>{{ title }}</h3>
    <span><font-awesome-icon id="loc_dot" icon="location-dot" /><span class="loc-bar">3 rue de Colombe - Asnières sur seine</span></span>
  </div>
</template>

<script>
export default {
  name: "BarBrand",
  props: ['title', 'bar_img_src']
}
</script>

<style scoped>
  .barbrand{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .bar-img{
    object-fit: cover;
    width: 100%;
    height: 100px;
  }

  h3{
    margin: 20px 0 13px 0;
    font-family: Nunito, serif;
    font-size: 32px;
    font-weight: bold;
  }

  span {
    color: #979797;
    display: inline;
  }

  .loc-bar {
    margin-left: 7px;
    font-family: Nunito, serif;
    font-weight: 600;
    font-size: 13px;
  }


</style>