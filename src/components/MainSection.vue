<template>
  <div class="main">
    <div class="menu-sidebar" @click="showSidebar">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <ProductCard :detailsOfProducts="listAllProducts"/>
    <SidebarSection
        @check="getSelected"
        v-model:show="sidebarVisible"
    />
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import SidebarSection from "@/components/SidebarSection";

export default {
  name: 'MainSection',
  components: {ProductCard, SidebarSection},
  data() {
    return {
      listAllProducts: [],
      sidebarVisible: false
    }
  },
  methods: {
    async getListAllProducts() {
      console.log(this.sidebarVisible)
      this.listAllProducts = [];
      const urlBase = 'https://fakestoreapi.com/products';
      const response = await fetch(urlBase).then((res) => (res.json()));

      response.forEach(product => this.listAllProducts.push({
            id: product.id,
            title: product.title,
            description: product.description,
            rating: {
              count: product.rating.count,
              rate: product.rating.rate
            },
            price: product.price,
            image: product.image,
            category: product.category,
          }
      ));
    },
    async getSelected(category) {
      if(category === 'all products') {
        await this.getListAllProducts()
      } else {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then((res) => res.json());

        this.listAllProducts = response;
      }
    },
    showSidebar() {
      this.sidebarVisible = true;
      console.log(this.sidebarVisible)
    }
  },
   mounted() {
    this.getListAllProducts()
  }
}
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-bottom: 4rem;
  max-width: 1200px;
  margin: 0 auto;

  .menu-sidebar {
    position: absolute;
    left: 45px;
    top: 45px;
    cursor: pointer;

    .bar {
      width: 30px;
      height: 3px;
      background-color: #006000;
      margin: 5px 0;
      border-radius: 2px;
    }
  }
}

</style>
