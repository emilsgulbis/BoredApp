<template>
  <nav>
    <ul>
      <li class="inline-block">
        <navigation-item
          :active="page === 'home'"
          @click="$emit('change', 'home')"
        >Activities</navigation-item>
      </li>

      <li class="inline-block">
        <navigation-item
          :active="page === 'my-list'"
          @click="$emit('change', 'my-list')"
        >My List </navigation-item>
      </li>
    </ul>
  </nav>
</template>

<script>
import NavigationItem from './NavigationItem'

export default {
  props: {
    page: {
      type: String,
      required: true
    }
  },

  model: {
    prop: 'page',
    event: 'change'
  },

  components: {
    NavigationItem
  },
}
</script>
