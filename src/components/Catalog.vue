<template>
    <div class="catalog-panel">
        <div class="list-group">
            <a href="#" class="list-group-item active">
                博客分类
            </a>
            <a v-for="cat in catalog" class="list-group-item" v-bind:href="cat.url">
                {{cat.name}}
            </a>
        </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          catalog: [
            {url: '#', name: 'PHP'},
            {url: '#', name: 'Mysql优化'},
            {url: '#', name: 'Linux运维'},
            {url: '#', name: '数据结构与算法'},
            {url: '#', name: '其他'}
          ]
        }
      }
    }
</script>
