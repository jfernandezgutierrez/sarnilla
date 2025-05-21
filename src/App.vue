<template>
  <v-app>
    <v-main>
      <AppHeader/>
      <v-btn
  v-show="showScrollButton"
  icon
  color="green"
  class="scroll-to-top"
  @click="scrollToTop"
>
  <v-icon>mdi-arrow-up</v-icon>
</v-btn>
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
    AppFooter
    
  },

  data() {
  return {
    showScrollButton: false,
  };
},
mounted() {
  window.addEventListener('scroll', this.checkScroll);
},
beforeUnmount() {
  window.removeEventListener('scroll', this.checkScroll);
},
methods: {
  checkScroll() {
    this.showScrollButton = window.scrollY > 300;
  },
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
}
</script>
<style>
.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999;
}
p {
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 1rem;
}
</style>
