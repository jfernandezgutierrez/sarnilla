<!-- GoogleMap.vue -->
<template>
  <v-container fluid>
    <v-row class="d-flex justify-center">
      <v-col cols="12" sm="6"> <!-- Ajusta el tamaño del contenedor según tus necesidades -->
        <div>
          <GmapMap  :zoom="zoom"></GmapMap>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
  import { ref } from 'vue';
  import { GmapMap } from 'vue2-google-maps';
  
  export default {
    name:"AppMaps",
    components: {
      AppMaps,
    },
    setup() {
      const center = ref({ lat: 40.7128, lng: -74.0060 });
      const zoom = ref(12);
  
      return { center, zoom };
    },
  };
  </script>

  