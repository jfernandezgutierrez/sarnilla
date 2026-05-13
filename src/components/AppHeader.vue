<template>
  <!-- NAVBAR -->
  <nav class="sarnilla-nav" :class="{ 'nav-scrolled': scrolled }">
    <div class="nav-inner">
      <!-- Logo / Brand -->
      <div class="nav-brand" @click="homeC()">
        <v-icon class="nav-logo-icon" size="28">mdi-barn</v-icon>
        <div class="nav-brand-text">
          <span class="nav-title">La Sarnilla</span>
          <span class="nav-subtitle">SAT Ganadera · Cantabria</span>
        </div>
      </div>

      <!-- Desktop nav -->
      <div class="nav-links">
        <button class="nav-link" :class="{ active: home }" @click="homeC()">
          <v-icon size="16" class="mr-1">mdi-home</v-icon>
          Inicio
        </button>
        <button class="nav-link" :class="{ active: zona }" @click="zonaC()">
          <v-icon size="16" class="mr-1">mdi-map-marker</v-icon>
          Zona
        </button>
      </div>

      <!-- Mobile hamburger -->
      <button class="nav-hamburger" @click="menuOpen = !menuOpen">
        <v-icon color="white">{{ menuOpen ? 'mdi-close' : 'mdi-menu' }}</v-icon>
      </button>
    </div>

    <!-- Mobile dropdown -->
    <div class="nav-mobile-menu" :class="{ open: menuOpen }">
      <button class="mobile-link" @click="homeC(); menuOpen=false">
        <v-icon size="18" class="mr-2">mdi-home</v-icon> Inicio
      </button>
      <button class="mobile-link" @click="zonaC(); menuOpen=false">
        <v-icon size="18" class="mr-2">mdi-map-marker</v-icon> Zona
      </button>
    </div>
  </nav>

  <!-- PAGE CONTENT -->
  <div class="page-content">
    <transition name="fade" mode="out-in">
      <AppHome v-if="home" key="home" />
      <AppImagenes v-else-if="imagenes" key="imagenes" />
      <AppZona v-else-if="zona" key="zona" />
    </transition>
  </div>
</template>

<script>
import AppHome from "../AppHome.vue";
import AppImagenes from "../AppImagenes.vue";
import AppZona from "../AppZona.vue";

export default {
  name: 'AppHeader',
  components: { AppHome, AppImagenes, AppZona },
  data() {
    return {
      home: true,
      imagenes: false,
      zona: false,
      scrolled: false,
      menuOpen: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 60;
    },
    homeC() {
      this.home = true; this.imagenes = false; this.zona = false;
    },
    imagenesC() {
      this.home = false; this.imagenes = true; this.zona = false;
    },
    zonaC() {
      this.home = false; this.imagenes = false; this.zona = true;
    },
  },
};
</script>

<style scoped>
/* ── NAV BASE ── */
.sarnilla-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(135deg, #1a3a1a 0%, #2d5a2d 100%);
  transition: all 0.35s ease;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.sarnilla-nav.nav-scrolled {
  background: rgba(20, 44, 20, 0.97);
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 24px rgba(0,0,0,0.35);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ── BRAND ── */
.nav-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  text-decoration: none;
}

.nav-logo-icon {
  color: #7ecf5f !important;
  filter: drop-shadow(0 0 8px rgba(126,207,95,0.4));
}

.nav-brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.nav-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.5px;
}

.nav-subtitle {
  font-size: 0.65rem;
  color: rgba(255,255,255,0.55);
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

/* ── DESKTOP LINKS ── */
.nav-links {
  display: flex;
  gap: 4px;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 8px 20px;
  border-radius: 50px;
  border: 1px solid transparent;
  background: transparent;
  color: rgba(255,255,255,0.75);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.nav-link:hover {
  color: #ffffff;
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.15);
}

.nav-link.active {
  color: #7ecf5f;
  background: rgba(126,207,95,0.12);
  border-color: rgba(126,207,95,0.3);
}

/* ── HAMBURGER ── */
.nav-hamburger {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
}

/* ── MOBILE MENU ── */
.nav-mobile-menu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: rgba(15, 35, 15, 0.98);
}

.nav-mobile-menu.open {
  max-height: 200px;
}

.mobile-link {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 14px 24px;
  background: transparent;
  border: none;
  color: rgba(255,255,255,0.8);
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  border-bottom: 1px solid rgba(255,255,255,0.07);
}

.mobile-link:hover {
  background: rgba(126,207,95,0.1);
  color: #7ecf5f;
}

/* ── PAGE CONTENT ── */
.page-content {
  padding-top: 70px;
}

/* ── TRANSITION ── */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .nav-hamburger {
    display: block;
  }
  .nav-subtitle {
    display: none;
  }
}
</style>
