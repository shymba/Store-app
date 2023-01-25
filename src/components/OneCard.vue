<template>
  <div class="product-card">
    <div class="product-title">{{ oneCardDetails.title }}</div>
    <div class="image-product">
      <img :src="oneCardDetails.image" alt="product-image"/>
    </div>
    <div class="product-price">{{ oneCardDetails.price }}$</div>
  </div>
</template>

<script>
export default {
  name: "OneCard",
  props: {
    oneCardDetails: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 200px;
  width: 100%;
  height: 475px;
  margin: 20px;
  padding: 15px;
  box-shadow: 0 5px 10px 0 rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #FFFFFF;

  .product-title {
    margin-bottom: 15px;
  }

  .product-title, .product-price {
    text-align: center;
  }

  .image-product {
    img {
      width: 200px;
      margin: 10px;
    }
  }
}

</style>