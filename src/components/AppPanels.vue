<template>
  <div class="panels-root">

    <!-- ═══ SECCIÓN: QUIÉNES SOMOS ═══ -->
    <section class="section-quienes">
      <div class="section-inner reverse-on-mobile">
        <!-- Video -->
        <div class="media-block">
          <div class="video-frame">
            <video
              class="main-video"
              controls
              autoplay
              muted
              loop
              :src="mainVideoSrc"
            ></video>
          </div>
        </div>

        <!-- Texto -->
        <div class="text-block">
          <div class="section-eyebrow">
            <v-icon size="14" color="#7ecf5f">mdi-account-cowboy-hat</v-icon>
            <span>Nuestra historia</span>
          </div>
          <h2 class="section-title">Quiénes Somos</h2>
          <div class="title-bar"></div>
          <p class="section-body">
            En las verdes praderas del valle de Villacarriedo, en los Montes Pasiegos de Cantabria, se encuentra <strong>SAT La Sarnilla</strong>, una ganadería que ha resistido el paso del tiempo y se ha convertido en un símbolo de tradición y perseverancia.
          </p>
          <p class="section-body">
            Fundada por generaciones anteriores de la familia, esta explotación ganadera comenzó con tan solo 20 vacas y un profundo compromiso con la tierra y los animales. Con esfuerzo, dedicación y amor por el oficio, fue creciendo de forma progresiva, transmitiendo de padres a hijos no solo el conocimiento del campo, sino también los valores de respeto, trabajo y arraigo al territorio.
          </p>
          <p class="section-body">
            La Sarnilla sigue siendo una empresa familiar, modernizada pero fiel a sus orígenes, combinando técnicas tradicionales con avances tecnológicos para garantizar el bienestar animal y la calidad de su producción láctea.
          </p>
        </div>
      </div>
    </section>

    <!-- ═══ SECCIÓN: QUÉ HACEMOS – INTRO ═══ -->
    <section class="section-hacemos-intro">
      <div class="hacemos-intro-inner">
        <div class="section-eyebrow light">
          <v-icon size="14" color="#7ecf5f">mdi-leaf</v-icon>
          <span>Actividades</span>
        </div>
        <h2 class="section-title light">¿Qué Hacemos?</h2>
        <div class="title-bar centered"></div>
        <p class="section-body light centered-text">
          Nos dedicamos a la producción de leche de alta calidad, manteniendo una tradición que ha pasado de generación en generación. Ubicados en el valle de Villacarriedo, en los Montes Pasiegos de Cantabria, combinamos prácticas tradicionales con innovaciones modernas para ofrecer productos lácteos excepcionales.
        </p>
      </div>
    </section>

    <!-- ═══ SECCIÓN: CUIDADO DEL GANADO ═══ -->
    <section class="section-activity">
      <div class="section-inner">
        <div class="text-block">
          <div class="section-eyebrow">
            <v-icon size="14" color="#7ecf5f">mdi-cow</v-icon>
            <span>Bienestar Animal</span>
          </div>
          <h2 class="section-title">Cuidado del Ganado</h2>
          <div class="title-bar"></div>
          <p class="section-body">
            Nuestro compromiso comienza con el bienestar de nuestras vacas. Cada ternero y ternera recibe <strong>leche pasteurizada individualmente</strong>, asegurando una nutrición segura, higiénica y adaptada a sus necesidades desde los primeros días de vida.
          </p>
          <p class="section-body">
            Este cuidado personalizado se complementa con una alimentación equilibrada a base de pienso de calidad, que favorece su desarrollo óptimo y fortalece su sistema inmunológico. Gracias a este enfoque integral, garantizamos que cada animal crezca sano, fuerte y en condiciones de máximo bienestar.
          </p>
          <div class="feature-chips">
            <span class="chip"><v-icon size="14">mdi-check-circle</v-icon> Leche pasteurizada individual</span>
            <span class="chip"><v-icon size="14">mdi-check-circle</v-icon> Pienso de calidad</span>
            <span class="chip"><v-icon size="14">mdi-check-circle</v-icon> Máximo bienestar</span>
          </div>
        </div>
        <div class="media-block">
          <div class="video-frame">
            <video class="main-video" controls loop :src="taxiVideoSrc"></video>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ SECCIÓN: ALIMENTACIÓN – CARDS ═══ -->
    <section class="section-alimentacion">
      <div class="alim-inner">
        <div class="section-eyebrow">
          <v-icon size="14" color="#7ecf5f">mdi-sprout</v-icon>
          <span>Alimentación propia</span>
        </div>
        <h2 class="section-title">Producción de Forraje</h2>
        <div class="title-bar"></div>

        <div class="alim-cards">
          <!-- Bolas de silo -->
          <div class="alim-card">
            <div class="alim-card-icon">
              <v-icon size="36" color="#7ecf5f">mdi-circle-slice-8</v-icon>
            </div>
            <h3 class="alim-card-title">Bolas de Silo</h3>
            <p class="alim-card-body">
              Producimos bolas de silo mediante la recolección y fermentación de forraje verde, asegurando una fuente de alimento rica en nutrientes para nuestro ganado durante todo el año, especialmente en invierno cuando el pasto es escaso.
            </p>
          </div>

          <!-- Silo de maíz -->
          <div class="alim-card">
            <div class="alim-card-icon">
              <v-icon size="36" color="#7ecf5f">mdi-corn</v-icon>
            </div>
            <h3 class="alim-card-title">Silo de Maíz</h3>
            <p class="alim-card-body">
              Cultivamos maíz en nuestras propias tierras para producir silo de maíz. Este silo se obtiene fermentando el maíz picado, proporcionando una excelente fuente de energía y nutrientes para nuestras vacas, complementando su dieta y ayudando a mantener su salud y productividad.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ SECCIÓN: PRODUCCIÓN DE LECHE ═══ -->
    <section class="section-activity alt-bg">
      <div class="section-inner reverse">
        <div class="media-block dual-video">
          <div class="video-frame half">
            <video class="main-video" controls loop :src="robot"></video>
          </div>
          <div class="video-frame half">
            <video class="main-video" controls loop :src="ordeno"></video>
          </div>
        </div>
        <div class="text-block">
          <div class="section-eyebrow">
            <v-icon size="14" color="#7ecf5f">mdi-cup</v-icon>
            <span>Producción Láctea</span>
          </div>
          <h2 class="section-title">Producción de Leche</h2>
          <div class="title-bar"></div>
          <p class="section-body">
            Nuestra leche es conocida por su pureza y sabor, fruto del cuidado que ponemos en cada etapa del proceso. Contamos con <strong>dos robots Lely Astronaut</strong> de última generación, que permiten un ordeño automático, eficiente y respetuoso con el ritmo natural de cada vaca.
          </p>
          <p class="section-body">
            Para aquellas vacas que requieren atención especial disponemos de una <strong>sala de ordeño tradicional</strong>, donde realizamos el proceso de forma manual y personalizada, asegurando que cada animal reciba el cuidado que necesita.
          </p>
          <div class="feature-chips">
            <span class="chip"><v-icon size="14">mdi-check-circle</v-icon> 2 Robots Lely Astronaut</span>
            <span class="chip"><v-icon size="14">mdi-check-circle</v-icon> Ordeño personalizado</span>
            <span class="chip"><v-icon size="14">mdi-check-circle</v-icon> Alta trazabilidad</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ SECCIÓN: NUESTRA LECHE EN TUS QUESOS ═══ -->
    <section class="section-jarradilla">
      <div class="jarradilla-inner">

        <div class="jarradilla-text">
          <div class="section-eyebrow">
            <v-icon size="14" color="#7ecf5f">mdi-handshake</v-icon>
            <span>Colaboración</span>
          </div>
          <h2 class="section-title">Nuestra leche,<br>tus quesos</h2>
          <div class="title-bar"></div>
          <p class="section-body">
            La leche que producimos en La Sarnilla no solo llega a tu mesa en estado puro — también se transforma en <strong>quesos artesanos de alta calidad</strong> gracias a nuestra colaboración con <strong>Quesos La Jarradilla</strong>.
          </p>
          <p class="section-body">
            Con la misma materia prima que cuidamos cada día en los Montes Pasiegos, La Jarradilla elabora una variedad de quesos que recogen lo mejor de Cantabria: tradición, sabor y autenticidad. Una cadena de valor corta, trazable y comprometida con el territorio.
          </p>
          <a href="https://www.quesoslajarradilla.com/" target="_blank" class="jarradilla-cta">
            <v-icon size="18">mdi-open-in-new</v-icon>
            Conoce Quesos La Jarradilla
          </a>
          <a href="https://www.quesoslajarradilla.com/quesos-y-mantequillas" target="_blank" class="jarradilla-cta">
            <v-icon size="18">mdi-open-in-new</v-icon>
            Conoce Sus Quesos
          </a>
        </div>

        <div class="jarradilla-cards">
          <div class="queso-card">
            <v-icon size="30" color="#7ecf5f">mdi-cheese</v-icon>
            <span>Quesos artesanos</span>
          </div>
          <div class="queso-card">
            <v-icon size="30" color="#7ecf5f">mdi-cow</v-icon>
            <span>Leche de nuestra ganadería</span>
          </div>
          <div class="queso-card">
            <v-icon size="30" color="#7ecf5f">mdi-map-marker</v-icon>
            <span>Origen Cantabria</span>
          </div>
          <div class="queso-card">
            <v-icon size="30" color="#7ecf5f">mdi-leaf</v-icon>
            <span>Producto local y trazable</span>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'AppPanels',
  data() {
    return {
      mainVideoSrc: require('../assets/Videos/resumen.mp4'),
      taxiVideoSrc: require('../assets/Videos/taxi.mp4'),
      robot: require('../assets/Videos/robot-pezoneras.mp4'),
      ordeno: require('../assets/Videos/sala-ordeno.mp4'),
    };
  },
};
</script>

