<style lang="stylus" type="text/stylus" scoped>
  @import "../../static/common.styl"
  .test7-component {
    position: relative
  }

  li
    list-style none

  .title
    background-color #0e94e2

  h2
    height 30px

  .letter-view
    position fixed
    top 0
    right 2%
    height 100vh
    li
      height 18px
    .current
      color #e2608d

  .floatTitle
    position fixed
    top 0
    left 0
    right 0
    background-color #c7c63a


</style>

<template>
  <div class="test7-component">
    <scroll-view @scroll="onScroll" :isListenScroll="true" ref="scrollView">
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
        > {{String.fromCharCode(65 + x - 1)}}
        </li>
      </ul>
    </div>

    <h2 class="floatTitle" v-show="showFloatTitle" ref="floatTitle">{{floatTitle}}</h2>

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
      this.listHeight = []
    },
    activated() {
    },
    deactivated() {
    },
    computed: {},
    data() {
      return {
        listData: [],
        currentIndex: 0,
        floatTitle: 'A',
        showFloatTitle: false,
        scrollY: 0
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
        this.floatTitle = String.fromCharCode(65 + index)

      },
      onScroll(pos) {
        this.scrollY = pos.y
      },
      _calculateHeight() {
        this.listHeight = []
        const list = this.$refs.listGroup
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < list.length; i++) {
          let item = list[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
        console.log(this.listHeight)
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
    },
    watch: {
      listData() {
        setTimeout(() => {
          this._calculateHeight()
        }, 20)
      },
      scrollY(newY) {
//        console.log(newY)
        if (newY >= 0) {
          this.showFloatTitle = false
        } else {
          this.showFloatTitle = true
        }
        /*    for (let i = 0; i < this.$refs.listGroup.length; i++) {
              if (-newY < this.$refs.listGroup[i].offsetTop && -newY > this.$refs.listGroup[i - 1].offsetTop) {
                this.currentIndex = i - 1
                if (i !== 0) {
                  console.log(i - 1)
                  this.floatTitle = String.fromCharCode(65 + i - 1)
                }
                //
                if (this.$refs.listGroup[i + 1].offsetTop - this.$refs.listGroup[i].offsetTop > 0) {

                }
                return
              }
            }*/
        for (let i = 0; i < this.listHeight.length; i++) {
          if (-newY < this.listHeight[i + 1] && -newY > this.listHeight[i]) {
            this.currentIndex = i
            this.floatTitle = String.fromCharCode(65 + i)
            console.log(newY, this.listHeight[i], this.listHeight[i + 1])
            let offset = this.listHeight[i + 1] + newY
            let s = offset < 30 ? offset-30 : 0
            this.$refs.floatTitle.style.transform = `translate3d(0,${
              s
              }px,0)`

//            if ((this.listHeight[i + 1] + newY) <= 30) {
//              console.log(this.listHeight[i + 1] + newY)
//              this.$refs.floatTitle.style.transform = `translate3d(0,${this.listHeight[i + 1] + newY - 30}px,0)`
//            }
          }
        }
      }
    }
  };

</script>


