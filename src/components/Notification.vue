<template>
  <div
    class="px-6 py-4 rounded text-white mb-2"
    :class="{
      'bg-green-600': !error,
      'bg-red-600': error
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Boolean,
      default: false
    }
  }
}
</script>

