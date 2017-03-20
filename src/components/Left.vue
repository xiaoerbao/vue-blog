<template>
    <div class="col-md-3 col-lg-2 full-height bg-color-blue hidden-sm left">
        <router-link to="/"><h2 class="title">{{ blogName }}</h2></router-link>

        <p class="description">
            {{ description }}
        </p>

        <div class="society-account">
            <a v-bind:href="weiboUrl" v-if="weiboUrl" target="_blank" class="btn btn-success btn-sm">我的微博</a>
        </div>

        <div class="counts">
            <Count v-bind:views="sum" v-bind:blogs="count"></Count>
        </div>

        <div class="search-and-catalog">
            <Search></Search>
            <br>
            <Catalog v-bind:catalog="catalog"></Catalog>
        </div>
    </div>
</template>

<script>
    import Search from './Search'
    import Catalog from './Catalog'
    import Count from './Count'
    export default {
      data () {
        return {
          msg: 'Left',
          blogName: '木棉博客',
          description: '代码狗',
          weiboUrl: 'http://weibo.com/xiaoqb',
          count: 0,
          sum: 0,
          catalog: []
        }
      },
      components: {
        Search,
        Catalog,
        Count
      },
      mounted () {
        // siteinfo
        this.getData()
      },
      methods: {
        getData () {
          this.$http.jsonp(this.serverHost + '/api/site')
                  .then(
                  function (data) {
                      // success
                    if (data.body.status === 1) {
                      this.count = data.body.artCount
                      this.sum = data.body.hitSum.pop().sum
                      this.catalog = data.body.tags
                    }
                  },
                  function (err) {
                    console.log('error', err)
                  }
          )
        }
      }
    }
</script>
