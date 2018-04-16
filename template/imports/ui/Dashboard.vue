<template lang='pug'>
  .layout-padding
    h4.text-center Dashboard
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
<script lang="coffee">
  import card_total from './cardTotal.vue'
  return
    data: ->
      totalPosts: 12
      totalComments: 14
      totalTodos: 5
    components: { card_total }
</script>
