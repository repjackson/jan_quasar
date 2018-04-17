<template lang='pug'>
  div
    div(style='margin: 15px;')
      q-btn(color='dark', @click='add_message()') Add Message
    div(style='margin-top: 25px;')
      q-list(link inset-separator)
        q-list-header Message List
        q-item(v-for='message in messages', :key='message._id')
          router-link(v-bind:to="'/message/' + message._id") view
          <!--q-item-main-->
          <!--# | {{ message._id }}-->
</template>

<script lang='coffee'>
  import { Meteor } from 'meteor/meteor'
  import { Messages } from '/imports/lib/collections'

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
      messages:
        params: -> null
        update: -> Messages.find({})
    methods:
      add_message: -> Messages.insert({})
    created: -> @$subscribe('messages')

</script>