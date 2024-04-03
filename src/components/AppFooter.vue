<template>
    <v-footer color="" app >
      <v-row justify="center" align="center">
       
        <v-col cols="12" sm="2">
          <v-row align="center">
            <v-icon class="mr-2">mdi-phone</v-icon>
            <span class="white--text">+34 696659284</span>
          </v-row>
        </v-col>
        <v-col cols="12" sm="2">
          <v-row align="center">
            <v-icon class="mr-2">mdi-email</v-icon>
            <span class="white--text">javi.lasarnilla@yahoo.es</span>
          </v-row>
        </v-col>
        <v-col cols="12" sm="2">
          <a href="https://www.instagram.com/lasarnilla/" target="_blank" class="no-decoration">
          <v-row >
            <v-icon  class="mr-2">mdi-instagram</v-icon>
            <span class="white--text">La Sarnilla</span>
          </v-row>
        </a>
        </v-col>
      </v-row>
    </v-footer>
  </template>
  
  <script>
  export default {
    name:"AppFooter",
    components: {

    },
    data(){
      return{

      }
      
    },
    computed:{

    },
    methods:{
      
    }
  }
  </script>
  <style>
  .no-decoration {
    text-decoration: none; /* Quita el subrayado */
    color: inherit; /* Utiliza el color del texto por defecto */
    transition: none; /* Quita la transición */
  }
  </style>
  