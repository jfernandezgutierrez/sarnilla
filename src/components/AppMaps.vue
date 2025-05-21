<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <GmapMap
          ref="mapRef"
          :center="center"
          :zoom="zoom"
          class="google-map"
          map-type-id="roadmap"
        />
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { ref, onMounted } from 'vue';
import { GmapMap } from 'vue2-google-maps';

export default {
  name: "AppMaps",
  components: {
    GmapMap,
  },
  setup() {
    const center = ref({ lat: 43.2197, lng: -3.9254 });
    const zoom = ref(17);
    const mapRef = ref(null);

    onMounted(() => {
      // Forzar el redibujo después de que todo esté montado
      setTimeout(() => {
        if (mapRef.value && mapRef.value.$mapObject) {
          google.maps.event.trigger(mapRef.value.$mapObject, 'resize');
        }
      }, 300);
    });

    return { center, zoom, mapRef };
  },
};

</script>

<style>
.google-map {
  width: 100%;
  height: 300px;
  min-height: 300px;
  border-radius: 8px;
}
</style>
