<template>
  <div class="p-8">
    <p class="uppercase text-xs font-bold text-gray-300 mb-3">Activity details</p>

    <fieldset class="mb-4">
      <label
        for="type"
        class="text-xs uppercase tracking-wider block text-gray-500 mb-2"
      >Type</label>
      <select
        id="type"
        v-model="filter.type"
        class="form-select w-full block shadow focus:bg-gray-100"
      >
        <option
          v-for="{ value, label } in typeOptions"
          :key="value"
          :value="value"
        >{{ label }}</option>
      </select>
    </fieldset>

    <fieldset class="mb-4">
      <label
        for="type"
        class="text-xs uppercase tracking-wider block text-gray-500 mb-2"
      >Participants</label>
      <input
        id="type"
        v-model.number="filter.participants"
        type="number"
        min="1"
        class="form-input shadow w-full focus:bg-gray-100"
      />
    </fieldset>

    <fieldset class="mb-4">
      <label
        for="maxprice"
        class="text-xs uppercase tracking-wider block text-gray-500 mb-2"
      >Max. Budget</label>
      <input
        id="maxprice"
        type="range"
        v-model.number="filter.maxprice"
        min="0"
        max="1"
        step="0.1"
        class="w-full"
      />
      <p class="flex justify-between text-xs text-gray-600">
        <span>cheap</span>
        <span>expensive</span>
      </p>
    </fieldset>

    <div class="text-center">
      <app-button
        class="bg-blue-700 hover:bg-blue-600"
        @click.prevent="$emit('search', filter)"
      >Hit me with the new one</app-button>
    </div>
  </div>
</template>

<script>
import AppButton from './Button'
import { typeOptions } from '../utils/variables'

export default {
  data() {
    return {
      typeOptions,
      filter: {
        type: 'social',
        participants: 1,
        maxprice: 0
      }
    }
  },

  components: {
    AppButton
  }
}
</script>
