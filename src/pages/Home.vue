<template>
  <div class="flex flex-col md:flex-row relative">
    <div class="md:w-3/5 w-full flex-1 flex flex-col p-8">
      <div class="flex-1 relative">
        <loading v-if="loading" />

        <notification v-else-if="showError" error>{{activity.error}}</notification>

        <template v-else-if="showActivity">
          <p class="uppercase text-xs font-bold text-gray-500 mb-3">You should</p>
          <activity :activity="{activity: activity.activity}" class="mb-3" />
        </template>
      </div>

      <div class="text-center" v-if="showActivity">
        <app-button
          class="bg-red-700 hover:bg-red-600"
          @click.prevent="$emit('save', activity)"
        >Save for later</app-button>
      </div>
    </div>

    <div class="md:w-2/5 w-full bg-gray-700">
      <activity-filter @search="fetchActivity" />
    </div>
  </div>
</template>

<script>
import { getActivity } from '../utils/api'

import Activity from '../components/Activity'
import ActivityFilter from '../components/ActivityFilter'
import Loading from '../components/Loading'
import AppButton from '../components/Button'
import Notification from '../components/Notification'

export default {
  data() {
    return {
      activity: null,
      loading: true,
    }
  },

  created() {
    this.fetchActivity()
  },

  computed: {
    showError() {
      return !this.loading && this.activity && this.activity.error;
    },

    showActivity() {
      return !this.loading && !this.showError
    }
  },

  methods: {
    fetchActivity(params = {}) {
      this.loading = true

      getActivity(params)
        .then(response => {
          this.activity = response.data
        })
        .then(() => (this.loading = false))
    },
  },

  components: {
    Activity,
    ActivityFilter,
    Loading,
    AppButton,
    Notification
  },
}
</script>

