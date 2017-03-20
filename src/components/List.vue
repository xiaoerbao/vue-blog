<template>
    <div class="article-list col-md-offset-4 col-lg-offset-3 padding-top-4rem">
        <Item v-for="art in articles" v-bind:id="art.key" v-bind:title="art.title" v-bind:description="art.description" v-bind:date="art.create_time" v-bind:catalog="art.catname" v-bind:tag="art.tag" v-bind:views="art.hits"></Item>
        <div class="clearfix"></div>
        <Page v-bind:cur="cur" v-bind:pagecount="pagecount"></Page>
        <Footers></Footers>
    </div>
</template>

<script>
    // var des = '图片来自网络 “很浅”微信公众号：henqian001 那个，有一天“很浅”派阿三去买水果，然后他买来了一个菠萝，“很浅”高兴地说：“我最爱吃菠萝了！”阿三马上反驳道：“这个是凤梨，不是菠萝。” “很浅”表示，自己已经活了二十几年，怎么可能不知道凤梨就是菠萝呢。于是阿三和“很浅”争论起...'
    import Item from './Item'
    import Footers from './Footer'
    import Page from './Page'
    export default {
      data () {
        return {
          articles: [],
          cur: 1,
          pagecount: 1
        }
      },
      components: {
        Item,
        Footers,
        Page
      },
      mounted () {
        this.getList()
      },
      methods: {
        getList () {
          // list
          var cat = this.$route.params.catalog ? this.$route.params.catalog : ''
          var p = this.$route.params.p ? this.$route.params.p : 1
          this.$http.jsonp(this.serverHost + '/api/list?catkey=' + cat + '&p=' + p)
                  .then(
                  function (data) {
                    if (data.body.status === 1) {
                      this.articles = data.body.data
                      this.cur = data.body.cur
                      this.pagecount = data.body.count
                    }
                  },
                  function (err) {
                    console.log('error', err)
                  }
          )
        }
      },
      watch: {
        '$route': 'getList'
      }
    }
</script>
