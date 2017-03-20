<template>
    <div class="article-detail col-md-offset-4 col-lg-offset-3">
        <div class="col-md-8 col-sm-8 col-lg-8">
            <h2 class="article-title text-center">{{info.title}}</h2>
            <div class="article-info text-center font-gray margin-top-2rem">
                <span class="article-date"><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> {{info.create_time | time}} &nbsp;</span>
                <span class="article-views"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> {{info.hits}} &nbsp;</span>
            </div>

            <div class="article-content margin-top-2rem" v-html="info.content">

            </div>

            <div class="article-foot font-gray">
                <span class="article-catalog"><span class="glyphicon glyphicon-book" aria-hidden="true"></span> {{info.catname}} &nbsp;</span>
                <span class="article-copyrigh pull-right">&copy;本文作者版权所有。</span>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
import '@/assets/editor/css/editormd.min2.css'
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
        key: id,
        title: 'Test Article Title Just In Here',
        create_time: '0',
        hits: 0,
        catname: '其他',
        content: ''
      }
    }
  },
  mounted () {
    // a
    this.$http.jsonp(this.serverHost + '/api/detail?key=' + this.artid)
            .then(
              function (data) {
                if (data.body.status === 1) {
                  console.log(data)
                  this.info = data.body.data
                }
              },
              function (err) {
                console.log('error', err)
              }
            )
  }
}
</script>
