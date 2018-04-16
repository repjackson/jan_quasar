<template lang='pug'>
  div
    div(style='margin: 15px;')
      q-btn(color='dark', @click='add_doc()') Add Doc
    // div(style='margin-top: 25px;')
    //   q-list(striped)
    //     q-list-header Doc List
    //     q-item(v-for='doc in docs', :key='doc._id')
    //       q-item-main
    //         | {{ doc._id }}
    div
      q-table(:data='docs', :config='configs', :columns='columns')
           
</template>

<script lang='coffee'>
  import { Meteor } from 'meteor/meteor'
  import { Docs } from '/imports/lib/collections'

  import { QList, QListHeader, QBtn, QItem, QItemMain, QTable } from '/node_modules/quasar-framework/dist/quasar.mat.common.js'

  return
    data: ->
      beers: []
      columns: [
        { label: 'id', field: '_id', width: '50px' }
        { label: 'Name', field: 'name', width: '80px', sort: true },
        { label: 'Description', field: 'description', width: '150px', sort: true },
        { label: 'First Brewed', field: 'first_brewed', width: '50px', sort: true },
      ]
      configs: {
        columnPicker: true
        title: 'table title'
      }
    components: {
      QList
      QListHeader
      QBtn
      QItem
      QItemMain
      QTable
    }
    meteor:
      docs:
        params: -> null
        update: -> Docs.find({})
    methods:
      add_doc: -> Docs.insert({})
    created: -> @$subscribe('docs')

</script>