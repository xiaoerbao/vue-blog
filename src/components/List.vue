<template>
    <div class="article-list col-md-offset-4 col-lg-offset-3">
        <Item v-for="art in articles" v-bind:id="art.id" v-bind:title="art.title" v-bind:description="art.description" v-bind:date="art.date" v-bind:catalog="art.catalog" v-bind:tag="art.tag" v-bind:views="art.views"></Item>
        <div class="clearfix"></div>
        <Page></Page>
        <Footers></Footers>
    </div>
</template>

<script>
    var des = '图片来自网络 “很浅”微信公众号：henqian001 那个，有一天“很浅”派阿三去买水果，然后他买来了一个菠萝，“很浅”高兴地说：“我最爱吃菠萝了！”阿三马上反驳道：“这个是凤梨，不是菠萝。” “很浅”表示，自己已经活了二十几年，怎么可能不知道凤梨就是菠萝呢。于是阿三和“很浅”争论起...'
    import Item from './Item'
    import Footers from './Footer'
    import Page from './Page'
    export default {
      data () {
        return {
          articles: [
            {id: 1, title: 'Test Article Title Just In Here', description: des, date: '2017-03-16', catalog: '其他', tag: 'tag1,tag2', views: 205},
            {id: 2, title: 'Test Article Title Just In Here', description: des, date: '2017-03-16', catalog: '其他', tag: 'tag1,tag2', views: 205},
            {id: 3, title: 'Test Article Title Just In Here', description: des, date: '2017-03-16', catalog: '其他', tag: 'tag1,tag2', views: 205},
            {id: 4, title: 'Test Article Title Just In Here', description: des, date: '2017-03-16', catalog: '其他', tag: 'tag1,tag2', views: 205},
            {id: 5, title: 'Test Article Title Just In Here', description: des, date: '2017-03-16', catalog: '其他', tag: 'tag1,tag2', views: 205},
            {id: 6, title: 'Test Article Title Just In Here', description: des, date: '2017-03-16', catalog: '其他', tag: 'tag1,tag2', views: 205}
          ]
        }
      },
      components: {
        Item,
        Footers,
        Page
      }
    }
</script>
