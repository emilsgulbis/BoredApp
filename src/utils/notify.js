import Vue from 'vue'

export default {
  state: Vue.observable({
    items: []
  }),

  success(text) {
    this.add(text, 'success')
  },

  error(text) {
    this.add(text, 'error')
  },

  add(text, type) {
    const key = +new Date()
    this.state.items.push({
      text,
      type,
      key
    })

    setTimeout(() => {
      this.remove({ key })
    }, 2500)
  },

  remove ({ key }) {
    this.state.items = this.state.items.filter(item => item.key !== key)
  }
}
