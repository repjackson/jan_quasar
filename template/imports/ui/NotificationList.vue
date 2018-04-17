<template lang='pug'>
  div
    div(style='margin-top: 25px;')
      q-list(link inset-separator)
        q-list-header Notification List
        q-item(v-for='notification in notifications', :key='notification._id')
          router-link(v-bind:to="'/notification/' + notification._id") view
          <!--q-item-main-->
          <!--# | {{ notification._id }}-->
</template>

<script lang='coffee'>
  import { Meteor } from 'meteor/meteor'
  import { Notifications } from '/imports/lib/collections'

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
      notifications:
        params: -> null
        update: -> Notifications.find({})
    created: -> @$subscribe('notifications')

</script>