<template>
  <div class="coloboration-block" data-aos="flip-left" data-aos-duration="800">
    <div class="coloboration-block__content">
      <div class="coloboration-block__column">
        <h3>Start a project</h3>
      </div>
      <div class="coloboration-block__column">
        <p>Interested in working together? I am always avaliable in UpWork chats</p>
      </div>
      <div class="coloboration-block__column">
        <a href="https://www.upwork.com/freelancers/~015bd39d04fe729afe" target="_blank">My UpWork</a>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  methods: {
    showContactForm() {
      this.$modal.show("contact-form");
      console.log("clicked");
    },
    hideContactForm() {
      this.$modal.hide("contact-form");
    }
  },
 
};
</script>

<style lang="less">
@import url(../variables.less);
@import url(../mixins.less);

.coloboration-block {
  display: flex;
  justify-content: center;

  margin-bottom: -110px;
}
.coloboration-block__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  padding: 56px 32px;
  margin: 0 20px;

  max-width: 1200px;

  color: @white;
  background-color: @black;
  border-radius: @light-border-radius;
}

.coloboration-block__column {
  text-align: center;

  & a {
    .link-button;
    color: @white;
  }
}
@media (min-width: @tablet-width) {
  .coloboration-block__content {
    flex-direction: row;
  }
  .coloboration-block__column {
    flex-basis: 370px;
  }
}
</style>