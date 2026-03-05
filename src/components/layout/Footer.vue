<script setup>
const year = new Date().getFullYear();

const navLinks = [
  { name: "Inicio", to: "/" },
  { name: "Sobre mí", to: "/sobre-mi" },
  { name: "Habilidades", to: "/habilidades" },
  { name: "Proyectos", to: "/proyectos" },
  { name: "Contacto", to: "/contacto" },
];

const socials = [
  { name: "GitHub", url: "https://github.com/brandoncabreradev" },
  { name: "LinkedIn", url: "https://www.linkedin.com/" },
];
</script>

<template>
  <footer
    style="
      border-top: 1px solid var(--border);
      background: var(--bg);
      margin-top: 0;
    "
  >
    <div class="container" style="padding-top: 56px; padding-bottom: 40px">
      <!-- Top row -->
      <div
        style="
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          margin-bottom: 48px;
        "
        id="footer-grid"
      >
        <!-- Brand -->
        <div>
          <RouterLink
            to="/"
            style="
              font-family: var(--font-mono);
              font-weight: 500;
              font-size: 16px;
              color: var(--text);
              text-decoration: none;
              display: inline-flex;
              align-items: center;
              gap: 4px;
              margin-bottom: 12px;
            "
          >
          </RouterLink>
        </div>

        <!-- Nav -->
        <div>
          <p
            style="
              font-family: var(--font-mono);
              font-size: 11px;
              color: var(--text-3);
              letter-spacing: 0.1em;
              text-transform: uppercase;
              margin-bottom: 16px;
            "
          >
            Navegación
          </p>
          <ul
            style="
              list-style: none;
              display: flex;
              flex-direction: column;
              gap: 10px;
            "
          >
            <li v-for="link in navLinks" :key="link.to">
              <RouterLink
                :to="link.to"
                style="
                  font-size: 13px;
                  font-weight: 500;
                  color: var(--text-2);
                  text-decoration: none;
                  transition: color 0.2s ease;
                "
                @mouseenter="(e) => (e.target.style.color = 'var(--text)')"
                @mouseleave="(e) => (e.target.style.color = 'var(--text-2)')"
                >{{ link.name }}</RouterLink
              >
            </li>
          </ul>
        </div>

        <!-- Social media -->
        <div>
          <p
            style="
              font-family: var(--font-mono);
              font-size: 11px;
              color: var(--text-3);
              letter-spacing: 0.1em;
              text-transform: uppercase;
              margin-bottom: 16px;
            "
          >
            Redes
          </p>
          <ul
            style="
              list-style: none;
              display: flex;
              flex-direction: column;
              gap: 10px;
            "
          >
            <li v-for="s in socials" :key="s.name">
              <a
                :href="s.url"
                target="_blank"
                rel="noopener noreferrer"
                style="
                  font-size: 13px;
                  font-weight: 500;
                  color: var(--text-2);
                  text-decoration: none;
                  transition: color 0.2s ease;
                  display: inline-flex;
                  align-items: center;
                  gap: 6px;
                "
                @mouseenter="
                  (e) => (e.currentTarget.style.color = 'var(--accent)')
                "
                @mouseleave="
                  (e) => (e.currentTarget.style.color = 'var(--text-2)')
                "
              >
                {{ s.name }}
                <span style="font-size: 11px; opacity: 0.5">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
        "
      >
        <p style="font-size: 12px; color: var(--text-3)">
          © {{ year }} Brandon Cabrera. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<style>
@media (min-width: 768px) {
  #footer-grid {
    grid-template-columns: 2fr 1fr 1fr !important;
  }
}
</style>
