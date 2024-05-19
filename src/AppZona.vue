<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="6">
        <div class="text-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d363.44619756018847!2d-3.8295813387853976!3d43.218516369076745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd492e5713e29c3b%3A0x91edfee4bbbedc47!2sSat%20la%20Sarnilla!5e0!3m2!1ses!2ses!4v1709667772897!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
//import { ref } from 'vue';
//import L from 'leaflet';
//import 'leaflet/dist/leaflet.css';
export default {
  
  name: 'AppZona',
  components: {
    
  },
  data() {
    return {
      // Tus datos aquí
    //  center: [43.21838785052568, -3.8296859449306178], // Coordenadas de la ubicación de tu empresa
   //   zoom: 15,
    };
  },
  computed: {
    
  },
  methods: {
    // Otros métodos si es necesario
  },
  mounted() {
  //  const map = L.map('map-container').setView(this.center, this.zoom);

    // Añadir capa de mapa base
  //  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Añadir el marcador predeterminado
   // L.marker(this.center).addTo(map);
  },
};
</script>
