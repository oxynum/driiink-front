<template>
  <div class="barbrand">
    <h3>{{ name }}</h3>
    <span><font-awesome-icon id="loc_dot" icon="location-dot" /><span class="loc-bar">{{ address }}</span></span>
  </div>
</template>

<script>
export default {
  name: "BarBrand",
  props: ['name', 'address']
}
</script>

<style scoped>
  .barbrand{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    width: 100%;
    text-align: center;
  }

  .loc-bar {
    margin-left: 7px;
    font-family: Nunito, serif;
    font-weight: 600;
    font-size: 13px;
  }


</style>