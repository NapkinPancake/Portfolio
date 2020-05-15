<template>
  <div class="projects-block">
    <div class="projects-block__text">
      <h2>My recent works</h2>
      <p>
        Here are a few projects I've worked on recently. Want to see more?
        <a v-on:click="openContactSidebar()">Email me.</a>
      </p>
    </div>
    <div class="projects-block__projects-cards">
      <div class="projects-cards__elem" data-aos="zoom-out-right" data-aos-duration="1200">
        <div class="projects-cards__elem--content">
          <p>This is temlate for russian Barbershop website</p>
          <a >View</a>
        </div>
      </div>
      <div class="projects-cards__elem" data-aos="zoom-out-up" data-aos-duration="1200">
        <div class="projects-cards__elem--content">
          <p>I designed and coded simple and atractive design for German company site</p>
          <a>View</a>
        </div>
      </div>
      <div class="projects-cards__elem" data-aos="zoom-out-right" data-aos-duration="1200">
        <div class="projects-cards__elem--content">
          <p>On Process...</p>
        </div>
      </div>
    </div>


  </div>
</template>


<style lang="less">
@import url(../variables.less);
@import url(../mixins.less);
.projects-block {
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 60px;
}

.projects-block__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 60px;

  & a {
    text-decoration: none;
    color: @dark-green;
    font-weight: 600;
  }
}

.projects-block__projects-cards {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}

.projects-cards__elem {
  text-align: center;

  width: 340px;
  height: 210px;
  margin: 10px;
  padding: 40px 25px;

  background-color: whitesmoke;
  border: 2px solid black;
  border-radius: 10px;
  color: white;

  background: url(../img/barbershop.jpg);
  background-size: cover;

  &:nth-child(2) {
    background: url(../img/kosmo.png);
    background-size: cover;
  }
  &:nth-child(3) {
    background: url(../img/backery.png);
    background-size: cover;
  }

  &:hover {
    transition: 1200ms;
    background: @black;
    .projects-cards__elem--content {
      opacity: 1;
    }
  }
}

.projects-cards__elem--content {
  opacity: 0;

  font-weight: 500;
}

.projects-cards__elem--content a {
  .link-button;
}
</style>