import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

loadFonts();

const app = createApp(App);

// Añadir un mixin global para tener acceso a los breakpoints en todos los componentes
app.mixin({
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    isTablet() {
      return this.$vuetify.breakpoint.mdOnly;
    },
    isDesktop() {
      return this.$vuetify.breakpoint.lgAndUp;
    },
  },
});

app.use(vuetify).mount('#app');
