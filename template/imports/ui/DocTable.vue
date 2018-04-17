<template lang='pug'>
  div
    div(style='margin: 15px;')
      q-btn(color='dark', @click='add_doc()') Add Incident
    div
      q-table(
        :data='docs', 
        :config='configs', 
        :columns='columns',
        title='Incident Table'
        selection='multiple'
        )
           
</template>

<script lang='coffee'>
  import { Meteor } from 'meteor/meteor'
  import { Docs } from '/imports/lib/collections'

  import { QTable } from '/node_modules/quasar-framework/dist/quasar.mat.common.js'

  return
    data: ->
      columns: [
        { label: 'id', field: '_id', width: '50px' }
        { label: 'Type', field: 'type', width: '80px', sort: true },
        { label: 'Description', field: 'description', width: '150px', sort: true },
        { label: 'Actions', width: '50px', sort: false },
      ]
      configs: {
        columnPicker: true
        title: 'table title'
      }
    components: {
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