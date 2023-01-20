<template>
  <div class="header">
    <button class="menu-btn">Menu</button>
    <div class="header-wrapper" @click="$router.push('/')">
      <img class="logo-header" src="../assets/logo_store.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSection"
}
</script>

<style lang="scss" scoped>
.header {
  height: 120px;
  position: relative;

  .menu-btn {
    position: absolute;
    left: 45px;
    top: 45px;
    cursor: pointer;
  }

  .logo-header {
    width: 100px;
    padding: 10px 0 10px;
    cursor: pointer;
  }
}

</style>