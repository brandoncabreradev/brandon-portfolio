<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <main class="not-found">
    <div class="not-found__content">
      <span class="not-found__code">404</span>
      <h1 class="not-found__title">Página no encontrada</h1>
      <p class="not-found__desc">
        La ruta que buscas no existe o fue movida.
      </p>
      <button class="btn-primary" @click="router.push('/')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 12H5M12 5l-7 7 7 7"/>
        </svg>
        Volver al inicio
      </button>
    </div>
  </main>
</template>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg);
  padding: 24px;
}

.not-found__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
}

.not-found__code {
  font-family: var(--font-mono);
  font-size: clamp(6rem, 20vw, 10rem);
  font-weight: 700;
  line-height: 1;
  color: var(--accent);
  opacity: 0.15;
  letter-spacing: -0.04em;
  user-select: none;
}

.not-found__title {
  font-family: var(--font-sans);
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.02em;
  margin-top: -48px;
}

.not-found__desc {
  font-family: var(--font-sans);
  font-size: 15px;
  color: var(--text-2);
  max-width: 320px;
  line-height: 1.6;
}
</style>
