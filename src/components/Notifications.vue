<template>
  <div class="fixed bottom-0 right-0 p-8">
    <list-transition>
      <notification
        v-for="notification in notifications"
        :key="notification.key"
        :error="notification.type === 'error'"
      >{{notification.text}}</notification>
    </list-transition>
  </div>
</template>

<script>
import notify from '../utils/notify'
import Notification from './Notification'
import ListTransition from './ListTransition'

export default {
  computed: {
    notifications() {
      return notify.state.items
    }
  },

  components: {
    Notification,
    ListTransition
  }
}
</script>
