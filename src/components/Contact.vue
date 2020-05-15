<template>
  <div class="contact-form">
    <div class="contact-form__header">
      <h1>CONTACT ME</h1>
      <p>Email: karpe.andrew@gmail.com</p>
      <div class="contact-form__form" v-bind:class="{'contact-form__form--hidden':emailWasSent}">
        <form action>
          <div class="form__elem">
            <span>Name:</span>
            <input type="text" required />
          </div>
          <div class="form__elem">
            <span>Email:</span>
            <input type="text" required />
          </div>
          <div class="form__elem">
            <span>Message:</span>
            <textarea required></textarea>
          </div>
          <div class="form-elem">
            <b class="sumbit-button" v-on:click="sendEmail()">Send</b>
          </div>
        </form>
      </div>
      <div class="contact-form__message" v-bind:class="{'contact-form__message--active':emailWasSent}">
        <p>Email was sent...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailWasSent: false
    };
  },
  methods: {
    sendEmail: function() {
      this.emailWasSent = true;
    }
  }
};
</script>

<style lang="less">
@import url(../variables.less);
@import url(../mixins.less);

.contact-form {
  color: @white;
  background-color: @dark-green;

  transition: 500ms;
}

.contact-form__header {
  & h1 {
    font-weight: 700;
  }
}
.form__elem {
  padding-top: 40px;

  font-size: 18px;

  & span {
    padding-left: 25px;
  }
  & input,
  textarea {
    width: 100%;

    padding: 7px 25px;

    font-size: 22px;
    font-weight: 600;

    border: 3px solid @white;
    border-radius: 3px;

    background-color: @dark-green;

    transition: 900ms;

    &:hover {
      background-color: @white;
    }
  }
  & textarea {
    min-height: 200px;
  }
}
.contact-form__form--hidden {
  overflow: hidden;
  height: 0;

  transition: 500ms;
}
.contact-form__message {
  height: 0;
  overflow: hidden;
  font-size: 28px;
}
.contact-form__message--active {
  height: 100%;
  padding: 50px;
}
</style>