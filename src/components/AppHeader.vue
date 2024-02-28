<template>
  <v-app>
    
      <v-container fluid><h1 justify="center" align="center" class="headline-1" @click="homeC()">Sat. La Sarnilla</h1>
        <v-row justify="center" align="center" style="height: 100%;">
          
          
          <v-btn text @click="homeC()">
            <v-icon>mdi-history</v-icon>
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
      <!--Inicio-->
      <container v-if="home==true">
      <AppHome/>  
      </container>
      <!--Imagenes-->
      <container v-if="imagenes==true">
        
      <AppImagenes/> 
      <!--Zona--> 
      </container>
      <container v-if="zona==true">
      <AppZona/>  
      </container>
      <AppFooter/>
    
    
    
  </v-app>
</template>

<script>
import AppHome from "../AppHome.vue"
import AppImagenes from "../AppImagenes.vue"
import AppZona from "../AppZona.vue"
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
      home:true,
      imagenes:false,
      zona:false,
      // Tus datos aquí
    };
  },
  computed: {
    isMobile() {
      const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      return screenWidth < 600; // Móvil si el ancho es menor a 600 pixels
    },
  },
  methods: {
   homeC(){
    this.home=true;
    this.imagenes=false;
    this.zona=false
   },
   imagenesC(){
    this.home=false;
    this.imagenes=true;
    this.zona=false
   },
   zonaC(){
    this.home=false;
    this.imagenes=false;
    this.zona=true;
   }
  },
  mounted() {
    // Código que se ejecuta después de que el componente ha sido montado
  },
};
</script>
