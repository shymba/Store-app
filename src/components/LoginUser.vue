<template>
  <div class="sidebar-login" @click="loginUser" v-if="!firstname">
    <p>LOGIN</p>
    <img src="../assets/icon-login.png"/>
  </div>
  <div class="sidebar-login" v-else @click="logoutUser">
    <div class="welcome-user">
      Welcome, {{firstname}}<br>{{lastname}}!
    </div>
    <p>LOGOUT</p>
    <img src="../assets/icons-logout.png"/>
  </div>
  <LoginPage
      v-model:showLoginPage="loginPageVisible"
      @loggedUser="getUser"

  />
</template>

<script>
import ApiService from "@/modules/apiService";
import LoginPage from "@/components/LoginPage";

const apiListCategory = new ApiService();
export default {
  name: "LoginUser",
  components: {LoginPage},
  data() {
    return {
      loginPageVisible: false,
      firstname: '',
      lastname: '',
    }
  },
  methods: {
    loginUser() {
      this.loginPageVisible = true;
    },
    logoutUser() {
      this.firstname = '';
      this.lastname = '';
    },
    async getUser(id) {
      const user = await apiListCategory.getOneUser(id);
      this.firstname = user.name.firstname
      this.lastname = user.name.lastname
    }
  }

}
</script>

<style lang="scss" scoped>
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

</style>