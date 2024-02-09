<template>
  <v-app>
    <v-main>
      <AppHeader/>
      <AppFooter/>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue';
export default {
  name: 'App',

  components: {
    AppHeader,
    AppFooter,
  },

  data: () => ({
    //
  }),
}
</script>
