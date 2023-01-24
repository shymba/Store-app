<template>
  <div class="main">
    <ProductCard :detailsOfProducts="listAllProducts"/>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";

export default {
  name: 'MainSection',
  components: {ProductCard},
  data() {
    return {
      listAllProducts: [],
    }
  },
  methods: {
    async getListAllProducts() {
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
}


</style>
