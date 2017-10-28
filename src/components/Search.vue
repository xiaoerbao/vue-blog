<template>
    <div class="search-panel">
        <div class="input-group">
            <input type="text" class="form-control input" v-model="keyword" placeholder="搜索博客">
            <span class="input-group-btn">
                <router-link v-bind:to="{ name: 'Detail', params: { id: keyword }}"><button class="btn btn-primary" type="button">Go!</button></router-link>
            </span>
        </div><!-- /input-group -->
    </div>
</template>

<script>
    export default {
      name: 'Search',
      data: function () {
        return {
          keyword: ''
        }
      }
    }
</script>
