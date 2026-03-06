<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { animate, stagger } from "motion";

const roles = [
  "Full Stack Developer",
  "NestJS & Node.js Dev",
  "Vue.js & TypeScript",
  "Docker & Git",
];
const currentRole = ref(0);
let roleTimer = null;

const wrapEl = ref(null);
const tagEl = ref(null);
const h1El = ref(null);
const roleEl = ref(null);
const descEl = ref(null);
const ctaEl = ref(null);
const statsEl = ref(null);
const cardEl = ref(null);

onMounted(() => {
  roleTimer = setInterval(() => {
    currentRole.value = (currentRole.value + 1) % roles.length;
  }, 3000);

  const els = [
    tagEl.value,
    h1El.value,
    roleEl.value,
    descEl.value,
    ctaEl.value,
    statsEl.value,
  ];
  els.forEach((el, i) => {
    if (el)
      animate(
        el,
        { opacity: [0, 1], y: [16, 0] },
        { duration: 0.5, delay: i * 0.1, easing: "ease-out" },
      );
  });
  if (cardEl.value) {
    animate(
      cardEl.value,
      { opacity: [0, 1], x: [24, 0] },
      { duration: 0.6, delay: 0.35, easing: "ease-out" },
    );
  }
});
onUnmounted(() => clearInterval(roleTimer));
</script>

