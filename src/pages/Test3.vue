<style lang="stylus" scoped>
  .test3-component {
    display flex
    flex-direction column
    margin 0 30px
  }

  .content
    float left

  .btn
    float right
    display block

  .cells
    background-color chocolate
    width 100%
    a
      width 100%
      position relative
      .ss1
        width 50%
        text-align left
        float left
      .ss
        width 50%
        float left
        text-align right

  .cells2
    background-color #399940

  /*  a
      position relative*/
  /*   a:before
       content "  zz"
       position absolute
       width 100%
       height 10px
       background-color red*/
  .fdsaffdsa, .sdsf
    display inline-block
    vertical-align middle

  .sdsf
    border 1px solid red
    width 48px
    line-height 20px
    height 48px
    img
      width 100%
      height 100%

  .test3
    div
      border-right 1px solid red
    :last-child > div
      border-right none
    a
      text-decoration none
    li
      display inline-block

  .test4
    height 100px
    line-height 20px
    background-color green
    .ddd
      text-align center
    .sss
      display inline-block
    .ssswe
      float right

  .test5
    .line
      line-height 20px
    a
      display inline-block
      vertical-align middle
    .iiis
      height 200px

  .test6
    li
      display inline-block

  .gitlab
    background-color burlywood
    img
      width 32px
      height 32px
      vertical-align top;

  .mi
    background-color aliceblue
    padding 10px 30px
    img
      width 32px
      height 32px
      vertical-align middle
      margin-right 15px
    div
      display inline-block
      vertical-align middle
      p
        color grey
        font-size smaller
    span
      vertical-align middle
      font-size small
      display inline-block
      width 40px
      text-align center
      padding 5px
      border 1px solid grey
      background-color azure
      border-radius 50px
</style>

