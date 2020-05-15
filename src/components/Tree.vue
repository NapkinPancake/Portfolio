<template>
  <div class="front-block" data-aos="fade-up" data-aos-duration="1000">
    <div class="front-block__info">
      <h1 v-on:click="roundIcon()" el="header">Front-End Developer</h1>
      <p>I design and code beautifully simple things, and I love what I do.</p>
    </div>
    <div class="front-block__avatar">
      <img src="../img/avatar.png" alt />
    </div>
    <div class="front-block__flying-icons">
      <div class="front-block__flying-icons-wrap">
        <div class="flying-icons__block">
          <div class="flying-icons__elem">
            <img src="../img/css-black-logo.png" alt />
          </div>
        </div>
        <div class="flying-icons__block">
          <div class="flying-icons__elem">
            <img src="../img/html-black-logo.png" alt />
          </div>
        </div>
           <div class="flying-icons__block">
          <div class="flying-icons__elem">
            <img src="../img/js-black-logo.png" alt />
          </div>
        </div>
        <div class="flying-icons__block">
          <div class="flying-icons__elem">
            <img src="../img/photoshop-black-logo.png" alt />
          </div>
        </div>
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
  methods: {
    roundIcon: function() {
      setInterval(function() {
        this.$refs.iconsBlock.style.transform = "rotate(5deg)";
        this.$refs.header.style.color = "red";
      }, 100);
    }
  },
  components: {}
};
</script>

<style lang="less">
@import url(../variables.less);

.front-block {
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.front-block__info {
  padding-bottom: 30px;
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

.front-block__avatar {
  margin-top: 70px;
}
.front-block__flying-icons-wrap {
  height: 520px;
  width: 520px;

  position: relative;
  top: -325px;

  display: flex;
  flex-wrap: wrap;

  margin-top: -40px;

  animation: mainOrbit 30s infinite linear;
}

.flying-icons__block {
  height: 260px;
  width: 260px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.flying-icons__elem {
  width: 80px;
  height: 80px;

  padding: 10px;

  border-radius: 60px;

  box-shadow: 5px 10px 18px lightgray;
  z-index: 3;

  animation: elemOrbit 30s infinite linear;

  &:hover {
    box-shadow: 5px 10px 18px #888888;
  }

  & img {
    width: 60px;

    transform: none;
  }
}
@keyframes mainOrbit {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(-360deg);
  }
}

@keyframes elemOrbit {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

@media (max-width: 500px) {
  .front-block__flying-icons-wrap {
    display: none;
  }
}
</style>