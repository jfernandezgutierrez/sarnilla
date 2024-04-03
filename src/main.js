import { createApp } from 'vue';
import App from './App.vue';
//import * as VueGoogleMaps from 'vue3-google-maps';
import vuetify from './plugins/vuetify';
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet';
import { loadFonts } from './plugins/webfontloader';

loadFonts();

const app = createApp(App);
app.component('LMap', LMap);
app.component('LTileLayer', LTileLayer);
app.component('LMarker', LMarker);
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
