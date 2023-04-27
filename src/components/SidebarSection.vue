<template>
  <div class="sidebar" v-if="show">
    <div class="sidebar-menu">
      <div class="close-sidebar" @click.stop="hideSidebar">
        <img src="../assets/icons-close.png" />
      </div>
      <LoginUser
          :user="userData"
          @loginUser="loginUserComponent"
          @clearData="clearData"
      />
      <div class="menu-content">
        <div
            class="category-menu"
            v-for="category in categoryProducts"
            :key="category"
            @click="getOneCategory(category)"
        >
          {{ category }}
        </div>
      </div>
    </div>
    <LoginPage
        v-model:showLoginPage="loginPageVisible"
        @loggedUser="getUser"
    />
  </div>
</template>

<script>
import ApiService from "@/modules/apiService";
import LoginPage from "@/components/LoginPage";
import LoginUser from "@/components/LoginUser";

const apiListCategory = new ApiService();
export default {
  name: "SidebarSection",
  components: {LoginUser, LoginPage},
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      categoryProducts: null,
      loginPageVisible: false,
      userData: {},
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
    },
    loginUserComponent() {
      this.loginPageVisible = true;
    },
    async getUser(id) {
      const user = await apiListCategory.getOneUser(id);
      this.userData = user.name
    },
    clearData() {
      this.userData = {}
    },
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

    img {
      width: 30px;
    }
  }

  .sidebar-login {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #006000;
    cursor: pointer;

    .welcome-user {
      font-size: 12px;
      margin-right: 10px;
      text-align: start;
      letter-spacing: 2px;
      text-transform: capitalize;
    }
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