<template>
  <v-app class="d-flex flex-column">

    <v-container fluid>
      <h1 justify="center" align="center" class="headline-1" @click="homeC()">Sat. La Sarnilla</h1>
      <v-row justify="center" align="center" style="height: 100%;">
        <v-btn text @click="homeC()">
          <v-icon>mdi-home</v-icon>
          <span>Inicio</span>
        </v-btn>
        <v-btn text @click="imagenesC()">
          <v-icon>mdi-heart</v-icon>
          <span>Imagenes</span>
        </v-btn>
        <v-btn text @click="zonaC()">
          <v-icon>mdi-map-marker</v-icon>
          <span>Zona</span>
        </v-btn>
      </v-row>
    </v-container>

    <!-- Contenido principal -->
    <v-container fluid class="flex-grow-1">
      <template v-if="home">
        <AppHome />
      </template>
      <template v-if="imagenes">
        <AppImagenes />
      </template>
      <template v-if="zona">
        <AppZona />
      </template>
    </v-container>

    <!-- Footer -->
    <v-container fluid class="footer-container">
      <AppFooter />
    </v-container>

  </v-app>
</template>

<script>
import AppHome from "../AppHome.vue";
import AppImagenes from "../AppImagenes.vue";
import AppZona from "../AppZona.vue";
import AppFooter from './AppFooter.vue';

export default {
  name: 'AppHeader',
  components: {
    AppHome,
    AppImagenes,
    AppFooter,
    AppZona
  },
  data() {
    return {
      home: true,
      imagenes: false,
      zona: false,
    };
  },
  methods: {
    homeC() {
      this.home = true;
      this.imagenes = false;
      this.zona = false;
    },
    imagenesC() {
      this.home = false;
      this.imagenes = true;
      this.zona = false;
    },
    zonaC() {
      this.home = false;
      this.imagenes = false;
      this.zona = true;
    }
  },
};
</script>

<style scoped>
html, body, #app, .v-application {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.v-app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.footer-container {
 /* Ajusta el color de fondo según tu diseño */
  color: #fff;
  padding: 20px 0;
  text-align: center;
}
</style>
