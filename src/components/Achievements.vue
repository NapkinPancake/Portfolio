<template>
  <div class="achievements">
    <div class="achievements__text">
      <h2>Hi, I’m Andrew. Nice to meet you!</h2>
      <p>
        Since beginning my journey as a freelance designer nearly 8 years ago,
        I've done remote work for agencies, consulted for startups,
        and collaborated with talented people to create digital products
        for both business and consumer use.
        I'm quietly confident, naturally curious,
        and perpetually working on improving my chops one design problem at a time.
      </p>
    </div>
    <div class="achievements__icons">
      <div class="icons__elem">
        <i class="far fa-clock fa-2x"></i>
        <p>Fast</p>
      </div>
      <div class="icons__elem">
        <i class="fas fa-globe fa-2x"></i>
        <p>Online</p>
      </div>
      <div class="icons__elem">
        <i class="fab fa-css3-alt fa-2x"></i>
        <p>CSS</p>
      </div>
      <div class="icons__elem">
        <i class="fab fa-vuejs fa-2x"></i>
        <p>Responsive</p>
      </div>
      <div class="icons__elem">
        <i class="fab fa-html5 fa-2x"></i>
        <p>HTML5</p>
      </div>
      <div class="icons__elem">
        <i class="far fa-file-code fa-2x"></i>
        <p>Clean</p>
      </div>
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

.achievements {
  background-color: @dark-green;
  color: @white;

  padding: 90px 10px;
  padding-bottom: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.achievements__text {
  width: 360px;

  text-align: center;
}

.achievements__icons {
  width: 360px;
  padding: 0 10px;

  display: flex;
  flex-wrap: wrap;
}
.icons__elem {
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 1px;

  padding: 5px 20px;
  height: 120px;
  width: 160px;
}
@media (min-width: @laptop-width) {
  .achievements {
    flex-direction: row;
    justify-content: center;
  }
  .achievements__text {
    width: 500px;

    text-align: none;
  }

  .achievements__icons {
    width: 500px;
  }
}

@media (min-width: @pc-width) {
  .achievements__text {
    width: 500px;
    margin-right: 100px;
  }
}
</style>