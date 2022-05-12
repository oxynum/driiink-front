<template>
  <HeaderComponent/>
  <BarName/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import BarName from "@/components/BarName";


export default {
  name: 'App',
  components: {
    BarName,
    HeaderComponent
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Nunito:wght@300;400;700;800;900&display=swap');


</style>
