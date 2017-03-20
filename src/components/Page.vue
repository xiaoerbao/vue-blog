<template>
    <div class="page-panel col-md-8 col-sm-8 col-lg-8">
        <router-link v-if="cur > 1" v-bind:to="{ path: '', params: { p: cur - 1 }}" class="btn btn-default btn-sm pull-left">上一页</router-link>
        <a href="" v-if="pagecount > cur" class="btn btn-default btn-sm pull-right">下一页</a>
        <router-link v-if="cur > 1" v-bind:to="{ path: '', params: { p: cur - 1 }}" class="btn btn-default btn-sm pull-right">上一页</router-link>
    </div>
</template>

<script>
    export default {
      props: ['cur', 'pagecount']
    }
</script>
