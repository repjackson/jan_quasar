<template name="appLayout" lang='pug'>
  <!-- be careful when you change the 'view' prop, check the layout docs -->
  <!--  LHr lpR lfr - with class="fixed-bottom" on the footer seems to be the only possibility
    that works both for desktop and mobile -->
  q-layout(ref='layout', view='LHr lpR lFr')
    q-layout-header
      q-toolbar(color='dark')
        q-btn(no-ripple flat size='lg', @click='showLeft = !showLeft', icon='menu')
        q-toolbar-title
          | JanPro
        q-btn(no-ripple flat size='lg' icon='notifications none' @click="$router.push('/notifications')")
        q-btn(no-ripple flat size='lg' icon='mail' @click="$router.push('/mail')")
        q-btn(no-ripple flat size='lg' , icon='account box', @click='showRight = !showRight')
      <!--q-tabs(color='dark')-->
      <!--  q-route-tab(slot='title', icon='save', to='/', replace='', label='PubSub')-->
      <!--  q-route-tab(slot='title', icon='alarm', to='/session', replace='', label='Session')-->
      <!--  q-route-tab(slot='title', icon='help', to='/help', replace='', label='Help')-->
    q-layout-drawer(side='left', v-model='showLeft', overlay=true)
      q-list(no-border, link='', inset-separator='')
        <!--q-list-header Essential Links-->
        q-item(to='/dashboard')
          q-item-side(icon='dashboard')
          q-item-main(label='Dashboard')
        q-item(to='/table')
          q-item-side(icon='border all')
          q-item-main(label='Table')
        q-item(to='/list')
          q-item-side(icon='list')
          q-item-main(label='List')
    q-layout-drawer(side='right', v-model='showRight', overlay=true)
      q-list(no-border, link='', inset-separator='')
        q-item(to='/profile')
          q-item-side(icon='account box')
          q-item-main(label='Profile')
    q-page-container
      router-view
    q-layout-footer
      q-toolbar(color='dark')
        q-icon(name='copyright')
        q-toolbar-title
          |JanPro
          span(slot='subtitle')  Customer Incident Reporting and Tracking
</template>

<script>
  //See main.js for the global import of 'Quasar' and vue.use() method.
  //Don't move the 'Quasar' import from main.js - importing 'Quasar' later causes an error

  //we've had to symlink all the material-icons material from /node-modules/quasar-extras/material-icons
  //to /public because otherwise for some reason material-icons.css cannot find './MaterialIcons-Regular.woff'
  // even though is in the same folder as itself
  import '/public/material-icons';

  import '/node_modules/quasar-framework/dist/umd/quasar.mat.css'

  import {
    QLayout, 
    QToolbar, 
    QToolbarTitle, 
    QTabs, 
    QTab, 
    QRouteTab, 
    QBtn, 
    QIcon,
    QItemMain, 
    QItemSide, 
    QList, 
    QListHeader, 
    QLayoutHeader, 
    QLayoutFooter, 
    QLayoutDrawer, 
    QDrawerLink, 
    QPageContainer, 
    QItem
  } from '/node_modules/quasar-framework/dist/quasar.mat.common.js';



  export default {
    data: function () {
      return {
        showLeft: false,
        showRight: false
      }
    },
    props: {
      uiid: 'mat'
    },
    components: {
      QLayoutFooter,
      QLayoutHeader,
      QLayoutDrawer,
      QLayout,
      QToolbar,
      QToolbarTitle,
      QTabs,
      QTab,
      QRouteTab,
      QBtn,
      QIcon,
      QItemMain, QItemSide,
      QList, QListHeader, QPageContainer,
      QItem,
      QDrawerLink
    }
  }
</script>
