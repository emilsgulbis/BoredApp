module.exports = {
  theme: {
    extend: {
      minHeight: {
        '300px': '300px'
      }
    },

    customForms: theme => ({
      selectIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"><path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"/></svg>`,

      default: {
        'input, select': {
          padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
        },
      }
    })
  },

  variants: {},

  plugins: [require('@tailwindcss/custom-forms')]
}
