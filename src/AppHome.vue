<template>
<v-container id="inicio">
    <v-divider :thickness="30"></v-divider>
      <AppCarrusel/>
      <v-divider :thickness="30"></v-divider>
    <AppPanels/>
  </v-container>
  <container>
    
  </container>
</template>
<script>
import AppCarrusel from './components/AppCarrusel.vue';
import AppPanels from './components/AppPanels.vue';
export default {
  name: 'AppHome',
  components: {
    AppCarrusel,
    AppPanels,
  },
  data() {
    return {
      // Tus datos aquí
    };
  },
  computed: {
    
  },
  methods: {
    // Otros métodos si es necesario
  },
  mounted() {
    // Código que se ejecuta después de que el componente ha sido montado
  },
};
</script>