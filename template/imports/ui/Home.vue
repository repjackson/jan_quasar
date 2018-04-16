<template lang='pug'>
    div
      div(style='text-align: center; margin-top: 15px;')
        q-btn(color='primary', @click='add_doc()')
          | Add Doc
      div(style='margin-top: 25px;')
        q-list(striped='')
          q-list-header Doc List
          q-item(v-for='doc in docs', :key='doc._id')
            q-item-main
              | {{ doc._id }}
</template>

<script lang='coffee'>
    import { Meteor } from 'meteor/meteor'
    import { Stars } from '/imports/lib/collections'
    import { Docs } from '/imports/lib/collections'

    import { QList, QListHeader, QBtn, QItem, QItemMain } from '/node_modules/quasar-framework/dist/quasar.mat.common.js'


    return
        data: -> {}
        components: {
            QList
            QListHeader
            QBtn
            QItem
            QItemMain
        }
        meteor:
            docs:
                params: -> null
                update: -> Docs.find({})
        methods:
            add_doc: -> Docs.insert({})
        created: -> @$subscribe('docs')

</script>