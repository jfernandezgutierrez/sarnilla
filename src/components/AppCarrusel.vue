<template>
  <div class="hero-carousel">
    <!-- Slides -->
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="hero-slide"
      :class="{ active: current === index, prev: prev === index }"
      :style="{ backgroundImage: `url(${slide.src})` }"
    ></div>

    <!-- Dark gradient overlay -->
    <div class="hero-overlay"></div>

    <!-- Hero content -->
    <div class="hero-content">
      <div class="hero-badge">
        <v-icon size="14" color="#7ecf5f">mdi-star</v-icon>
        <span>Valle de Villacarriedo · Cantabria</span>
      </div>
      <h1 class="hero-title">
        Tradición<br>
        <span class="hero-title-accent">y Excelencia</span><br>
        Ganadera
      </h1>
      <p class="hero-desc">
        Tres generaciones de compromiso con la tierra, el bienestar animal y la producción láctea de calidad en los Montes Pasiegos.
      </p>
      <div class="hero-stats">
        <div class="hero-stat">
          <span class="stat-num">3</span>
          <span class="stat-label">Generaciones</span>
        </div>
        <div class="hero-divider"></div>
        <div class="hero-stat">
          <span class="stat-num">2</span>
          <span class="stat-label">Robots Lely</span>
        </div>
        <div class="hero-divider"></div>
        <div class="hero-stat">
          <span class="stat-num">100%</span>
          <span class="stat-label">Calidad</span>
        </div>
      </div>
    </div>

    <!-- Navigation dots -->
    <div class="hero-dots">
      <button
        v-for="(s, i) in slides"
        :key="i"
        class="hero-dot"
        :class="{ active: current === i }"
        @click="goTo(i)"
      ></button>
    </div>

    <!-- Arrow controls -->
    <button class="hero-arrow left" @click="prev_()">
      <v-icon color="white" size="22">mdi-chevron-left</v-icon>
    </button>
    <button class="hero-arrow right" @click="next_()">
      <v-icon color="white" size="22">mdi-chevron-right</v-icon>
    </button>

    <!-- Scroll hint -->
    <div class="hero-scroll-hint">
      <v-icon color="rgba(255,255,255,0.5)" size="20">mdi-chevron-double-down</v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCarrusel',
  data() {
    return {
      current: 0,
      prev: null,
      timer: null,
      slides: [
        { src: require('../assets/Carrusel/pinche.jpeg') },
        { src: require('../assets/Carrusel/vaca.jpg') },
        { src: require('../assets/Carrusel/limus.jpg') },
        { src: require('../assets/Carrusel/vacas.jpg') },
      ],
    };
  },
  mounted() {
    this.startAuto();
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  methods: {
    startAuto() {
      this.timer = setInterval(this.next_, 5000);
    },
    next_() {
      this.prev = this.current;
      this.current = (this.current + 1) % this.slides.length;
    },
    prev_() {
      this.prev = this.current;
      this.current = (this.current - 1 + this.slides.length) % this.slides.length;
    },
    goTo(i) {
      this.prev = this.current;
      this.current = i;
      clearInterval(this.timer);
      this.startAuto();
    },
  },
};
</script>

<style scoped>
/* ── HERO WRAPPER ── */
.hero-carousel {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  background: #0d1f0d;
}

/* ── SLIDES ── */
.hero-slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transform: scale(1.08);
  transition: opacity 1.1s ease, transform 6s ease;
  will-change: transform, opacity;
}

.hero-slide.active {
  opacity: 1;
  transform: scale(1);
  z-index: 2;
}

.hero-slide.prev {
  opacity: 0;
  z-index: 1;
}

/* ── OVERLAY ── */
.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 3;
  background: linear-gradient(
    to right,
    rgba(5, 20, 5, 0.82) 0%,
    rgba(5, 20, 5, 0.5) 55%,
    rgba(5, 20, 5, 0.2) 100%
  );
}

/* ── CONTENT ── */
.hero-content {
  position: absolute;
  inset: 0;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 8% 80px;
  max-width: 700px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(126,207,95,0.15);
  border: 1px solid rgba(126,207,95,0.35);
  border-radius: 50px;
  padding: 5px 14px;
  margin-bottom: 24px;
  width: fit-content;
  color: #a8e88a;
  font-size: 0.72rem;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  font-weight: 600;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.08;
  color: #ffffff;
  margin-bottom: 20px;
  letter-spacing: -0.5px;
}

.hero-title-accent {
  color: #7ecf5f;
  display: inline-block;
}

.hero-desc {
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: rgba(255,255,255,0.7);
  line-height: 1.7;
  max-width: 480px;
  margin-bottom: 40px;
}

/* ── STATS ── */
.hero-stats {
  display: flex;
  align-items: center;
  gap: 24px;
}

.hero-stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stat-num {
  font-size: 1.8rem;
  font-weight: 800;
  color: #7ecf5f;
  line-height: 1;
}

.stat-label {
  font-size: 0.72rem;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-divider {
  width: 1px;
  height: 36px;
  background: rgba(255,255,255,0.2);
}

/* ── DOTS ── */
.hero-dots {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  display: flex;
  gap: 8px;
}

.hero-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,0.35);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.hero-dot.active {
  background: #7ecf5f;
  width: 24px;
  border-radius: 4px;
}

/* ── ARROWS ── */
.hero-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.25s;
  backdrop-filter: blur(6px);
}

.hero-arrow:hover {
  background: rgba(126,207,95,0.25);
  border-color: rgba(126,207,95,0.5);
}

.hero-arrow.left { left: 24px; }
.hero-arrow.right { right: 24px; }

/* ── SCROLL HINT ── */
.hero-scroll-hint {
  position: absolute;
  bottom: 32px;
  right: 32px;
  z-index: 5;
  animation: bounce 2s infinite;
  opacity: 0.6;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

/* ── RESPONSIVE ── */
@media (max-width: 600px) {
  .hero-content {
    padding: 0 24px 80px;
    max-width: 100%;
  }
  .hero-stats { gap: 16px; }
  .stat-num { font-size: 1.4rem; }
  .hero-arrow { display: none; }
}
</style>
