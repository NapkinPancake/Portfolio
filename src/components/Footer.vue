<template>
  <div class="main-footer">
    <div class="main-footer__tree">
      <img src="../img/tree-icon.png" alt />
    </div>
    <div class="main-footer__text">
      <p>Living, learning, & leveling up one day at a time.</p>
    </div>
    <div class="main-footer__networks">
      <div class="networks__elem">
        <a href="https://www.facebook.com/zavodnoi.baklazan/" target="_blank">
          <i class="fab fa-facebook-f fa-lg"></i>
        </a>
      </div>
      <div class="networks__elem">
        <a href="https://web.telegram.org/#/im?p=@Agallore" target="_blank">
          <i class="fab fa-telegram-plane fa-lg"></i>
        </a>
      </div>
      <div class="networks__elem">
        <a href="https://github.com/NapkinPancake" target="_blank">
          <i class="fab fab fa-github fa-lg"></i>
        </a>
      </div>
    </div>
    <div class="main-footer__bottom-text">
      <p>Handcrafted by me</p>
    </div>
  </div>

  
</template>

<style lang="less">
@import url(../variables.less);
@import url(../mixins.less);

.main-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 40px;
  padding-top: 150px;

  background-color: @dark-green;
  color: @white;
}

.main-footer__tree img {
    width: 100px;
    filter: invert(1);
}

.main-footer__text {
  width: 320px;
  margin-bottom: 50px;
  padding: 0 20px;

  font-size: 26px;
  font-weight: 400;
  opacity: 0.7;
}

.main-footer__networks {
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 20px;
}

.networks__elem {
  margin: 4px;
  padding: 10px;

  border: @icons-border;
  border-radius: @icons-border-radius;

  &:hover {
    background-color: white;
    border: 2px solid none;

    transition: 400ms;

    & i {
      color: @dark-green;
    }
  }
  & a {
    text-decoration: none;
    color: white;
  }

  & i {
    width: 24px;
  }
}

.main-footer__bottom-text {
  font-size: 18px;
  opacity: 0.7;
}
</style>