<template>
  <section
    style="
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding-top: 68px;
    "
  >
    <div class="container" style="padding-top: 64px; padding-bottom: 64px">
      <div
        style="
          display: grid;
          grid-template-columns: 1fr;
          gap: 64px;
          align-items: center;
        "
        class="hero-grid"
      >
        <!-- Left column -->
        <div style="max-width: 600px">
          <!-- Tag -->
          <div ref="tagEl" style="opacity: 0; margin-bottom: 24px">
            <span class="section-tag">Disponible para trabajar</span>
          </div>

          <!-- Heading -->
          <h1
            ref="h1El"
            style="
              opacity: 0;
              font-family: var(--font-sans);
              font-weight: 800;
              font-size: clamp(2.4rem, 5vw, 3.8rem);
              line-height: 1.1;
              letter-spacing: -0.03em;
              color: var(--text);
              margin-bottom: 16px;
            "
          >
            Hola, soy<br />
            <span style="color: var(--accent)">Brandon Cabrera</span>
          </h1>

          <!-- Animated role -->
          <div
            ref="roleEl"
            style="
              opacity: 0;
              height: 32px;
              overflow: hidden;
              margin-bottom: 24px;
            "
          >
            <Transition
              enter-active-class="transition-all duration-400 ease-out"
              enter-from-class="opacity-0 translate-y-6"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-250 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-6"
              mode="out-in"
            >
              <p
                :key="currentRole"
                style="
                  font-family: var(--font-mono);
                  font-size: 15px;
                  color: var(--text-2);
                "
              >
                // {{ roles[currentRole] }}
              </p>
            </Transition>
          </div>

          <!-- Description -->
          <p
            ref="descEl"
            style="
              opacity: 0;
              font-size: 16px;
              line-height: 1.75;
              color: var(--text-2);
              margin-bottom: 36px;
              max-width: 480px;
            "
          >
            Desarrollador Full Stack especializado en sistemas empresariales,
            APIs escalables y arquitectura modular con Node.js, NestJS, Vue y
            React.
          </p>

          <!-- CTAs -->
          <div
            ref="ctaEl"
            style="
              opacity: 0;
              display: flex;
              flex-wrap: wrap;
              gap: 12px;
              margin-bottom: 56px;
            "
          >
            <RouterLink to="/proyectos" class="btn-primary">
              Ver proyectos <span aria-hidden="true">→</span>
            </RouterLink>
            <RouterLink to="/contacto" class="btn-secondary">
              Contactar
            </RouterLink>
          </div>

          <!-- Stats -->
          <div
            ref="statsEl"
            style="
              opacity: 0;
              display: flex;
              gap: 40px;
              padding-top: 32px;
              border-top: 1px solid var(--border);
            "
          >
            <div>
              <p
                style="
                  font-family: var(--font-sans);
                  font-weight: 800;
                  font-size: 28px;
                  color: var(--text);
                  line-height: 1;
                "
              >
                5+
              </p>
              <p style="font-size: 12px; color: var(--text-3); margin-top: 4px">
                Proyectos
              </p>
            </div>
            <div>
              <p
                style="
                  font-family: var(--font-sans);
                  font-weight: 800;
                  font-size: 28px;
                  color: var(--text);
                  line-height: 1;
                "
              >
                5+
              </p>
              <p style="font-size: 12px; color: var(--text-3); margin-top: 4px">
                Años exp.
              </p>
            </div>
            <div>
              <p
                style="
                  font-family: var(--font-sans);
                  font-weight: 800;
                  font-size: 28px;
                  color: var(--text);
                  line-height: 1;
                "
              >
                10+
              </p>
              <p style="font-size: 12px; color: var(--text-3); margin-top: 4px">
                Tecnologías
              </p>
            </div>
          </div>
        </div>

        <!-- Right column — code card (hidden on mobile) -->
        <div
          ref="cardEl"
          id="hero-card"
          style="opacity: 0; display: none"
          class="hero-card"
        >
          <div
            class="card"
            style="padding: 28px; border-radius: 16px; max-width: 420px"
          >
            <!-- Window chrome -->
            <div
              style="
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 24px;
              "
            >
              <span
                style="
                  width: 12px;
                  height: 12px;
                  border-radius: 50%;
                  background: #ff5f57;
                  display: block;
                "
              ></span>
              <span
                style="
                  width: 12px;
                  height: 12px;
                  border-radius: 50%;
                  background: #febc2e;
                  display: block;
                "
              ></span>
              <span
                style="
                  width: 12px;
                  height: 12px;
                  border-radius: 50%;
                  background: #28c840;
                  display: block;
                "
              ></span>
              <span
                style="
                  font-family: var(--font-mono);
                  font-size: 11px;
                  color: var(--text-3);
                  margin-left: 8px;
                "
                >brandon.json</span
              >
            </div>

            <!-- Code content -->
            <div
              style="
                font-family: var(--font-mono);
                font-size: 13px;
                line-height: 2;
              "
            >
              <p><span style="color: var(--text-3)">{</span></p>

              <p style="padding-left: 20px">
                <span style="color: var(--accent-2)">"name"</span
                ><span style="color: var(--text-3)">:</span>
                <span style="color: #fbbf24"> "Brandon Cabrera"</span
                ><span style="color: var(--text-3)">,</span>
              </p>

              <p style="padding-left: 20px">
                <span style="color: var(--accent-2)">"role"</span
                ><span style="color: var(--text-3)">:</span>
                <span style="color: #fbbf24"> "Full Stack Developer"</span
                ><span style="color: var(--text-3)">,</span>
              </p>

              <p style="padding-left: 20px">
                <span style="color: var(--accent-2)">"experience"</span
                ><span style="color: var(--text-3)">:</span>
                <span style="color: #fbbf24"> "4+ años"</span
                ><span style="color: var(--text-3)">,</span>
              </p>

              <p style="padding-left: 20px">
                <span style="color: var(--accent-2)">"stack"</span
                ><span style="color: var(--text-3)">: [</span>
              </p>

              <p style="padding-left: 40px">
                <span style="color: #fbbf24">"NestJS"</span
                ><span style="color: var(--text-3)">,</span>
                <span style="color: #fbbf24">"Node.js"</span
                ><span style="color: var(--text-3)">,</span>
                <span style="color: #fbbf24">"TypeScript"</span
                ><span style="color: var(--text-3)">,</span>
              </p>

              <p style="padding-left: 40px">
                <span style="color: #fbbf24">"Vue 3"</span
                ><span style="color: var(--text-3)">,</span>
                <span style="color: #fbbf24">"MySQL"</span>
              </p>

              <p style="padding-left: 20px">
                <span style="color: var(--text-3)">],</span>
              </p>

              <p style="padding-left: 20px">
                <span style="color: var(--accent-2)">"tools"</span
                ><span style="color: var(--text-3)">: [</span>
                <span style="color: #fbbf24">"Docker"</span
                ><span style="color: var(--text-3)">,</span>
                <span style="color: #fbbf24">"Git"</span
                ><span style="color: var(--text-3)">,</span>
                <span style="color: #fbbf24">"Postman"</span
                ><span style="color: var(--text-3)">]</span>
              </p>

              <p><span style="color: var(--text-3)">}</span></p>
            </div>

            <!-- Cursor -->
            <div
              style="
                margin-top: 16px;
                display: flex;
                align-items: center;
                gap: 4px;
              "
            >
              <span
                style="
                  font-family: var(--font-mono);
                  font-size: 13px;
                  color: var(--text-3);
                "
                >▶</span
              >
              <span
                style="
                  display: inline-block;
                  width: 8px;
                  height: 16px;
                  background: var(--accent);
                  border-radius: 1px;
                  animation: blink 1.2s step-end infinite;
                "
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@media (min-width: 1024px) {
  #hero-card {
    display: block !important;
  }
  section > .container > div {
    grid-template-columns: 1fr 1fr !important;
  }
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@keyframes pulse-dot {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.85);
  }
}
</style>
