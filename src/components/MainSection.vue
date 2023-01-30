<template>
  <div class="main">
    <div class="menu-sidebar" @click="showSidebar">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <ProductCard :detailsOfProducts="products"/>
    <SidebarSection
        @selectedCategory="getSelectedCategory"
        v-model:show="sidebarVisible"
    />
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import SidebarSection from "@/components/SidebarSection";
import ApiService from "@/modules/apiService";

const apiListProducts = new ApiService();

export default {
  name: 'MainSection',
  components: {ProductCard, SidebarSection},
  data() {
    return {
      products: [],
      sidebarVisible: false
    }
  },
  methods: {
    async getSelectedCategory(category) {
      if(category === 'all products') {
        this.products = await apiListProducts.getAllProducts()
      } else {
        this.products = await apiListProducts.getSelectedCategory(category);
      }
    },
    showSidebar() {
      this.sidebarVisible = true;
    }
  },
  async mounted() {
    this.products = await apiListProducts.getAllProducts()
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
