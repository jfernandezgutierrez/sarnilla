<template>
    
      
        <v-carousel cycle style="height: 800px; ">
          <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover
          ></v-carousel-item>
  
          <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
            cover
          ></v-carousel-item>
  
          <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            cover
            style="object-fit: cover; width: 100%; height: 100%;"
          ></v-carousel-item>
        </v-carousel>
     
      
   
  </template>
  <script>

  export default {
    name: 'AppCarrusel',
   
    data: () => ({
    
     
      
    }),
  }
  </script>