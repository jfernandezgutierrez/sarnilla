<template>
  <footer class="sarnilla-footer">
    <div class="footer-inner">

      <!-- Brand column -->
      <div class="footer-brand">
        <div class="footer-logo">
          <v-icon size="28" color="#7ecf5f">mdi-barn</v-icon>
          <span class="footer-brand-name">La Sarnilla</span>
        </div>
        <p class="footer-tagline">
          Ganadería familiar en el corazón de los Montes Pasiegos de Cantabria. Tradición, calidad y compromiso desde hace tres generaciones.
        </p>
        <a
          href="https://www.instagram.com/lasarnilla/"
          target="_blank"
          class="footer-social"
        >
          <v-icon size="18" color="#7ecf5f">mdi-instagram</v-icon>
          <span>@lasarnilla</span>
        </a>
      </div>

      <!-- Divider -->
      <div class="footer-vdivider"></div>

      <!-- Contact column -->
      <div class="footer-contact">
        <h4 class="footer-col-title">Contacto</h4>
        <div class="footer-contact-items">
          <a href="tel:+34696659284" class="footer-contact-item">
            <div class="contact-icon-wrap">
              <v-icon size="16" color="#7ecf5f">mdi-phone</v-icon>
            </div>
            <span>+34 696 659 284</span>
          </a>
          <a href="mailto:javi.lasarnilla@yahoo.es" class="footer-contact-item">
            <div class="contact-icon-wrap">
              <v-icon size="16" color="#7ecf5f">mdi-email</v-icon>
            </div>
            <span>javi.lasarnilla@yahoo.es</span>
          </a>
          <div class="footer-contact-item">
            <div class="contact-icon-wrap">
              <v-icon size="16" color="#7ecf5f">mdi-map-marker</v-icon>
            </div>
            <span>Valle de Villacarriedo, Cantabria</span>
          </div>
        </div>
      </div>

    </div>

    <!-- Bottom bar -->
    <div class="footer-bottom">
      <span>© {{ new Date().getFullYear() }} SAT La Sarnilla · Todos los derechos reservados</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
.sarnilla-footer {
  background: linear-gradient(135deg, #0d1f0d 0%, #1a3a1a 100%);
  color: rgba(255,255,255,0.8);
  border-top: 1px solid rgba(126,207,95,0.15);
}

.footer-inner {
  max-width: 1160px;
  margin: 0 auto;
  padding: 64px 32px 40px;
  display: flex;
  align-items: flex-start;
  gap: 64px;
}

/* ── BRAND ── */
.footer-brand {
  flex: 1.4;
}
.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}
.footer-brand-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.3px;
}
.footer-tagline {
  font-size: 0.88rem;
  line-height: 1.75;
  color: rgba(255,255,255,0.5);
  max-width: 340px;
  margin-bottom: 24px;
}
.footer-social {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  border-radius: 50px;
  border: 1px solid rgba(126,207,95,0.3);
  background: rgba(126,207,95,0.08);
  color: #a8e88a;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s;
}
.footer-social:hover {
  background: rgba(126,207,95,0.18);
  border-color: rgba(126,207,95,0.5);
  color: #c8f5a8;
}

/* ── DIVIDER ── */
.footer-vdivider {
  width: 1px;
  align-self: stretch;
  background: rgba(255,255,255,0.08);
}

/* ── CONTACT ── */
.footer-contact {
  flex: 1;
}
.footer-col-title {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
  margin-bottom: 20px;
}
.footer-contact-items {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.footer-contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: rgba(255,255,255,0.7);
  font-size: 0.9rem;
  transition: color 0.2s;
}
a.footer-contact-item:hover {
  color: #a8e88a;
}
.contact-icon-wrap {
  width: 32px;
  height: 32px;
  background: rgba(126,207,95,0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* ── BOTTOM BAR ── */
.footer-bottom {
  max-width: 1160px;
  margin: 0 auto;
  padding: 20px 32px;
  border-top: 1px solid rgba(255,255,255,0.07);
  font-size: 0.78rem;
  color: rgba(255,255,255,0.3);
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    gap: 36px;
    padding: 48px 20px 32px;
  }
  .footer-vdivider { display: none; }
  .footer-bottom { padding: 20px; }
}
</style>
