import { RouterFactory } from 'meteor/akryum:vue-router2'


import DocTable from '/imports/ui/DocTable.vue'
import DocList from '/imports/ui/DocList.vue'
import DocView from '/imports/ui/DocView.vue'
import Dashboard from '/imports/ui/Dashboard.vue'
import NotFound from '/imports/ui/NotFound.vue'
import MessageList from '/imports/ui/MessageList.vue'
import MessageView from '/imports/ui/MessageView.vue'
import NotificationList from '/imports/ui/NotificationList.vue'

RouterFactory.configure(factory => {
    factory.addRoutes([
        { path:'/', redirect:'/table' },
        { path:'/table', name:'table', component:DocTable },
        { path:'/list', name:'list', component:DocList },
        { path:'/mail', name:'message-list', component:MessageList },
        { path:'/message/:message_id', name:'view-message', component:MessageView },
        
        { path:'/notifications', name:'notification-list', component:NotificationList },
        
        { path:'/dashboard', name:'dashboard', component:Dashboard },
        { path:'/doc/:doc_id', name:'doc-view', component:DocView },
        { path:'*', name:'not-found', component:NotFound }
    ])
})