<style scoped>
/* ── ROOT ── */
.panels-root {
  background: #f8faf6;
}

/* ══════════════════════════════
   LAYOUT HELPERS
══════════════════════════════ */
.section-inner {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.section-inner.reverse {
  direction: rtl;
}
.section-inner.reverse > * {
  direction: ltr;
}

/* ══════════════════════════════
   TYPOGRAPHY SYSTEM
══════════════════════════════ */
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
.section-eyebrow.light { color: #a8e88a; }

.section-title {
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: #1a3a1a;
  line-height: 1.15;
  margin: 0 0 16px;
  letter-spacing: -0.3px;
}
.section-title.light { color: #ffffff; }

.title-bar {
  width: 48px;
  height: 4px;
  background: linear-gradient(90deg, #7ecf5f, #4a8c32);
  border-radius: 2px;
  margin-bottom: 24px;
}
.title-bar.centered { margin-left: auto; margin-right: auto; }

.section-body {
  font-size: 1rem;
  line-height: 1.8;
  color: #4a5a4a;
  margin-bottom: 16px;
}
.section-body.light { color: rgba(255,255,255,0.75); }
.section-body.centered-text { text-align: center; max-width: 680px; margin-left: auto; margin-right: auto; }

/* ── CHIPS ── */
.feature-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 8px;
}
.chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(126,207,95,0.1);
  border: 1px solid rgba(126,207,95,0.3);
  color: #2d6b1a;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 50px;
}
.chip .v-icon { color: #4a8c32 !important; }

/* ══════════════════════════════
   MEDIA BLOCKS
══════════════════════════════ */
.media-block { width: 100%; }

.video-frame {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0,0,0,0.18);
  background: #0d1f0d;
  position: relative;
}

.main-video {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.dual-video {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.video-frame.half { border-radius: 12px; }

/* ══════════════════════════════
   SECCIÓN: QUIÉNES SOMOS
══════════════════════════════ */
.section-quienes {
  padding: 100px 0;
  background: #ffffff;
}

/* ══════════════════════════════
   SECCIÓN: QUÉ HACEMOS INTRO
══════════════════════════════ */
.section-hacemos-intro {
  background: linear-gradient(135deg, #1a3a1a 0%, #2d5a2d 100%);
  padding: 80px 32px;
}
.hacemos-intro-inner {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
.hacemos-intro-inner .section-eyebrow { justify-content: center; }

/* ══════════════════════════════
   SECCIÓN: ACTIVIDADES
══════════════════════════════ */
.section-activity {
  padding: 100px 0;
  background: #ffffff;
}
.section-activity.alt-bg {
  background: #f2f7ef;
}

/* ══════════════════════════════
   SECCIÓN: ALIMENTACIÓN
══════════════════════════════ */
.section-alimentacion {
  padding: 100px 32px;
  background: #1a3a1a;
  color: white;
}
.alim-inner {
  max-width: 1100px;
  margin: 0 auto;
}
.section-alimentacion .section-title { color: #ffffff; }
.section-alimentacion .section-body { color: rgba(255,255,255,0.7); }

.alim-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  margin-top: 16px;
}

.alim-card {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 40px 36px;
  transition: transform 0.3s ease, background 0.3s ease;
}
.alim-card:hover {
  transform: translateY(-4px);
  background: rgba(255,255,255,0.1);
}

.alim-card-icon {
  width: 68px;
  height: 68px;
  background: rgba(126,207,95,0.12);
  border: 1px solid rgba(126,207,95,0.25);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.alim-card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 14px;
}

.alim-card-body {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.65);
  line-height: 1.75;
}

/* ══════════════════════════════
   RESPONSIVE
══════════════════════════════ */
/* ══════════════════════════════
   SECCIÓN: LA JARRADILLA
══════════════════════════════ */
.section-jarradilla {
  padding: 100px 32px;
  background: #ffffff;
  border-top: 1px solid rgba(74,140,50,0.1);
}

.jarradilla-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 80px;
  align-items: center;
}

.jarradilla-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  padding: 13px 26px;
  border-radius: 50px;
  background: linear-gradient(135deg, #2d5a2d, #4a8c32);
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.25s, box-shadow 0.25s;
  box-shadow: 0 4px 18px rgba(45,90,45,0.3);
}
.jarradilla-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(45,90,45,0.45);
}

.jarradilla-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.queso-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 28px 16px;
  background: #f2f7ef;
  border: 1px solid rgba(74,140,50,0.15);
  border-radius: 16px;
  text-align: center;
  font-size: 0.82rem;
  font-weight: 600;
  color: #2d5a2d;
  transition: transform 0.25s, box-shadow 0.25s;
}
.queso-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  background: #e8f4e3;
}

@media (max-width: 900px) {
  .section-inner {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0 20px;
  }
  .section-inner.reverse { direction: ltr; }

  .section-quienes,
  .section-activity { padding: 60px 0; }

  .dual-video {
    grid-template-columns: 1fr;
  }

  .alim-cards {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .section-alimentacion { padding: 60px 20px; }
  .section-hacemos-intro { padding: 60px 20px; }

  .section-jarradilla { padding: 60px 20px; }
  .jarradilla-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
