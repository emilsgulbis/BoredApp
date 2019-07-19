<template>
  <div class="min-h-screen flex justify-center pt-16 pb-8 px-8">
    <notifications />

    <div class="w-full max-w-3xl">
      <navigation v-model="page" />

      <div
        class="min-h-300px bg-gray-800 rounded-b-lg rounded-tr-lg overflow-hidden"
        :class="{'rounded-tl-lg': !isHome}"
      >
        <keep-alive>
          <home v-if="isHome" @save="handleSave" />
          <activity-list
            v-else
            :activities="activities"
            :loading="!activitiesLoaded"
            @remove="handleRemove"
            @clear="handleClear"
            class="p-8"
          />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Home from './pages/Home'
import Navigation from './components/Navigation'
import ActivityList from './components/ActivityList'
import Notifications from './components/Notifications'

import { getKeys, storeActivity, removeActivity, clearActivities } from './utils/storage'
import { getActivities } from './utils/api'
import notify from './utils/notify'

export default {
  name: 'app',

  data() {
    return {
      page: 'home',
      activities: [],
      activitiesLoaded: false,
    }
  },

  created() {
    const keys = getKeys()
    this.activitiesLoaded = !(keys.length > 0)

    if (keys.length > 0) {
      getActivities(keys).then(responses => {
        this.activities = responses.map(response => response.data)
        this.activitiesLoaded = true
      })
    }
  },

  computed: {
    isHome() {
      return this.page === 'home'
    }
  },

  methods: {
    handleSave(activity) {
      if (!this.activities.some(({key}) => activity.key === key)) {
        this.activities.push(JSON.parse(JSON.stringify(activity)))
      }

      storeActivity(activity)
      notify.success("Activity successfully saved!")
    },

    handleRemove(activity) {
      this.activities = this.activities.filter(({key}) => activity.key !== key)
      removeActivity(activity)
      notify.success("Activity successfully removed!")
    },

    handleClear() {
      this.activities = []
      clearActivities()
      notify.success("Activities successfully removed!")
    }
  },

  components: {
    Navigation,
    Home,
    ActivityList,
    Notifications
  },
}
</script>

<style src="./assets/tailwind.css"></style>
