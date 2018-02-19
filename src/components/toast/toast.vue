<style lang="stylus" type="text/stylus" scoped>
  .toast-component
    position fixed
    left 50%
    top 50%
    transform translate(-50%, -50%)
    text-align center
    border-radius 5px
    padding 10px 15px
    z-index 300
    color white
    display flex
    flex-direction column
    justify-content center
    align-items center
    background-color #8ec74d

  .qcode
    background-color #ff341b
    color #000000

  //淡入淡出动画
  .toast-fade-enter-active {
    animation: toast-fade-in 0.5s linear;
  }

  .toast-fade-leave-active {
    animation: toast-fade-out 0.5s linear;
  }

  @keyframes toast-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes toast-fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>

<template>
  <transition name="toast-fade" v-on:after-leave="transitionEnd">
    <div class="toast-component" :class="{qcode:showQcode}" :style="mStyle" ref="toast"
         v-show="visible">
      <div>{{msg}}</div>
      <qrcode v-if="showQcode" :val="href" style="margin: 10px"></qrcode>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'toast',
    props: {},
    mounted() {
      this.visible = true
      this.$nextTick(function () {
        setTimeout(() => {
          this.close = true
        }, this.duration)
      })
    },
    created() {
    },
    activated() {
    },
    deactivated() {
    },
    computed: {},
    data() {
      return {
        visible: false,
        close: false,
        duration: 3000,
        msg: '我是Toast',
        href: '' + window.location.href,
        showQcode: false,
        mHeight: '',
        mWidth: '',
        mStyle: {height: '75%', width: '75%'}
      }
    },
    methods: {
      destroyElement() {
        document.body.removeChild(this.$el)
      },
      transitionEnd() {
        this.destroyElement()
      },
      killToast() {
        this.close = true
      }
    },
    watch: {
      close(newVal) {
        if (newVal) {
          this.visible = false
        }
      }
    }
  };

</script>


