<script setup>
import { ref, onMounted } from "vue";
import { animate, inView, stagger } from "motion";

const headerEl = ref(null);
const infoEl = ref(null);
const formEl = ref(null);

const form = ref({ name: "", email: "", subject: "", message: "" });
const sending = ref(false);
const sent = ref(false);

const contactLinks = [
  {
    label: "Email",
    value: "b.cabrera2013@email.com",
    href: "mailto:b.cabrera2013@email.com",
    icon: "✉",
    accent: "#6ee7b7",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/brandon",
    href: "https://www.linkedin.com/",
    icon: "in",
    accent: "#818cf8",
  },
  {
    label: "GitHub",
    value: "github.com/brandoncabreradev",
    href: "https://github.com/brandoncabreradev",
    icon: "gh",
    accent: "#fb923c",
  },
];

async function submit() {
  sending.value = true;
  await new Promise((r) => setTimeout(r, 1400));
  sending.value = false;
  sent.value = true;
  form.value = { name: "", email: "", subject: "", message: "" };
}

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

  if (formEl.value)
    inView(formEl.value, () =>
      animate(
        formEl.value,
        { opacity: [0, 1], x: [24, 0] },
        { duration: 0.6, easing: "ease-out" },
      ),
    );
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

        <!-- Form column -->
        <div ref="formEl" style="opacity: 0">
          <!-- Success -->
          <div
            v-if="sent"
            class="card"
            style="
              border-radius: 16px;
              padding: 48px;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 20px;
              text-align: center;
              min-height: 400px;
              justify-content: center;
            "
          >
            <div
              style="
                width: 56px;
                height: 56px;
                border-radius: 14px;
                background: var(--accent);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                color: #0d0d0d;
                font-weight: 700;
              "
            >
              ✓
            </div>
            <div>
              <h3
                style="
                  font-weight: 700;
                  font-size: 20px;
                  color: var(--text);
                  margin-bottom: 8px;
                "
              >
                ¡Mensaje enviado!
              </h3>
              <p style="font-size: 14px; color: var(--text-2)">
                Te responderé lo antes posible.
              </p>
            </div>
            <button
              @click="sent = false"
              class="btn-secondary"
              style="font-size: 13px; padding: 9px 20px"
            >
              Enviar otro
            </button>
          </div>

          <!-- Form -->
          <form
            v-else
            @submit.prevent="submit"
            class="card"
            style="
              border-radius: 16px;
              padding: 32px;
              display: flex;
              flex-direction: column;
              gap: 20px;
            "
          >
            <div
              style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px"
              id="form-row"
            >
              <!-- Name -->
              <div style="display: flex; flex-direction: column; gap: 6px">
                <label
                  for="name"
                  style="
                    font-size: 12px;
                    font-weight: 600;
                    color: var(--text-2);
                    font-family: var(--font-mono);
                  "
                  >Nombre</label
                >
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  style="
                    background: var(--bg);
                    border: 1px solid var(--border);
                    border-radius: 8px;
                    padding: 11px 14px;
                    font-size: 14px;
                    color: var(--text);
                    font-family: var(--font-sans);
                    outline: none;
                    transition: border-color 0.2s ease;
                  "
                  @focus="(e) => (e.target.style.borderColor = 'var(--accent)')"
                  @blur="(e) => (e.target.style.borderColor = 'var(--border)')"
                />
              </div>
              <!-- Email -->
              <div style="display: flex; flex-direction: column; gap: 6px">
                <label
                  for="email"
                  style="
                    font-size: 12px;
                    font-weight: 600;
                    color: var(--text-2);
                    font-family: var(--font-mono);
                  "
                  >Email</label
                >
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  style="
                    background: var(--bg);
                    border: 1px solid var(--border);
                    border-radius: 8px;
                    padding: 11px 14px;
                    font-size: 14px;
                    color: var(--text);
                    font-family: var(--font-sans);
                    outline: none;
                    transition: border-color 0.2s ease;
                  "
                  @focus="(e) => (e.target.style.borderColor = 'var(--accent)')"
                  @blur="(e) => (e.target.style.borderColor = 'var(--border)')"
                />
              </div>
            </div>

            <!-- Subject -->
            <div style="display: flex; flex-direction: column; gap: 6px">
              <label
                for="subject"
                style="
                  font-size: 12px;
                  font-weight: 600;
                  color: var(--text-2);
                  font-family: var(--font-mono);
                "
                >Asunto</label
              >
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                required
                placeholder="¿De qué quieres hablar?"
                style="
                  background: var(--bg);
                  border: 1px solid var(--border);
                  border-radius: 8px;
                  padding: 11px 14px;
                  font-size: 14px;
                  color: var(--text);
                  font-family: var(--font-sans);
                  outline: none;
                  transition: border-color 0.2s ease;
                "
                @focus="(e) => (e.target.style.borderColor = 'var(--accent)')"
                @blur="(e) => (e.target.style.borderColor = 'var(--border)')"
              />
            </div>

            <!-- Message -->
            <div style="display: flex; flex-direction: column; gap: 6px">
              <label
                for="message"
                style="
                  font-size: 12px;
                  font-weight: 600;
                  color: var(--text-2);
                  font-family: var(--font-mono);
                "
                >Mensaje</label
              >
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="6"
                placeholder="Cuéntame sobre tu proyecto o consulta..."
                style="
                  background: var(--bg);
                  border: 1px solid var(--border);
                  border-radius: 8px;
                  padding: 11px 14px;
                  font-size: 14px;
                  color: var(--text);
                  font-family: var(--font-sans);
                  outline: none;
                  resize: none;
                  transition: border-color 0.2s ease;
                  line-height: 1.6;
                "
                @focus="(e) => (e.target.style.borderColor = 'var(--accent)')"
                @blur="(e) => (e.target.style.borderColor = 'var(--border)')"
              />
            </div>

            <button
              type="submit"
              :disabled="sending"
              class="btn-primary"
              style="
                justify-content: center;
                padding: 13px;
                font-size: 14px;
                border-radius: 10px;
                opacity: 1;
              "
              :style="{
                opacity: sending ? '0.6' : '1',
                cursor: sending ? 'not-allowed' : 'pointer',
              }"
            >
              {{ sending ? "Enviando..." : "Enviar mensaje →" }}
            </button>
          </form>
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
