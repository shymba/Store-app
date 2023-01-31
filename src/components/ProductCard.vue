<template>
  <div class="listOfCards">
    <div class="btn-section">
      <div class="btn-content">
        <button
            @click="layout = 'list'"
            :class="{active: layout === 'list'}"
        >
          List
        </button>
        <button
            @click="layout = 'card'"
            :class="{active: layout === 'card'}"
        >
          Cards
        </button>
      </div>
    </div>
    <OneCard
        :layout="layout"
        v-for="card in detailsOfProducts"
        :key="card.id"
        :oneCardDetails="card"
    />
  </div>
</template>

<script>
import OneCard from "@/components/OneCard";

export default {
  name: "ProductCard",
  components: {OneCard},
  data() {
    return {
      layout: 'card'
    }
  },
  props: {
    detailsOfProducts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.listOfCards {
  display: flex;
  width: 1200px;
  flex-wrap: wrap;
  align-items: center;
  //justify-content: center;
  justify-content: flex-start;
  margin: 20px;

  .btn-section {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-right: 10px;

    .btn-content {
      margin-right: 10px;

      button {
        padding: 5px 10px;
        margin-left: 10px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
      }

      .active {
        color: #FFFFFF;
        background-color: tomato;
        cursor: not-allowed;
      }
    }
  }
}

</style>