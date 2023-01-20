<template>
  <div class="header">
    <div class="menu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
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

  .menu {
    position: absolute;
    left: 45px;
    top: 45px;
    cursor: pointer;

    .bar {
      width: 30px;
      height: 3px;
      background-color: #006000;
      margin: 5px 0;
      border-radius: 2px;
    }
  }

  .logo-header {
    width: 100px;
    padding: 10px 0 10px;
    cursor: pointer;
  }
}

</style>