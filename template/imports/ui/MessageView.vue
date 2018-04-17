<template>
  <div class="message-view">
    <header>
    	<!--<back-button></back-button>-->
    	<h2>Document Details</h2>
    </header>
    <h4>{{ messages[0].title }}</h4>
    <p>{{ messages[0].body }}</p>
  </div>
</template>

<script>
// 	import BackButton from '../../../ui/components/BackButton/BackButton.vue'
	import Messages from '/imports/lib/collections.js'
  export default {
    name: 'doc-view',
    data: () => ({
    	users: [],
    	messages: []
    }),
    meteor: {
      subscribe: {
        'messages': [],
      },
      users() {
        return Meteor.users.find({})
      },
      messages() {
        return Docs.find({
          _id: this.$route.params.doc_id
        });
      },
    },
    components: {
    // 	BackButton
    }
  }
</script>

<style lang="stylus" scoped>
.messages-details
  text-align left
  padding 20px 60px
  header
  	padding 0 0 20px 0
  	h2
  		font-size 32px
  h4
  	font-size 18px
.button-back
	top 20px
	left 8px
</style>
