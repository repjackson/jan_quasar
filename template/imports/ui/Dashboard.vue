<template lang='pug'>
  .layout-padding
    .row.gutter-md.flex.wrap
      .col
        card_total(title='Total Posts', background-color='bg-teal-9', icon-name='local_post_office', :total='totalPosts')
      .col
        card_total(title='Total comments', background-color='bg-teal-7', icon-name='comment', :total='totalComments')
      .col
        card_total(title='Static total', background-color='bg-teal-5', icon-name='repeat_one', :total='50004')
    <!--.flex.wrap.gutter-->
    <!--  .width-1of2.lg-width-1of3.sm-auto-->
    <!--    card-chart(card-title='Total Graph', :data='dataForGraph')-->
    <!--  .auto-->
    <!--    knob-statistics(card-title='General statistics')-->
    <!--.flex.wrap.gutter-->
    <!--  .width-4of5.sm-width-1of1-->
    <!--    card-todo(card-title='Generic todos', api='todos')-->
</template>
<script type="text/javascript">
  import card_total from './cardTotal.vue'
  export default {
    name: 'Dashboard',
    mounted () {
    },
    data () {
      return {
        totalPosts: 0,
        totalComments: 0,
        totalTodos: 0
      }
    },
    computed: {
      dataForGraph () {
        return {
          posts: this.totalPosts,
          todos: this.totalTodos,
          comments: this.totalComments
        }
      }
    },
    methods: {
    },
    components: {
      card_total,
    }
  }
</script>
<style></style>
