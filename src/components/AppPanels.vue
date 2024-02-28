<template>
     <div>
      <video ref="myVideo" class="fm-video video-js vjs-16-9 vjs-big-play-centered" controls></video>

  </div>
    
    <div style="">
      <v-container>
<v-expansion-panels v-model="historia">
        <v-expansion-panel>
          <v-expansion-panel-title >Historia</v-expansion-panel-title>
          <v-expansion-panel-text> <h1>Hola</h1> </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
      </v-container>
      <v-container>
<v-expansion-panels v-model="hacemos">
        <v-expansion-panel>
          <v-expansion-panel-title>Que hacemos</v-expansion-panel-title>
          <v-expansion-panel-text> <h1>Hola</h1> </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
      </v-container>
      <v-container>
  
      <v-expansion-panels v-model="panel">
        <v-expansion-panel>
          <v-expansion-panel-title>Panel 3</v-expansion-panel-title>
          <v-expansion-panel-text> Some content </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
      </v-container>
      

    
    </div>
  </template>
  
  <script>
  import videojs from 'video.js';
import 'video.js/dist/video-js.css';
    export default {
        name: 'AppPanels',
      data: () => ({
        panel: [],
        historia:[],
        hacemos:[]
      }),
      mounted() {
        this.player = videojs(this.$refs.myVideo, {
      fluid:true,
      controls: true,
      autoplay: true,
      loop:true,
      sources: [
        { src: require('../assets/Videos/resumen.mp4'), type: 'video/mp4' },
      ],
    });
    
  },
  beforeUnmount() {
   
    if (this.player) {
      this.player.dispose();
    }
  },
  methods: {
   
  },
    }
  </script>
  <style>
  /* Estilos para ajustar el tamaño del video */
  .fm-video {
    width: 5%; /* Puedes ajustar el tamaño según tus necesidades */
    height: auto; /* La altura se ajustará automáticamente para mantener la proporción original */
  }
  </style>