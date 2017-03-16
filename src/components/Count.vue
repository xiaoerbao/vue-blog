<template>
    <div class="count-panel">
        <div class="views">
            <span class="number">{{views}}</span><br>点击
        </div>
        <div class="blogs">
            <span class="number">{{blogs}}</span><br>文章
        </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          views: 108,
          blogs: 52
        }
      }
    }
</script>
