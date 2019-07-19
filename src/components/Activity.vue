<template>
  <div class="bg-gray-300 p-4 shadow-lg rounded flex items-center overflow-hidden">
    <div class="flex-1">
      <div class="mb-2" v-if="type">
        <span
          class="inline-block px-2 py-1 bg-teal-200 text-teal-800 rounded-full font-semibold uppercase tracking-wide text-xs"
        >{{type.label}}</span>
      </div>

      <p class="text-lg font-semibold">{{ activity.activity }}</p>

      <p class="text-xs text-gray-600 font-semibold uppercase tracking-wide mt-2" v-if="participants || budget">
        <template v-if="participants">{{ participants}} participants</template>
        <span class="px-1" v-if="participants && budget">&middot;</span>
        <template v-if="budget">{{ budget | price }} &euro;</template>
      </p>
    </div>

    <button
      v-if="canRemove"
      class="w-10 h-10 text-gray-200 bg-gray-200 border border-gray-400 rounded-full ml-4 hover:bg-gray-100 hover:text-gray-500 hover:shadow focus:outline-none"
      @click.prevent="$emit('remove')"
    >
      <svg viewBox="0 0 16 16" class="fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z"/></svg>
    </button>
  </div>
</template>

<script>
import { typeOptions } from '../utils/variables'
export default {
  props: {
    activity: {
      type: Object,
      required: true
    }
  },

  computed: {
    type() {
      return (
        this.activity.type &&
        typeOptions.find(option => option.value === this.activity.type)
      ) || false
    },

    participants() {
      return this.activity.participants
    },

    budget() {
      return this.activity.price
    },

    canRemove() {
      return !!this.$listeners.remove
    }
  },

  filters: {
    price(budget) {
      return `${budget * 100}`
    }
  }
}
</script>
