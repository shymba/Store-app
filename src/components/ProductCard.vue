<template>
  <div class="listOfCards">
    <OneCard
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
  justify-content: center;
}

</style>