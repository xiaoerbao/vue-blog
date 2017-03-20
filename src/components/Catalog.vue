<template>
    <div class="catalog-panel">
        <div class="list-group">
            <a href="#" class="list-group-item active">
                博客分类
            </a>
            <router-link v-for="cat in catalog" class="list-group-item" v-bind:class="[cat.key == curCat ? 'cat-cur' : '']" v-bind:to="{ name: 'List', params: { catalog: cat.key }}">
                {{cat.name}}
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
      props: ['catalog'],
      watch: {
        '$route': 'changeCat'
      },
      data () {
        return {
          curCat: ''
        }
      },
      methods: {
        changeCat () {
          var cat = this.$route.params.catalog ? this.$route.params.catalog : ''
          this.curCat = cat
        }
      }
    }
</script>
