<template>
  <div class="front-block">
    <div class="front-block__info">
      <h1>Front-End Developer</h1>
      <p>I design and code beautifully simple things, and I love what I do.</p>
    </div>
    <div class="front-block__avatar">
      <img src="../img/avatar.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: "Quo Vadis, Domine?"
    };
  },
  components: {}
};
</script>

<style lang="less">
@import url(../variables.less);

.front-block {
  padding: 20px;
  padding-top: 225px;
  padding-bottom: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  
}

.front-block__info {
  & h1 {
    font-size: 54px;
    font-weight: 700;
    letter-spacing: -2px;
  }
  & p {
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 500;
  }
}
</style>