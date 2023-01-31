<template>
    <div class="product-card" v-if="layout === 'card'">
      <div class="product-title">{{ oneCardDetails.title }}</div>
      <div class="image-product">
        <img :src="oneCardDetails.image" alt="product-image"/>
      </div>
      <div class="product-price">{{ oneCardDetails.price }}$</div>
    </div>
  <div class="product-card-list" v-if="layout === 'list'">
    <div class="image-product">
      <img :src="oneCardDetails.image" alt="product-image"/>
    </div>
    <div class="card-description">
      <div class="product-title">{{ oneCardDetails.title }}</div>
      <div class="product-description">{{ oneCardDetails.description }}</div>
      <div class="product-price">{{ oneCardDetails.price }}$</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OneCard",
  props: {
    oneCardDetails: {
      type: Object,
      required: true
    },
    layout: 'card'
  },
}
</script>

<style lang="scss" scoped>

//card-style
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

//list-style
.product-card-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 10px;
  background-color: #FFFFFF;
  border-radius: 10px;

  .image-product {
    padding: 15px;

    img {
      width: 150px;
    }
  }

  .card-description {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
    margin-left: 30px;
    padding: 10px;

    .product-description {
      margin: 10px 0;
    }
  }
}

</style>