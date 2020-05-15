<template>
  <div class="achievements" id="achievements" data-aos="fade-up" >
    <div class="achievements__text">
      <h2>Hi, I’m Andrew. Nice to meet you!</h2>
      <p>
        Since beginning my journey as a developer about year ago,
        I've done remote work for agencies
        and collaborated with ambitious people to create digital products
        for both business and consumer use.
        I'm quietly responsive, naturally curious,
        and consider for the development details.
      </p>
    </div>
    <div class="achievements__icons">
      <div class="icons__elem">
        <img src="../img/fast-icon.png" alt="" data-aos="flip-up" data-aos-duration="900">
        <p>FAST</p>
      </div>
      <div class="icons__elem">
        <img src="../img/responsive-icon.png" alt="">
        <p>Responsive</p>
      </div>
      <div class="icons__elem">
        <img src="../img/quarantee-icon.png" alt="" data-aos="flip-up" data-aos-duration="900">
        <p>Qualitive</p>
      </div>
      <div class="icons__elem">
        <img src="../img/clean-code-icon.png" alt="">
        <p>Clean Code</p>
      </div>
      <div class="icons__elem">
        <img src="../img/fast-icon.png" alt="" data-aos="flip-up" data-aos-duration="900">
        <p>FAST</p>
      </div>
      <div class="icons__elem">
        <img src="../img/responsive-icon.png" alt="">
        <p>Responsive</p>
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

  text-align: center;

  & h2 {
    font-weight: 700;
  }
  & p {
    font-size: 18px;
    font-weight: 400;
  }
}

.achievements__icons {
  width: 360px;
  padding: 0 10px;

  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
}
.icons__elem {
  text-align: center;
  align-items: center;

  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;

  padding: 5px 20px;
  height: 120px;
  width: 160px;

  & img {
    width: 60px;
    filter:invert(1);
  }
}
@media (min-width: @laptop-width) {
  .achievements {
    flex-direction: row;
    justify-content: center;
  }
  .achievements__text {
    max-width: 600px;

    text-align: none;
  }

  .achievements__icons {
    width: 500px;
  }
}

@media (min-width: @pc-width) {
  .achievements__text {
    margin-right: 100px;
  }
}
</style>