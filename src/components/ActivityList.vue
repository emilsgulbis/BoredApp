<template>
  <loading v-if="loading" />
  <div v-else>
    <template v-if="!hasActivities">
      <notification error>You have nothing saved yet</notification>
      <span class="text-xs text-gray-500">Go back to "Activities"!</span>
    </template>

    <template v-else>
      <list-transition>
        <activity
          v-for="activity in activities"
          :key="activity.key"
          :activity="activity"
          @remove="$emit('remove', activity)"
          class="mb-3"
        />
      </list-transition>

      <div class="text-center" >
        <app-button
          class="bg-red-700 hover:bg-red-600"
          @click.prevent="$emit('clear')"
        >Clear all</app-button>
      </div>
    </template>
  </div>
</template>

<script>
import Activity from './Activity'
import Notification from './Notification'
import AppButton from './Button'
import Loading from './Loading';
import ListTransition from './ListTransition'

export default {
  props: {
    activities: {
      type: Array,
      required: true,
    },

    loading: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    hasActivities() {
      return this.activities.length > 0
    }
  },

  components: {
    Activity,
    Notification,
    AppButton,
    Loading,
    ListTransition
  },
}
</script>


