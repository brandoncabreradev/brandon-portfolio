<script setup>
import { ref, onMounted } from "vue";
import { animate, inView, stagger } from "motion";

const headerEl = ref(null);
const infoEl = ref(null);

const contactLinks = [
  {
    label: "Email",
    value: "b.cabrera2013@gmail.com",
    href: "mailto:b.cabrera2013@gmail.com",
    icon: "✉",
    accent: "#6ee7b7",
  },
  {
    label: "GitHub",
    value: "github.com/brandoncabreradev",
    href: "https://github.com/brandoncabreradev",
    icon: "gh",
    accent: "#fb923c",
  },
];

onMounted(() => {
  if (headerEl.value)
    animate(
      headerEl.value,
      { opacity: [0, 1], y: [16, 0] },
      { duration: 0.5, easing: "ease-out" },
    );

  if (infoEl.value)
    inView(infoEl.value, () => {
      const items = infoEl.value.querySelectorAll(".info-row");
      animate(
        items,
        { opacity: [0, 1], x: [-16, 0] },
        { duration: 0.4, delay: stagger(0.1), easing: "ease-out" },
      );
    });
});
</script>

<template>
  <section class="section">
    <div class="container">
      <!-- Header -->
      <div ref="headerEl" style="opacity: 0; margin-bottom: 64px">
        <span class="section-tag">Hablemos</span>
        <h2 class="section-title">Contacto</h2>
      </div>

      <div
        style="display: grid; grid-template-columns: 1fr; gap: 64px"
        id="contact-grid"
      >
        <!-- Info column -->
        <div
          ref="infoEl"
          style="display: flex; flex-direction: column; gap: 32px"
        >
          <!-- Contact links -->
          <div style="display: flex; flex-direction: column; gap: 12px">
            <a
              v-for="link in contactLinks"
              :key="link.label"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="info-row card"
              style="
                opacity: 0;
                display: flex;
                align-items: center;
                gap: 16px;
                padding: 16px 20px;
                border-radius: 12px;
                text-decoration: none;
                transition:
                  border-color 0.2s ease,
                  transform 0.2s ease;
              "
              @mouseenter="
                (e) => {
                  e.currentTarget.style.borderColor = link.accent;
                  e.currentTarget.style.transform = 'translateX(4px)';
                }
              "
              @mouseleave="
                (e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }
              "
            >
              <div
                style="
                  width: 40px;
                  height: 40px;
                  border-radius: 10px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-weight: 700;
                  font-size: 13px;
                  flex-shrink: 0;
                "
                :style="{ background: link.accent + '18', color: link.accent }"
              >
                {{ link.icon }}
              </div>
              <div>
                <p
                  style="
                    font-size: 11px;
                    color: var(--text-3);
                    font-family: var(--font-mono);
                    margin-bottom: 2px;
                  "
                >
                  {{ link.label }}
                </p>
                <p
                  style="font-weight: 600; font-size: 14px; color: var(--text)"
                >
                  {{ link.value }}
                </p>
              </div>
              <span
                style="margin-left: auto; font-size: 16px; color: var(--text-3)"
                >↗</span
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@media (min-width: 768px) {
  #contact-grid {
    grid-template-columns: 1fr 1.4fr !important;
  }
  #form-row {
    grid-template-columns: 1fr 1fr !important;
  }
}
@media (max-width: 767px) {
  #form-row {
    grid-template-columns: 1fr !important;
  }
}
@keyframes ping {
  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
