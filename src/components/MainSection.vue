<template>
  <div class="main">
    <h1>Main Block</h1>
    <div v-for="product in listAllProducts" :key="product.id">
      <div><strong>ID:</strong> {{ product.id }}</div>
      <div><strong>Title:</strong> {{ product.title }}</div>
      <div><strong>Price:</strong> {{ product.price }}$</div>
      <div><strong>Category:</strong> {{ product.category }}</div>
      <div>
        <img class="image-product" :src="product.image"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainSection',
  data() {
    return {
      listAllProducts: [],
      imagesOfProducts: []
    }
  },
  methods: {
    async getListAllProducts() {
      const urlBase = 'https://fakestoreapi.com/products';
      const response = await fetch(urlBase).then((res) => (res.json()));

      response.forEach(product => this.listAllProducts.push({
        id: product.id,
        title: product.title,
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

.image-product {
  width: 200px;
}

</style>
