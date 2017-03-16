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
  }
}
</script>
