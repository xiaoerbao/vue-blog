<template>
    <div class="container-fluid full-height" style="padding:0">
        <Left></Left>
        <Articles v-bind:artid="articleId"></Articles>
    </div>
</template>

<script>
import Left from '@/components/Left'
import Articles from '@/components/Article'
export default {
  components: {
    Left,
    Articles
  },
  data () {
    return {
      articleId: this.$route.params.id
    }
  },
  mounted () {
    var key = this.$route.params.id ? this.$route.params.id : ''
    this.$http.jsonp(this.serverHost + '/api/click?key=' + key)
            .then(
              function (data) {
                console.log(data)
              },
              function (err) {
                console.log('error', err)
              }
            )
  }
}
</script>