<template>
  <div class="test3-component">
    <div>
      <div>标题</div>
      <div class="content">
        <p>
          余额: <strong>200</strong> 积分
        </p>
      </div>
      <div class="btn"><a href="">充值</a></div>
    </div>
    <div class="cells">
      <a href="">
        <div>
          <div class="ss1">
            <i class="fa fa-flag"></i>参与的
          </div>
          <div class="ss">
            <i class="fa fa-flag"></i>
          </div>
        </div>

      </a>
      <a href="">
        <div class="fsdafas">
          <div class="ss1">
            <i class="fa fa-flag"></i>参与的s
          </div>
          <div class="ss">
            <i class="fa fa-flag"></i>
          </div>
        </div>

      </a>
      <a href="">
        <div>
          <div class="ss1">
            <i class="fa fa-flag"></i>参与的
          </div>
          <div class="ss">
            <i class="fa fa-flag"></i>
          </div>
        </div>

      </a>
    </div>
    <div class="cells2">
      <a href="" class="cell">xx
        <div>s1</div>
      </a>
      <a href="" class="cell">
        <div>s2</div>
      </a>
      <a href="" class="cell">
        <div>s3</div>
      </a>
    </div>


    <div class="iii">

      <div class="fdsaffdsa">
        <div>
          <span>234</span>
          <a href="">eaw</a>
        </div>
        <div>
          <span>202002020</span>
          <span>fdsaf</span>
          <span>fdsa</span>
          <span>fdsa</span>
        </div>
      </div>

      <a href="learn1.html" class="sdsf">
        <img
          src="http://upload.jianshu.io/users/upload_avatars/6914113/637e5008-de64-4ecb-a5a0-f4748fb2b778.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"
          alt="">
      </a>

    </div>

    <div class="test3">
      <ul>
        <li>
          <div><a href=""><p>103</p>关注</a></div>
        </li>
        <li>
          <div><a href=""><p>103</p>关注</a></div>
        </li>
        <li>
          <div><a href=""><p>103</p>关注</a></div>
        </li>
        <li>
          <div><a href=""><p>103</p>关注</a></div>
        </li>
        <li>
          <div><a href=""><p>103</p>关注</a></div>
        </li>
        <li>
          <div><a href=""><p>103</p>关注</a></div>
        </li>
        <li>
          <div><a href=""><p>103</p>关注</a></div>
        </li>
      </ul>
    </div>

    <div class="test4">
      <i class="fa fa-flag ddd"></i>
      <div class="sss">
        <a href="">邓丽</a>
        <div>首飞丝带飞还哦</div>
      </div>
      <i class="fa fa-flag ssswe"></i>
    </div>

    <div class="test5">
      <span>fdsajjjjjjjjfdassdafsafdafeagifjasd</span>
      <div class="line">
        <a href="">
          <img
            src="http://upload.jianshu.io/users/upload_avatars/6914113/637e5008-de64-4ecb-a5a0-f4748fb2b778.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"
            alt="">
        </a>
        <a href="" class="iiis">fdsafsafasdsdafnjknjdfnewign</a>

      </div>
      <div><span>wwwwwww</span><span>fdsafsafsadf</span></div>
    </div>

    <div class="test6">
      <ul>
        <li>
          <a href="">
            <img
              src="http://upload.jianshu.io/users/upload_avatars/6914113/637e5008-de64-4ecb-a5a0-f4748fb2b778.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"
              alt="">
            <div style="">fdsafa</div>
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="http://upload.jianshu.io/users/upload_avatars/6914113/637e5008-de64-4ecb-a5a0-f4748fb2b778.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"
              alt="">
            <div style="">fdsafa</div>
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="http://upload.jianshu.io/users/upload_avatars/6914113/637e5008-de64-4ecb-a5a0-f4748fb2b778.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"
              alt="">
            <div style="">fdsafa</div>
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="http://upload.jianshu.io/users/upload_avatars/6914113/637e5008-de64-4ecb-a5a0-f4748fb2b778.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"
              alt="">
            <div style="">fdsafa</div>
          </a>
        </li>
      </ul>

      <a href="">fdsaf</a>
      <a href="">fdsaf</a>
      <a href="">fdsaf</a>
      <a href="">
        <img
          src="http://upload.jianshu.io/users/upload_avatars/6914113/637e5008-de64-4ecb-a5a0-f4748fb2b778.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"
          alt="">
        <div style="">fdsafa</div>
      </a>
      <li href="">
        <img
          src="http://upload.jianshu.io/users/upload_avatars/6914113/637e5008-de64-4ecb-a5a0-f4748fb2b778.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"
          alt="">
        <div style="">fdsafa</div>
      </li>
    </div>

    <div>
      <h1>行内</h1>
      <a href="" style="display: inline-block">aaa
        <div>
          <div>fdsafa</div>
        </div>
      </a>
      <span>fdasfsdahfa</span>
      <strong>fsdjaa</strong>
      fdsafasd
      <strogn>fdsafa</strogn>
      <img style="width: 100px;height: 200px"
           src="http://upload.jianshu.io/users/upload_avatars/6914113/637e5008-de64-4ecb-a5a0-f4748fb2b778.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"
           alt="">
    </div>

    <div>


      <a href="" style="display:inline-block;width: 100px;height: 100px">
        <img style="height: 100%;width: 100%"
             src="http://upload.jianshu.io/users/upload_avatars/6914113/637e5008-de64-4ecb-a5a0-f4748fb2b778.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"
             alt="">
      </a> <a href="" style="display:inline-block;width: 100px;height: 100px">
      <img style="height: 100%;width: 100%"
           src="http://upload.jianshu.io/users/upload_avatars/6914113/637e5008-de64-4ecb-a5a0-f4748fb2b778.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"
           alt="">
    </a> <a href="" style="display:inline-block;width: 100px;height: 100px">
      <img style="height: 100%;width: 100%"
           src="http://upload.jianshu.io/users/upload_avatars/6914113/637e5008-de64-4ecb-a5a0-f4748fb2b778.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"
           alt="">fdsafas
    </a>
    </div>

    <p class="gitlab">
      <span>登陆</span>
      <span><img alt="Google" title="Sign in with Google" class="js-lazy-loaded"
                 src="https://assets.gitlab-static.net/assets/auth_buttons/google_64-37d98b7033cc7059a484199ffdd766adf69babbc6e5fc64b43006ca866629f17.png"></span>
      <span><img alt="Google" title="Sign in with Google" class="js-lazy-loaded"
                 src="https://assets.gitlab-static.net/assets/auth_buttons/google_64-37d98b7033cc7059a484199ffdd766adf69babbc6e5fc64b43006ca866629f17.png"></span>
      <span><img alt="Google" title="Sign in with Google" class="js-lazy-loaded"
                 src="https://assets.gitlab-static.net/assets/auth_buttons/google_64-37d98b7033cc7059a484199ffdd766adf69babbc6e5fc64b43006ca866629f17.png"></span>
      <span><img alt="Google" title="Sign in with Google" class="js-lazy-loaded"
                 src="https://assets.gitlab-static.net/assets/auth_buttons/google_64-37d98b7033cc7059a484199ffdd766adf69babbc6e5fc64b43006ca866629f17.png"></span>
    </p>

    <div class="mi">
      <img alt="Google" title="Sign in with Google" class="js-lazy-loaded"
           src="https://assets.gitlab-static.net/assets/auth_buttons/google_64-37d98b7033cc7059a484199ffdd766adf69babbc6e5fc64b43006ca866629f17.png">
      <div>
        1065123 <p>1.骨灰级的说法放假啊是东回复哇额2.放假啊四道口附近啊是</p>
      </div>
      <span>回复</span>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'test3',
    props: {},
    mounted() {
    },
    computed: {},
    data() {
      return {}
    },
    methods: {}
  };

</script>


