<template>
  <header class="main-header" id="contactForm">
    <div class="navbar-menu" >
      <div>
        <div class="menu-item">
          <p v-on:click="openFaqsSidebar()">FAQS</p>
        </div>
        <div class="menu-item">
          <p v-on:click="openContactSidebar()">CONTACT</p>
        </div>
      </div>
    </div>
    <div class="navbar-tree-icon"></div>
    <div class="navbar-button" >
      <a
        href="https://www.upwork.com/freelancers/~015bd39d04fe729afe "
        class="navbar-button"
        target="_blank"
      >
        <img
          src="https://www.shareicon.net/data/512x512/2017/02/24/879424_upwork_512x512.png"
          width="50px"
          alt
        />
      </a>
    </div>
    <div class="sidebar" v-bind:class="{'sidebar--active': faqsSidebarIsActive}">
      <div class="sidebar__content" v-bind:class="{'sidebar__content--active':faqsSidebarIsActive}">
        <span class="sidebar__close-btn close-button" v-on:click="closeFaqsSidebar()"></span>
        <FAQS-table />
      </div>
    </div>
    <div class="sidebar" v-bind:class="{ 'sidebar--active': contactSidebarIsActive }">
      <div class="sidebar__content" v-bind:class="{'sidebar__content--active':contactSidebarIsActive}">
        <span class="sidebar__close-btn close-button" v-on:click="closeContactSidebar()"></span>
        <contact-form />
      </div>
    </div>
  </header>
</template>

 <script>
 import FAQS from "./FAQS-table.vue";
import Contact from "./Contact.vue"; 

export default {
  data() {
    return {
      faqsSidebarIsActive: false,
      contactSidebarIsActive: false
    };
  },
  methods: {
    openFaqsSidebar: function() {
      this.faqsSidebarIsActive = true;
    },
    closeFaqsSidebar: function() {
      this.faqsSidebarIsActive = false;
    },
    openContactSidebar: function() {
      this.closeFaqsSidebar();
      this.contactSidebarIsActive = true;
    },
    closeContactSidebar: function() {
      this.closeFaqsSidebar();
      this.contactSidebarIsActive = false;
    }
  },
  components: {
     "FAQS-table": FAQS,
    'contact-form': Contact 
  }

};
</script> 

<style lang="less">
@import url(../variables.less);
@import url(../mixins.less);

.main-header {
  background-color: inherit;

  display: flex;
  justify-content: space-between;

  padding: 20px;
  padding-top: 30px;

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
  margin: 0;

  font-weight: 700;
  font-size: 16px;
  letter-spacing: 1px;
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
  padding-top: 15px;
  text-decoration: none;
  color: black;

  & a:hover {
    color: @dark-green;
  }
}

.sidebar {
  position: fixed;
  z-index: 1;
  top: 0;
  left: -100%;
  background-color: rgba(0, 0, 0, 0.9);

  transition: 450ms;
}

.sidebar--active {
  height: 100%;
  width: 100%;
  left: 0;

  transition: 300ms;
}

.sidebar__close-btn {
  position: absolute;
  top: 2%;
  left: 85%;

  color: @white;
}
.sidebar__close-btn--active {
  display: block;
}

.sidebar__content {
  position: fixed;
  left: -100%;
  width: 100%;

  padding: 25px;

  height: 100%;
  z-index: 3;

  background-color: @dark-green;

  transition: 450ms;
}
.sidebar__content--active {
  left: 0;
}

@media (min-width: @laptop-width) {
  .main-header {
    padding: 20px 50px;
  }
  .sidebar__content {
    width: 75%;

    padding: 100px;
    padding-top: 50px;
  }
  .sidebar__close-btn {
    left: 95%;
  }
}
</style>