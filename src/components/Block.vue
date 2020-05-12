<template>
  <div class="greetings row">
    <div class="col"></div>
    <div class="content-column col-12 col-lg-3">
      <h1><b>Front-end Developer</b></h1>
      Tree at my window, window tree,
      My sash is lowered when night comes on;
      But let there never be curtain drawn
      Between you and me.
    </div>
    <div class="content-column col-12 col-lg-3">
      Vague dream-head lifted out of the ground,
      And thing next most diffuse to cloud,
      Not all your light tongues talking aloud
      Could be profound.
    </div>
    <div class="content-column col-12 col-lg-3">
      But tree, I have seen you taken and tossed,
      And if you have seen me when I slept,
      You have seen me when I was taken and swept
      And all but lost.
    </div>
    <div class="col"></div>

    
  </div>
</template>

<script>

export default {
  data() {
    return {
      greeting: "Quo Vadis, Domine?"
    };
  },
  components: {
  }
};
</script>

<style lang="less">
@import url(../main.less);

.greetings {
  min-height: 1080px;

  background-color: yellow;
}

.content-column {
  padding: 20px 40px;
  margin: 10px;
  background-color: white;

  border: 2px solid grey;
}
</style>