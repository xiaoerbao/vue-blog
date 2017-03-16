<template>
    <div class="container-fluid full-height" style="padding:0">
        <Left></Left>
        <List></List>
    </div>
</template>

<script>
  import Left from '@/components/Left'
  import List from '@/components/List'
  export default {
    components: {
      Left,
      List
    },
    name: 'Index',
    data () {
      return {

      }
    }
  }
</script>
