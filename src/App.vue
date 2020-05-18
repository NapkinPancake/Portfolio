<template>
  <div id="App">
    <div class="container-fluid" >
      <app-preloader />
      <app-header />
      <app-tree />
      <app-achievements />
      <app-tools />
      <app-projects />
      <app-coloboration />
      <app-footer />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style lang="less">
@import url(./main.less);
.container-fluid {
  padding: 0;
}
</style>


