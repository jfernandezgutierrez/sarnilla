// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'sarnillaTheme',
    themes: {
      sarnillaTheme: {
        dark: false,
        colors: {
          primary:    '#2d5a2d',
          secondary:  '#7ecf5f',
          accent:     '#4a8c32',
          background: '#f8faf6',
          surface:    '#ffffff',
          success:    '#4CAF50',
          error:      '#FF5252',
          info:       '#2196F3',
          warning:    '#FFC107',
        },
      },
    },
  },
})
