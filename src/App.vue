<template>
  <v-app>
    <v-main>
      <AppHeader />

      <!-- Scroll to top button -->
      <transition name="fade-up">
        <button
          v-show="showScrollButton"
          class="scroll-top-btn"
          @click="scrollToTop"
          aria-label="Volver arriba"
        >
          <v-icon color="white" size="20">mdi-arrow-up</v-icon>
        </button>
      </transition>

      <AppFooter />
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: { AppHeader, AppFooter },
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
      this.showScrollButton = window.scrollY > 400;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>

<style>
/* ── RESET / BASE ── */
*, *::before, *::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Roboto', 'Inter', sans-serif;
  background: #f8faf6;
  color: #1a3a1a;
  -webkit-font-smoothing: antialiased;
}

p {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.8;
  color: #4a5a4a;
  margin-bottom: 1rem;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Roboto', sans-serif;
  color: #1a3a1a;
}

/* ── SCROLL TO TOP BUTTON ── */
.scroll-top-btn {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 999;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #2d5a2d, #4a8c32);
  box-shadow: 0 4px 20px rgba(45,90,45,0.45);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.scroll-top-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 28px rgba(45,90,45,0.55);
}

/* ── TRANSITION ── */
.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

/* ── VUETIFY OVERRIDES ── */
.v-container {
  padding: 0 !important;
}
</style>
