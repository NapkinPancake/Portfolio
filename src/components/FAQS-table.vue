<template>
  <div class="content__FAQS-table">
    <img src="../img/faq-icon.png" alt />
    
    <div class="FAQS-table__elem">
      <div class="FAQS-table__elem-header" data-toggle="collapse" data-target="#collapseTwo">
        <h5>How much time are you able to work?</h5>
        <span class="close-button-sm"></span>
      </div>
      <div class="FAQS-table__elem-content collapse  show " id="collapseTwo">
        <p>I am usually available more than 30 hours a week</p>
      </div>
    </div>
    <div class="FAQS-table__elem">
      <div class="FAQS-table__elem-header" data-toggle="collapse" data-target="#collapseThree">
        <h5>Do you take up full-stack projects?</h5>
        <span class="close-button-sm"></span>
      </div>
      <div class="FAQS-table__elem-content collapse" id="collapseThree">
        <p>No, I prefer doing only Front-end side</p>
      </div>
    </div>
    <div class="FAQS-table__elem">
      <div class="FAQS-table__elem-header" data-toggle="collapse" data-target="#collapseFour">
        <h5>Have you got UpWork profile?</h5>
        <span class="close-button-sm"></span>
      </div>
      <div class="FAQS-table__elem-content collapse" id="collapseFour">
        <p>
          <a
            href=" https://www.upwork.com/freelancers/~015bd39d04fe729afe"
          >https://www.upwork.com/freelancers/~015bd39d04fe729afe</a>
        </p>
      </div>
    </div>
    <div class="FAQS-table__elem">
      <div class="FAQS-table__elem-header" data-toggle="collapse" data-target="#collapseFive">
        <h5>Fixed payment or hourly pay?</h5>
        <span class="close-button-sm"></span>
      </div>
      <div class="FAQS-table__elem-content collapse" id="collapseFive">
        <p>I work for both</p>
      </div>
    </div>
    <div class="FAQS-table__elem">
      <div class="FAQS-table__elem-header" data-toggle="collapse" data-target="#collapseOne">
        <h5>Are you realy look like your curly avatar?!</h5>
        <span class="close-button-sm"></span>
      </div>
      <div id="collapseOne" class="collapse FAQS-table__elem-content">
        <p>Yeap. That is actualy how I look like</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>


<style lang="less">
@import url(../variables.less);
@import url(../mixins.less);

.content__FAQS-table {
  color: white;

  & img {
    margin-bottom: 40px;
    width: 150px;

    filter: invert(1);
  }
}

.FAQS-table__elem {
  border-bottom: 1px solid @white;
  padding: 20px 0;

  &:last-child {
    border-bottom: 0px;
  }
}
.FAQS-table__elem-header {
  display: flex;
  justify-content: space-between;

  & h5 {
    font-weight: bold;
  }
}

.FAQS-table__elem-content {
  font-size: 15px;
  font-weight: 600;

  & a {
    text-decoration: none;
  color: @white;
   }
}

@media (min-width: @laptop-width) {
  .content__FAQS-table {
    & h5 {
      font-size: 24px;
    }
    & h2 {
      font-size: 46px;
      font-weight: 500;
      letter-spacing: -2px;
    }
  }
  .FAQS-table__elem-content {
    font-size: 17px;
    font-weight: 400;
  }
}
</style>