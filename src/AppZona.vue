<template>
  <div class="zona-root">
    <!-- Hero text -->
    <div class="zona-hero">
      <div class="zona-hero-inner">
        <div class="section-eyebrow">
          <v-icon size="14" color="#7ecf5f">mdi-map-marker</v-icon>
          <span>Encuéntranos</span>
        </div>
        <h2 class="zona-title">Nuestra Ubicación</h2>
        <div class="title-bar"></div>
        <p class="zona-desc">
          Estamos en el <strong>Valle de Villacarriedo</strong>, en el corazón de los Montes Pasiegos de Cantabria — un entorno privilegiado que brinda las condiciones ideales para nuestra ganadería.
        </p>
      </div>

      <!-- Info cards -->
      <div class="zona-info-cards">
        <div class="zona-info-card">
          <v-icon color="#7ecf5f" size="24">mdi-map-marker-outline</v-icon>
          <div>
            <span class="info-label">Dirección</span>
            <span class="info-val">Lugar, Bo. la Portilla, 0 S N, 39649 Tezanos, Cantabria</span>
          </div>
        </div>
        <div class="zona-info-card">
          <v-icon color="#7ecf5f" size="24">mdi-pine-tree</v-icon>
          <div>
            <span class="info-label">Entorno</span>
            <span class="info-val">Montes Pasiegos</span>
          </div>
        </div>
        <div class="zona-info-card">
          <v-icon color="#7ecf5f" size="24">mdi-phone-outline</v-icon>
          <div>
            <span class="info-label">Teléfono</span>
            <span class="info-val">+34 696 659 284</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Map -->
    <div class="zona-map-wrap">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d363.44619756018847!2d-3.8295813387853976!3d43.218516369076745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd492e5713e29c3b%3A0x91edfee4bbbedc47!2sSat%20la%20Sarnilla!5e0!3m2!1ses!2ses!4v1709667772897!5m2!1ses!2ses"
        class="zona-iframe"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppZona',
};
</script>

<style scoped>
.zona-root {
  background: #f8faf6;
  min-height: 80vh;
}

/* ── HERO TEXT ── */
.zona-hero {
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 32px 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.section-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #4a8c32;
  margin-bottom: 14px;
}

.zona-title {
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: #1a3a1a;
  line-height: 1.15;
  margin: 0 0 16px;
}

.title-bar {
  width: 48px;
  height: 4px;
  background: linear-gradient(90deg, #7ecf5f, #4a8c32);
  border-radius: 2px;
  margin-bottom: 24px;
}

.zona-desc {
  font-size: 1rem;
  line-height: 1.8;
  color: #4a5a4a;
}

/* ── INFO CARDS ── */
.zona-info-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.zona-info-card {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #ffffff;
  border: 1px solid rgba(74,140,50,0.15);
  border-radius: 14px;
  padding: 18px 22px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  transition: transform 0.25s, box-shadow 0.25s;
}
.zona-info-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(0,0,0,0.1);
}

.zona-info-card > div {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.info-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(74,90,74,0.55);
}

.info-val {
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a3a1a;
}

/* ── MAP ── */
.zona-map-wrap {
  width: 100%;
  height: 480px;
  overflow: hidden;
  border-top: 1px solid rgba(74,140,50,0.12);
}

.zona-iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
  filter: saturate(0.9) contrast(1.05);
}

/* ── RESPONSIVE ── */
@media (max-width: 900px) {
  .zona-hero {
    grid-template-columns: 1fr;
    gap: 36px;
    padding: 60px 20px 36px;
  }
  .zona-map-wrap { height: 360px; }
}
</style>
