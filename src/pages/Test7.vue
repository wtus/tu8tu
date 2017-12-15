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
    li
      height 18px
    .current
      color #e2608d

</style>

<template>
  <div class="test7-component">
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

    <div class="letter-view flex-column fjc-center"

    >
      <ul @touchstart="onLetterViewTouchStart"
          @touchmove.stop="onLetterViewTouchMove">
        <li v-for="x in 26"
            :data-index="x-1"
            :class="{current:(x-1)==currentIndex}"
        >{{String.fromCharCode(64 + x)}}
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import {getData} from '../assets/dom'

  export default {
    name: 'test7',
    props: {},
    mounted() {
      this.listData = this._getRandomData()
    },
    created() {
      this.touch = {}
    },
    activated() {
    },
    deactivated() {
    },
    computed: {},
    data() {
      return {
        listData: [],
        currentIndex: 0
      }
    },
    methods: {
      onLetterViewTouchStart(e) {
        let archIndex = getData(e.target, 'index')//得到的是string
        this.touch.y1 = e.touches[0].pageY
        this.touch.archIndex = archIndex
        this.gotoGroup(archIndex)
      },
      onLetterViewTouchMove(e) {
        this.touch.y2 = e.touches[0].pageY
        let delta = this.touch.y2 - this.touch.y1
        let scroolCount = delta / 18 | 0
        this.gotoGroup(parseInt(this.touch.archIndex) + scroolCount)//这里注意 archIndex 是string 必须转一下
      },
      gotoGroup(index) {
        this.$refs.scrollView.scrollToElement(this.$refs.listGroup[index], 400)
        this.currentIndex = index
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


