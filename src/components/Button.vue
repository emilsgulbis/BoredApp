<template>
  <button
    class="text-xs uppercase font-bold bg-gray-700 text-white rounded px-5 py-2 focus:outline-none"
    v-on="$listeners"
  >
    <slot/>
  </button>
</template>
