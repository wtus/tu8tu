<template>
  <div class="rankbar-component">
    <div class="rank-bar">
      <span v-for="x in itemClasses()" :class="x" class="rank-start"></span>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'rankbar',
    props: {
      sore: {
        type: [Number],
        required: true
      },
      starSize: {
        type: Number,
        default: 5
      }
    },
    mounted() {
    },
    computed: {},
    methods: {
      itemClasses() {
        var result = [];
        var onCount = Math.floor(this.sore);
        if (onCount >= this.starSize) {
          this.sore = onCount = this.starSize;
        }
        var i;
        for (i = 0; i < onCount; i++) {
          result.push('on')
        }
        if ((this.sore - onCount) * 100 > 45) {
          onCount++;
          result.push('half')
        }
        for (i = 0; i < this.starSize - onCount; i++) {
          result.push('off')
        }
        return result;
      }
    }
  };

</script>

<style scoped>
  .rankbar-component {
    background-color: white;
  }

  .rank-bar {
    height: 100px;
    width: 200px;
    text-align: center;
    line-height: 100px;
  }

  .rank-start {
    width: 10%;
    display: inline-block;
    height: 20%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/ic_star_on.png");
  }

  .on {
    background-image: url("../assets/ic_star_on.png");
  }

  .off {
    background-image: url("../assets/ic_star_off.png");
  }

  .half {
    background-image: url("../assets/ic_star_half.png");
  }
</style>
