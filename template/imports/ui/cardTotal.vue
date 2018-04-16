<template lang='pug'>
  q-card(color='dark')
    q-card-main
      p.text-italic {{title}}
      h5(ref='number')
</template>

<script type="text/javascript">
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

  export default {
    name:'card_total',
    props: ['title', 'total', 'backgroundColor', 'iconName'],
    components: {
      QCard,
      QCardTitle,
      QCardMain,
      QCardMedia,
      QCardSeparator,
      QCardActions,
      QIcon
    },

    mounted () {
      this.countUp.start()
    },
    computed: {
      countUp () {
        return new CountUp(this.$refs.number, 0, this.total, 0, 2.5, this.options)
      }
    },
    watch: {
      total () {
        this.countUp.start()
      }
    },
    data () {
      return {
        options: {
          separator: '.'
        }
      }
    }
  }
</script>
<style lang='stylus' scoped>
  i 
    font-size: 54px
  .card-style
    width 300px !important
    margin 50px !important
    padding 50px !important
</style>
