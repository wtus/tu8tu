<style lang="stylus" type="text/stylus" scoped>
  @import "../../static/common.styl"
  .test7-component {
    position: relative
  }

  li
    list-style none

  .title
    background-color #0e94e2

  .letter-view
    position fixed
    top 0
    right 2%
    height 100vh

</style>

<template>
  <div class="test7-component" >
    <scroll-view ref="scrollView">
      <li v-for="group in listData" ref="listGroup">
        <h2 class="title" :ref="group.title">{{group.title}}</h2>
        <ul class="listItem">
          <li v-for="item in group.items">
            <span>{{item}}</span>
          </li>
        </ul>
      </li>
    </scroll-view>

    <div class="letter-view flex-column fjc-center">
      <ul>
        <li v-for="x in 26"
        @click="test"
        >{{String.fromCharCode(64 + x)}}</li>
      </ul>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'test7',
    props: {},
    mounted() {
      this.listData = this._getRandomData()
    },
    activated() {
    },
    deactivated() {
    },
    computed: {},
    data() {
      return {
        listData: []
      }
    },
    methods: {
      test() {
        this.$refs.scrollView.scrollToElement(this.$refs.listGroup[3],400)
      },
      _getRandomData() {
        let list = new Array()
        for (let i = 0; i < 26; i++) {
          var obj = {}
          let letter = String.fromCharCode(65 + i)
          let itemCount = (Math.random() * (11 - 3) | 0) + 3 // 3-10 的随机数
          obj['title'] = letter
          obj['items'] = []
          for (let j = 0; j < itemCount; j++) {
            obj.items.push(letter + j)
          }
          list.push(obj)
        }
        return list
      }
    }
  };

</script>


