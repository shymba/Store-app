<template>
  <div class="login-page" v-if="showLoginPage" @click="hideLoginPage">
    <div class="login-page-content" @click.stop>
      <form class="login-form" @submit.prevent="onSubmit">
        <div class="close">
          <img src="../assets/icons-close.png" @click="hideLoginPage"/>
        </div>
        <label for="username" class="username" />
        <input
            id="username"
            type="text"
            placeholder="Type username"
            v-model="userName"
        >
        <label for="password" class="username" />
        <input
            id="password"
            type="password"
            placeholder="Enter your password"
            v-model="userPassword"
            required
        >
        <div class="submit-btn">
          <button class="btn" type="submit" value="Submit">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  props: {
    showLoginPage: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      userName: '',
      userPassword: '',
      loginUsers: []
    }
  },
  methods: {
    hideLoginPage() {
      this.$emit('update:showLoginPage', false)
    },
    onSubmit() {
      let dataUser = {
        name: this.userName,
        password: this.userPassword
      }
      this.loginUsers.push(dataUser)
      this.$emit('loggedUser', this.loginUsers)
      this.loginUsers = [];
      this.hideLoginPage();

      this.userName = '';
      this.userPassword = '';
    }
  },
}
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);

  .login-page-content {
    margin: auto;
    background-color: #e7e7e7;
    border-radius: 10px;

    .login-form {
      display: flex;
      flex-direction: column;
      width: 350px;
      padding: 0 20px 10px;

      .close {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding: 10px 0;

        img {
          width: 20px;
          cursor: pointer;
        }
      }

      input {
        padding: 10px 5px;
        margin-bottom: 15px;
        font-size: 14px;
        background-color: #FFFFFF;
        border-radius: 5px;
        outline: none;
        border: none;
      }

      .btn {
        margin-bottom: 10px;
        padding: 10px 25px;
        font-size: 16px;
        border-radius: 5px;
        outline: none;
        border: none;
        background-color: #006000;
        color: #FFFFFF;
        cursor: pointer;
      }
    }
  }
}

</style>