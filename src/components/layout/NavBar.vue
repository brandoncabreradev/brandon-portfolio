<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { animate } from "motion";
import { useThemeStore } from "@/store";

const { isDark, toggle } = useThemeStore();
const route = useRoute();
const scrolled = ref(false);
const menuOpen = ref(false);
const navEl = ref(null);

const links = [
  { name: "Inicio", to: "/" },
  { name: "Sobre mí", to: "/sobre-mi" },
  { name: "Habilidades", to: "/habilidades" },
  { name: "Proyectos", to: "/proyectos" },
  { name: "Contacto", to: "/contacto" },
];

function onScroll() {
  scrolled.value = window.scrollY > 20;
}
function closeMenu() {
  menuOpen.value = false;
}

onMounted(() => {
  window.addEventListener("scroll", onScroll);
  if (navEl.value) {
    animate(
      navEl.value,
      { opacity: [0, 1], y: [-12, 0] },
      { duration: 0.5, easing: "ease-out" },
    );
  }
});
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <header
    ref="navEl"
    :style="{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'background 0.3s ease, border-color 0.3s ease',
      background: scrolled ? 'var(--bg-nav)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled
        ? '1px solid var(--border)'
        : '1px solid transparent',
    }"
  >
    <div class="nav-container">
      <!-- Left: vacío para balancear -->
      <div class="nav-side"></div>

      <!-- Center: links -->
      <nav class="nav-center md-nav">
        <ul>
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              active-class=""
              exact-active-class=""
              :style="{
                color:
                  route.path === link.to ? 'var(--accent)' : 'var(--text-2)',
              }"
              @mouseenter="
                (e) => {
                  if (route.path !== link.to)
                    e.target.style.color = 'var(--text)';
                }
              "
              @mouseleave="
                (e) => {
                  if (route.path !== link.to)
                    e.target.style.color = 'var(--text-2)';
                }
              "
              >{{ link.name }}</RouterLink
            >
          </li>
        </ul>
      </nav>

      <!-- Right: theme toggle + hamburger -->
      <div class="nav-side nav-right">
        <button
          @click="toggle"
          :aria-label="isDark ? 'Modo claro' : 'Modo oscuro'"
          class="theme-btn"
          :class="{ 'theme-btn--light': !isDark }"
        >
          <svg
            class="theme-btn__moon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          <svg
            class="theme-btn__sun"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        </button>

        <button
          :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'"
          @click="menuOpen = !menuOpen"
          class="hamburger"
          id="hamburger"
        >
          <span
            :style="{
              transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
            }"
          />
          <span :style="{ opacity: menuOpen ? '0' : '1' }" />
          <span
            :style="{
              transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
            }"
          />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="menuOpen" class="mobile-menu">
        <ul>
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              @click="closeMenu"
              active-class=""
              exact-active-class=""
              :style="{
                color:
                  route.path === link.to ? 'var(--accent)' : 'var(--text-2)',
              }"
              >{{ link.name }}</RouterLink
            >
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* ── Layout ─────────────────────────────────────── */
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 68px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}

@media (min-width: 768px) {
  .nav-container {
    padding: 0 48px;
  }
}
@media (min-width: 1024px) {
  .nav-container {
    padding: 0 64px;
  }
}

.nav-side {
  display: flex;
  align-items: center;
}

.nav-right {
  justify-content: flex-end;
  gap: 12px;
}

/* ── Desktop nav ─────────────────────────────────── */
.nav-center {
  display: none;
  justify-content: center;
}

.nav-center ul {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
}

.nav-center a {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}

@media (min-width: 768px) {
  .nav-center {
    display: flex;
  }
  #hamburger {
    display: none !important;
  }
}

/* ── Theme button ────────────────────────────────── */
.theme-btn {
  position: relative;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid var(--border-2);
  border-radius: 10px;
  cursor: pointer;
  color: var(--text-2);
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
  overflow: hidden;
}

.theme-btn:hover {
  color: var(--accent);
  border-color: var(--accent);
  background: color-mix(in srgb, var(--accent) 8%, transparent);
}

.theme-btn__moon,
.theme-btn__sun {
  position: absolute;
  transition:
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.3s ease;
}

.theme-btn .theme-btn__moon {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}
.theme-btn .theme-btn__sun {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}
.theme-btn--light .theme-btn__moon {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
}
.theme-btn--light .theme-btn__sun {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}

/* ── Hamburger ───────────────────────────────────── */
.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: all 0.3s;
}

/* ── Mobile menu ─────────────────────────────────── */
.mobile-menu {
  background: var(--bg-card);
  border-bottom: 1px solid var(--border);
  padding: 24px;
}

.mobile-menu ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mobile-menu a {
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
}
</style>
