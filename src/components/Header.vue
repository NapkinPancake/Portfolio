<template>
  <header class="main-header">
    <div class="navbar-menu">
      <ul>
        <li class="menu-item">
          <p v-on:click="openFaqsSidebar()">FAQS</p>
        </li>
        <li class="menu-item">
          <p>CONTACT</p>
        </li>
      </ul>
    </div>
    <div class="navbar-tree-icon"></div>
    <div class="navbar-button">
      <i class="fas fa-arrow-down fa-2x"></i>
    </div>
    <div class="FAQS-slider" v-bind:class="{'FAQS-sidebar--active': faqsSidebarIsActive }">
      <div
        class="FAQS-slider__table"
        v-bind:class="{'FAQS-slider__table--active':faqsSidebarIsActive}"
      >
        <p
          class="FAQS-slider__close-btn"
          v-on:click="closeFaqsSidebar()"
        >
          <i class="fas fa-times fa-3x"></i>
        </p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      faqsSidebarIsActive: false
    };
  },
  methods: {
    openFaqsSidebar: function() {
      this.faqsSidebarIsActive = true;
    },
    closeFaqsSidebar: function() {
      this.faqsSidebarIsActive = false;
    }
  }
};
</script>

<style lang="less">
@import url(../variables.less);
@import url(../mixins.less);

.main-header {
  min-height: 80px;
  background-color: inherit;

  display: flex;
  justify-content: space-between;

  padding: 50px;
  padding-top: 30px;

  position: fixed;
  width: 100%;
  top: 0;
}

.navbar-menu {
  & ul {
    padding: 0;
    margin: 0;
  }
}

.menu-item {
  display: inline-block;

  padding: 25px;
}

.menu-item p {
  font-weight: 800;
  font-size: 15px;
  letter-spacing: 0.5px;
  color: @light-grey;
  cursor: pointer;

  transition: 700ms;

  &:hover {
    color: @dark-green;
  }
}

.navbar-tree-icon img {
  width: 100px;
}
.navbar-button {
  padding: 25px;

  & i:hover {
    color: @dark-green;
  }
}

.FAQS-slider {
  position: fixed;
  z-index: 1;
  top: 0;
  left: -100%;
  background-color: rgba(0, 0, 0, 0.5);

  transition: 300ms;
}

.FAQS-sidebar--active {
  height: 100%;
  width: 100%;
  left: 0;

  transition: 300ms;
}

.FAQS-slider__close-btn {
  position: absolute;
  top: 2%;
  left: 80%;

  color: @white;
}
.FAQS-slider__close-btn--active {
  display: block;
}

.FAQS-slider__table {
  position: fixed;
  left:-30%;
  width: 30%;

  height: 100%;
  z-index: 3;

  background-color: @dark-green;

  transition: 300ms;
}
.FAQS-slider__table--active {
  left: 0;
}
</style>