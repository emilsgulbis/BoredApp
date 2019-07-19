<template>
  <transition-group name="list" tag="div" :css="false" @leave="leaveAnime">
    <slot />
  </transition-group>
</template>

<script>
import anime from 'animejs'

export default {
  methods: {
    leaveAnime(el, done) {
      anime({
        targets: el,
        height: 0,
        opacity: 0,
        paddingTop: 0,
        paddingBottom: 0,
        easing: 'cubicBezier(.5, .05, .1, .3)',
        duration: 250
      }).finished.then(() => {
        done()
      })
    }
  }
}
</script>
