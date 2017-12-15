<style lang="stylus" type="text/stylus" scoped>
  .test7-component {
  }
</style>

<template>
  <div class="test7-component">
  </div>
</template>

<script>

  export default {
    name: 'test7',
    props: {},
    mounted() {
      this._getRandomData()
    },
    activated() {
    },
    deactivated() {
    },
    computed: {},
    data() {
      return {}
    },
    methods: {
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
        console.log(list)
      }
    }
  };

</script>


