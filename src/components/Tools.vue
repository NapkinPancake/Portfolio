<template>
  <div class="tools-block">
    <div class="tools-block__column">
      <i class="fas fa-pencil-ruler fa-3x"></i>
      <h3>Designer</h3>
      <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
      <b>Languages I speak:</b>
      <p>HTML, Pug, Slim, CSS, Sass, Less</p>
      <b>Design Tools:</b>
      <p>
        Balsamiq Mockups
        Figma
        Invision
        Marvel
      </p>
    </div>
    <div class="tools-block__column">
      <i class="fas fa-laptop-code fa-3x"></i>
      <h3>Front-end Developer</h3>
      <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
      <b>Languages I speak:</b>
      <p>HTML, Pug, Slim, CSS, Sass, Less</p>
      <b>Dev Tools:</b>
      <p>
        Atom
        Bitbucket
        Bootstrap
        Bulma
      </p>
    </div>
    <div class="tools-block__column">
      <i class="fas fa-server fa-3x"></i>
      <h3>Back-end Developer</h3>
      <p>I genuinely care about people, and love helping fellow designers work on their craft.</p>
      <b>Experiences I draw from:</b>
      <p>UX/UI, Product design, Freelancing</p>
      <b>Mentor Stats:</b>
      <p>
        4.5 years experience
        26 short courses
        40 bootcamps
      </p>
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
    margin-bottom: 50px;
    font-size: 18px;
  }
  & b {
    font-size: 18px;
    color: @dark-green;
  }
  & i {
      color:@dark-green;
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