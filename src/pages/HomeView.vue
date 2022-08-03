<template>
  <ScreenLoader v-show="this.loader"/>
  <TheHeader :counter="this.counter" @checkCart="checkCart"/>
  <BarBrand :name="this.name" :address="this.address"/>
  <CategoryMenu :categories="this.categories"/>
  <GoodDeal :promotions="this.promotions" />
  <ProductList v-for="productList in products" :key="productList" :productList="productList" @checkCounter="checkCounter"/>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import BarBrand from "@/components/BarBrand";
import CategoryMenu from "@/components/CategoryMenu";
import GoodDeal from "@/components/GoodDeal";
import ProductList from "@/components/ProductList";
import ScreenLoader from "@/components/ScreenLoader.vue";
import { getMenuData } from '@/services/getMenuData';
import { parseCategories } from '@/utils/parseCategories';
import { driiink_api_response_parser } from '@/utils/parser';
import { activeMenu } from '@/utils/activeMenu';
import { useBarStore } from "@/store/bar";
import { useMenuStore } from "@/store/menu";

export default {
  name: "HomeView",
  components: {
    ScreenLoader,
    TheHeader,
    BarBrand,
    CategoryMenu,
    GoodDeal,
    ProductList
  },
  data() {
    return {
      loader: true,
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
      categories: null,
      name : null,
      address: null,
      menu: null,
      products: null,
      counter: 0,
    }
  },
  setup(){
    const bar = useBarStore()
    const menus = useMenuStore()

    return {
      bar,
      menus
    }
  },
  async beforeMount(){
    const barID = this.$route.params.id

    await this.bar.fetchData(barID)
    this.name = this.bar.contents.name
    this.address = this.bar.contents.adress
    
    await this.menus.fetchAllMenus(barID)
    const currentMenu = await activeMenu(this.menus.contents)

    const menu = await getMenuData(currentMenu.id)
    this.categories = await parseCategories(menu.products)

    this.products = await driiink_api_response_parser(this.categories, menu.products)

    if(JSON.parse(sessionStorage.getItem('cart'))){
          this.counter = JSON.parse(sessionStorage.getItem('cart')).length
    }

    this.loader = false
  },
  methods: {
    checkCounter(v){
      if(v){
        this.counter = 0
        this.cart = JSON.parse(sessionStorage.getItem('cart'))
        this.counter = this.cart.length
      }
    } 
  }
}
</script>

<style scoped>

</style>