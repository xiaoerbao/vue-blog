<template>
    <div class="article-detail col-md-offset-4 col-lg-offset-3">
        <div class="col-md-8 col-sm-8 col-lg-8">
            <h2 class="article-title text-center">{{info.title}}</h2>
            <div class="article-info text-center font-gray margin-top-2rem">
                <span class="article-date"><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> {{info.date}} &nbsp;</span>
                <span class="article-views"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> {{info.views}} &nbsp;</span>
            </div>

            <div class="article-content margin-top-2rem">
                {{info.content}}
            </div>

            <div class="article-foot font-gray">
                <span class="article-catalog"><span class="glyphicon glyphicon-book" aria-hidden="true"></span> {{info.catalog}} &nbsp;</span>
                <span class="article-copyrigh pull-right">&copy;本文作者版权所有。</span>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['artid'],
  data () {
    return {
      info: this.getData(this.artid)
    }
  },
  methods: {
    getData (id) {
      console.log(id)
      return {
        id: id,
        title: 'Test Article Title Just In Here',
        date: '2017-03-16',
        views: 3160,
        catalog: '其他',
        content: '图片来自网络 “很浅”微信公众号：henqian001 那个，有一天“很浅”派阿三去买水果，然后他买来了一个菠萝，“很浅”高兴地说：“我最爱吃菠萝了！”阿三马上反驳道：“这个是凤梨，不是菠萝。” “很浅”表示，自己已经活了二十几年，怎么可能不知道凤梨就是菠萝呢。于是阿三和“很浅”争论起...'
      }
    }
  }
}
</script>
