<template>
  <div id="inicio" class="home-root">
    <AppCarrusel />
    <AppPanels />
  </div>
</template>

<script>
import AppCarrusel from './components/AppCarrusel.vue';
import AppPanels from './components/AppPanels.vue';

export default {
  name: 'AppHome',
  components: { AppCarrusel, AppPanels },
};
</script>

<style scoped>
.home-root {
  width: 100%;
}
</style>
