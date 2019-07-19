<template>
  <button
    class="py-3 px-10 focus:outline-none rounded-t-lg font-medium"
    :class="{
      'bg-gray-800 text-gray-100': active,
      'text-gray-600': !active
    }"
    v-on="$listeners"
  ><slot /></button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
