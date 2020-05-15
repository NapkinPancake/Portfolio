<template>
  <div class="tools-block" >
    <div class="tools-block__column" data-aos="fade-right" data-aos-duration="700">
      <i class="fas fa-pencil-ruler fa-3x" data-aos="flip-left" data-aos-duration="900"></i>
      <h3>Designer</h3>
      <p>I am gladly take a part in the editing, but rarely create my own designs </p>
      <b>Things I enjoy working with:</b>
      <p>UI, Landing Pages</p>
      <b>Design Tools:</b>
      <p>Photoshop</p>
      <p>Illustrator</p>
    </div>
    <div class="tools-block__column" data-aos="fade-up" data-aos-duration="600">
      <i class="fas fa-laptop-code fa-3x" data-aos="flip-left" data-aos-duration="1200"></i>
      <h3>Front-end Developer</h3>
      <p>This one is my passion. I like to code things from scratch, and enjoy bringing ideas into life in the browser.</p>
      <b>Languages I speak:</b>
      <p>HTML, CSS, JS</p>
      <b>Dev Tools:</b>
      <p>Vue.js</p>
      <p>jQuery</p>
      <p>Bootstrap</p>
      <p>LESS</p>
      <p>VS Code</p>
    </div>
    <div class="tools-block__column" data-aos="fade-left" data-aos-duration="700">
      <i class="fas fa-server fa-3x" data-aos="flip-left" data-aos-duration="1400"></i>
      <h3>Back-end Developer</h3>
      <p>I have also got an experience as Back-end developer, so I easily collaborate with people who works with a server part</p>
      <b>Languages I used to work with:</b>
      <p>PHP, SQL</p>
      <b>Tools I have used:</b>
      <p>Laravel</p>
      <p>MySQL</p>
      <p>PHP My Admin</p>
      <p>GIT</p>
    </div>
  </div>
</template>

<style lang="less">
@import url(../variables.less);

.tools-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  padding: 20px;
  margin-top: -180px;
}

.tools-block__column {
  border: @light-border;
  padding: 70px 45px;
  padding-bottom: 20px;

  background-color: @white;

  &:first-child {
    border-bottom: none;
    border-top-right-radius: @light-border-radius;
    border-top-left-radius: @light-border-radius;
  }
  &:nth-child(3) {
    border-top: none;
    border-bottom-left-radius: @light-border-radius;
    border-bottom-right-radius: @light-border-radius;
  }
}

.tools-block__column {
  & h3 {
    font-size: 24px;
    font-weight: 900;
    letter-spacing: 0px;

    margin: 24px 0;
  }

  & p {
    margin-bottom: 0;
    font-size: 18px;
  }
  & b {
    padding-top: 20px;
    display: block;
    font-size: 18px;
    color: @dark-green;
  }
  & i {
    color: @dark-green;
  }
}

@media (min-width: @tablet-width) {
  .tools-block {
    flex-direction: row;
  }
  .tools-block__column {
    width: 400px;

    border-radius: 0;
    border: @light-border;
    border-right: 0;

    &:first-child {
      border-bottom: @light-border;

      border-top-left-radius: @light-border-radius;
      border-bottom-left-radius: @light-border-radius;

      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:nth-child(3) {
      border-top: @light-border;
      border-right: @light-border;

      border-top-right-radius: @light-border-radius;
      border-bottom-right-radius: @light-border-radius;

      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
}
</style>