<template>
  <div class="sidebar" v-if="show">
    <div class="sidebar-menu">
      <div class="close-sidebar" @click.stop="hideSidebar">X</div>
      <div class="menu-content">
        <div
            class="category-menu"
            v-for="category in categoryProducts"
            :key="category"
            @click="getOneCategory(category)"
        >
          {{category}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from "@/modules/apiService";

const apiListCategory = new ApiService();
export default {
  name: "SidebarSection",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      categoryProducts: null,
    }
  },
  methods: {
    async getAllCategory() {
      this.categoryProducts = await apiListCategory.getAllSidebarCategory()
      this.categoryProducts.unshift('all products')
    },
    getOneCategory(category) {
      this.$emit('selectedCategory', category)
    },
    hideSidebar() {
      this.$emit('update:show', false)
    }
  },
  mounted() {
    this.getAllCategory();
  }
}
</script>

<style lang="scss" scoped>
.sidebar-menu {
  background-color: #383831;
  width: 300px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  color: #FFFFFF;
  z-index: 10;

  .close-sidebar {
    text-align: end;
    font-weight: bold;
    cursor: pointer;
    margin: 10px;
  }

  .menu-content {
    margin-top: 50px;
    margin-left: 20px;
  }

  .category-menu {
    font-weight: bold;
    text-transform: capitalize;
    text-align: left;
    cursor: pointer;
    margin-bottom: 10px;
  }
}

</style>