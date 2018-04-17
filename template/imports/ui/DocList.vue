<template lang='pug'>
  div
    div(style='margin: 15px;')
      q-btn(color='dark', @click='add_doc()') Add Incident
    div(style='margin-top: 25px;')
      q-list(link inset-separator)
        q-list-header Doc List
        q-item(v-for='doc in docs', :key='doc._id')
          router-link(v-bind:to="'/doc/' + doc._id") view
          <!--q-item-main-->
          <!--# | {{ doc._id }}-->
</template>

<script lang='coffee'>
  import { Meteor } from 'meteor/meteor'
  import { Docs } from '/imports/lib/collections'

  import { 
    QList
    QListHeader
    QBtn
    QItem
    QItemMain
    QItemSide
    QItemTile
    } from '/node_modules/quasar-framework/dist/quasar.mat.common.js'

  return
    data: -> {}
    components: {
      QList
      QListHeader
      QBtn
      QItem
      QItemMain
      QItemSide
      QItemTile
    }
    meteor:
      docs:
        params: -> null
        update: -> Docs.find({})
    methods:
      add_doc: -> Docs.insert({})
    created: -> @$subscribe('docs')

</script>