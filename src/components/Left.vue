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
            <Count></Count>
        </div>

        <div class="search-and-catalog">
            <Search></Search>
            <br>
            <Catalog></Catalog>
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
          weiboUrl: 'http://weibo.com/xiaoqb'
        }
      },
      components: {
        Search,
        Catalog,
        Count
      }
    }
</script>
