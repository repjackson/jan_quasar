<template lang='pug'>
  q-card(color='dark')
    q-card-title {{title}}
    q-card-main
      h5 {{total}}
</template>

<script lang="coffee">
  import CountUp from 'countup.js'
  import {       
    QCard,
    QCardTitle,
    QCardMain,
    QCardMedia,
    QCardSeparator,
    QCardActions,
    QIcon
   } from '/node_modules/quasar-framework/dist/quasar.mat.common.js'

  return
    name:'card_total'
    props: ['title', 'total', 'backgroundColor', 'iconName']
    components: {
      QCard
      QCardTitle
      QCardMain
      QCardMedia
      QCardSeparator
      QCardActions
      QIcon
    }
    mounted: -> @countUp.start()
    computed:
      countUp: ->
        return new CountUp(this.$refs.number, 0, this.total, 0, 2.5, this.options)
    watch:
      total: -> @countUp.start()
    data: ->
      options:
        separator: '.'
</script>
