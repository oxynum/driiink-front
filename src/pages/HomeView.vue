<template>
  <TheHeader/>
  <BarBrand :title="this.title" :bar_img_src="this.image"/>
  <CategoryMenu :categories="this.categories"/>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import BarBrand from "@/components/BarBrand"
import CategoryMenu from "@/components/CategoryMenu"

export default {
  name: "HomeView",
  components: {
    TheHeader,
    BarBrand,
    CategoryMenu
  },

  data: function() {
    return {
      title: "O'Sullivan's Pigalle",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2757&q=80",
      categories: ["Nos bons plan 🥝","Les + commandés 🔥", "Nos petits fruités 🍓", "Nos petits fruités 🍓", "Nos petits fruités 🍓", "Nos petits fruités 🍓"],
    }
  }
}
</script>

<style scoped>

</style>