<template>
    <div class="article-item col-md-8 col-sm-8 col-lg-8">
        <router-link v-bind:to="{ name: 'Detail', params: { id: id }}"><h3 class="item-title">{{title}}</h3></router-link>
        <p class="item-description">{{description}}</p>
        <div class="item-info">
            <span class="item-date"><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> {{date}} &nbsp;</span>
            <span class="item-catalog"><span class="glyphicon glyphicon-book" aria-hidden="true"></span> {{catalog}} &nbsp;</span>
            <span class="item-tag"><span class="glyphicon glyphicon-tags" aria-hidden="true"></span> {{tag}} &nbsp;</span>
            <span class="item-views"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> {{views}} &nbsp;</span>
        </div>
        <hr>
    </div>
</template>

<script>
    export default {
      props: ['id', 'title', 'description', 'date', 'catalog', 'tag', 'views']
    }
</script>
