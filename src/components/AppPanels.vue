<template>
    
    
    <div style="">
      <v-expansion-panels v-model="panel"  multiple>
        <v-expansion-panel>
          <v-expansion-panel-title>Panel 1</v-expansion-panel-title>
          <v-expansion-panel-text> <h1>Hola</h1> </v-expansion-panel-text>
        </v-expansion-panel>
  
        <v-expansion-panel>
          <v-expansion-panel-title>Panel 2</v-expansion-panel-title>
          <v-expansion-panel-text> <h1>Hola</h1> </v-expansion-panel-text>
        </v-expansion-panel>
  
        <v-expansion-panel>
          <v-expansion-panel-title>Panel 3</v-expansion-panel-title>
          <v-expansion-panel-text> Some content </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </template>
  
  <script>
    export default {
        name: 'AppPanels',
      data: () => ({
        panel: [],
        
      }),
    }
  </script>