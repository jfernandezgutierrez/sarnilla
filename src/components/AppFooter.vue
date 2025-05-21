<template>
  <v-footer  class="footer">
    <v-container>
      <v-row justify="center" align="center" class="text-center">
        
        <v-col cols="12" md="4">
          <v-row no-gutters align="center" justify="center">
            <v-icon class="mr-2" color="green">mdi-phone</v-icon>
            <span class="white--text">+34 696 659 284</span>
          </v-row>
        </v-col>

        <v-col cols="12" md="4">
          <v-row no-gutters align="center" justify="center">
            <v-icon class="mr-2" color="green">mdi-email</v-icon>
            <span class="white--text">javi.lasarnilla@yahoo.es</span>
          </v-row>
        </v-col>

        <v-col cols="12" md="4">
          <a href="https://www.instagram.com/lasarnilla/" target="_blank" class="no-decoration">
            <v-row no-gutters align="center" justify="center">
              <v-icon class="mr-2" color="green">mdi-instagram</v-icon>
              <span class="white--text">La Sarnilla</span>
            </v-row>
          </a>
        </v-col>

      </v-row>
    </v-container>
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
  