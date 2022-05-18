<template>
  <TheHeader/>
  <BarBrand :title="this.title" :bar_img_src="this.image"/>
  <CategoryMenu :categories="this.categories"/>
  <GoodDeal :promotions="this.promotions" />
  <ProductList
      v-for="products in this.allProducts"
      :key="products.index"
      :categoriesName="products.categoriesName"
      :categoriesProduct="products.products"
      :slug="products.slug"
  />
</template>

<script>
import TheHeader from "@/components/TheHeader";
import BarBrand from "@/components/BarBrand";
import CategoryMenu from "@/components/CategoryMenu";
import GoodDeal from "@/components/GoodDeal";
import ProductList from "@/components/ProductList";

export default {
  name: "HomeView",
  components: {
    TheHeader,
    BarBrand,
    CategoryMenu,
    GoodDeal,
    ProductList
  },

  data: function() {
    return {
      title: "O'Sullivan's Pigalle",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2757&q=80",
      categories: [
        {
          "name" : "Nos bons plan 🥝",
          "slug" : "#bon_plans",
        },
        {
          "name" : "Les + commandés 🔥",
          "slug" : "#plus_commande",
        },
        {
          "name" : "Nos petits fruités 🍓",
          "slug" : "#petits_fruites",
        },
      ],
      promotions: [
        {
          "name": "Omega promo !",
          "description": "2 verres achetés = le 3ème offert jusqu’à 00h",
          "img": "https://i.postimg.cc/Y9PZzkLd/red-cocktail.png",
        },
        {
          "name": "Omega promo !",
          "description": "1 soft acheté = le 2ème offert jusqu’à 00h",
          "img": "https://i.postimg.cc/VvQ6Zx3F/long-island.png",
        },
        {
          "name": "Omega promo !",
          "description": "2 verres achetés = le 3ème offert jusqu’à 00h",
          "img": "https://i.postimg.cc/Y9PZzkLd/red-cocktail.png",
        },
        {
          "name": "Omega promo !",
          "description": "1 soft acheté = le 2ème offert jusqu’à 00h",
          "img": "https://i.postimg.cc/VvQ6Zx3F/long-island.png",
        },
      ],
      allProducts: [
        {
          "categoriesName": "Les + commandés 🔥",
          "slug": "plus_commande",
          "products" : [
            {
              "name" : "IPA",
              "description" : "Fesh lime, profitez-en ! c’est doux, et frais, surtout lorsqu’il fait chaud. Un Mojito qui fouhaite bien ",
              "price": 1500,
              "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            },
            {
              "name" : "Lime Mojito",
              "description" : "Fesh lime, profitez-en ! c’est doux, et frais, surtout lorsqu’il fait chaud. Un Mojito qui fouhaite bien ",
              "price": 1500,
              "image": "https://images.unsplash.com/photo-1546171753-97d7676e4602?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
            },
            {
              "name" : "Red Beer",
              "description" : "Fesh lime, profitez-en ! c’est doux, et frais, surtout lorsqu’il fait chaud. Un Mojito qui fouhaite bien ",
              "price": 1500,
              "image": "https://images.unsplash.com/photo-1650064174451-9a041128ac37?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2775",
            },
            {
              "name" : "Ginger Ananas",
              "description" : "Fesh lime, profitez-en ! c’est doux, et frais, surtout lorsqu’il fait chaud. Un Mojito qui fouhaite bien ",
              "price": 1500,
              "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
            }
          ]
        },
        {
          "categoriesName": "Nos petits fruités 🍓",
          "slug": "petits_fruites",
          "products" : [
            {
              "name" : "Diabolo Fruité",
              "description" : "Fesh lime, profitez-en ! c’est doux, et frais, surtout lorsqu’il fait chaud. Un Mojito qui fouhaite bien ",
              "price": 1500,
              "image": "https://images.unsplash.com/photo-1574571791847-06514225b338?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80",
            },
            {
              "name" : "Cocktail name",
              "description" : "Fesh lime, profitez-en ! c’est doux, et frais, surtout lorsqu’il fait chaud. Un Mojito qui fouhaite bien ",
              "price": 1500,
              "image": "https://images.unsplash.com/photo-1609951651556-5334e2706168?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            },
            {
              "name" : "Jus d'orange",
              "description" : "Fesh lime, profitez-en ! c’est doux, et frais, surtout lorsqu’il fait chaud. Un Mojito qui fouhaite bien ",
              "price": 1500,
              "image": "https://images.unsplash.com/photo-1618724980108-a4d3856fd8f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
            },
            {
              "name" : "Cocktail name",
              "description" : "Fesh lime, profitez-en ! c’est doux, et frais, surtout lorsqu’il fait chaud. Un Mojito qui fouhaite bien ",
              "price": 1500,
              "image": "https://images.unsplash.com/photo-1546171753-97d7676e4602?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
            },
            {
              "name" : "Red Beer",
              "description" : "Fesh lime, profitez-en ! c’est doux, et frais, surtout lorsqu’il fait chaud. Un Mojito qui fouhaite bien ",
              "price": 1500,
              "image": "https://images.unsplash.com/photo-1650064174451-9a041128ac37?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2775",
            },
            {
              "name" : "Ginger Ananas",
              "description" : "Fesh lime, profitez-en ! c’est doux, et frais, surtout lorsqu’il fait chaud. Un Mojito qui fouhaite bien ",
              "price": 1500,
              "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
            },
          ]
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>