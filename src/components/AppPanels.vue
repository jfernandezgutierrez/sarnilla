<template>
     <div>
      <iframe src="https://drive.google.com/file/d/1NaUFxCm4N3T0fxRLki7QKkYRQr4HSshv/preview"  ></iframe>
    
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
    export default {
        name: 'AppPanels',
      data: () => ({
        panel: [],
        historia:[],
        hacemos:[]
      }),
    }
  </script>