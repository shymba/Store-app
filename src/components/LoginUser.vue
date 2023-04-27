<template>
  <div class="sidebar-login" @click="loginUser" v-if="!user.firstname">
    <p>LOGIN</p>
    <img src="../assets/icon-login.png"/>
  </div>
  <div class="sidebar-login" @click="logoutUser" v-else>
    <div class="welcome-user" >
      Welcome, {{ user.firstname }}<br>{{ user.lastname }}!
    </div>
    <p>LOGOUT</p>
    <img src="../assets/icons-logout.png"/>
  </div>
</template>

<script>
export default {
  name: "LoginUser",
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {
    loginUser() {
      this.$emit('loginUser');
    },
    logoutUser() {
      this.$emit('clearData')
    },
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

  button {
    margin-top: 130px;
  }

  .welcome-user {
    font-size: 12px;
    margin-right: 10px;
    text-align: start;
    letter-spacing: 2px;
    text-transform: capitalize;
  }
}

</style>