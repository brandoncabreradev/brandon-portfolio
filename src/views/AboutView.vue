<script setup>
import { ref, onMounted } from "vue";
import { animate, inView, stagger } from "motion";

const headerEl = ref(null);
const imageEl = ref(null);
const contentEl = ref(null);
const eduEl = ref(null);
const valuesEl = ref(null);

const highlights = [
  { icon: "⚙️", text: "Especializado en Node.js, NestJS, Vue.js y React" },
  { icon: "🏢", text: "Desarrollo de sistemas de Recursos Humanos y Nómina" },
  { icon: "🧠", text: "Experiencia en arquitectura modular y APIs REST" },
  { icon: "🗄️", text: "Diseño y optimización de bases de datos SQL" },
  { icon: "🚀", text: "Enfoque en código limpio, escalable y mantenible" },
];

const education = [
  {
    degree: "Ingeniería en Ciencias y Sistemas",
    school: "Universidad de San Carlos de Guatemala",
    status: "En curso",
    icon: "🎓",
  },
  {
    degree: "Perito en Informática",
    school: "Fundación KINAL",
    status: "Completado",
    icon: "📋",
  },
];

const certifications = [
  { name: "CCNA", issuer: "Cisco", icon: "🌐" },
  {
    name: "Desarrollo de Aplicaciones Móviles",
    issuer: "Universidad Galileo",
    icon: "📱",
  },
];

onMounted(() => {
  if (headerEl.value)
    animate(
      headerEl.value,
      { opacity: [0, 1], y: [16, 0] },
      { duration: 0.5, easing: "ease-out" },
    );

  if (imageEl.value)
    inView(imageEl.value, () =>
      animate(
        imageEl.value,
        { opacity: [0, 1], x: [-24, 0] },
        { duration: 0.6, easing: "ease-out" },
      ),
    );

  if (contentEl.value)
    inView(contentEl.value, () =>
      animate(
        contentEl.value,
        { opacity: [0, 1], x: [24, 0] },
        { duration: 0.6, easing: "ease-out" },
      ),
    );

  if (eduEl.value)
    inView(eduEl.value, () => {
      const items = eduEl.value.querySelectorAll(".edu-item");
      animate(
        items,
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.4, delay: stagger(0.1), easing: "ease-out" },
      );
    });

  if (valuesEl.value)
    inView(valuesEl.value, () => {
      const cards = valuesEl.value.querySelectorAll(".value-card");
      animate(
        cards,
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.4, delay: stagger(0.08), easing: "ease-out" },
      );
    });
});
</script>

<template>
  <section class="section">
    <div class="container">
      <!-- Header -->
      <div ref="headerEl" style="opacity: 0; margin-bottom: 64px">
        <span class="section-tag">Quién soy</span>
        <h2 class="section-title">Sobre mí</h2>
      </div>

      <!-- 2-col grid -->
      <div
        style="
          display: grid;
          grid-template-columns: 1fr;
          gap: 64px;
          align-items: start;
          margin-bottom: 80px;
        "
        id="about-grid"
      >
        <!-- Photo column -->
        <div ref="imageEl" style="opacity: 0">
          <div style="position: relative; max-width: 380px">
            <div
              class="card"
              style="
                aspect-ratio: 4/5;
                overflow: hidden;
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--bg-card);
                position: relative;
              "
            >
              <!-- Initials placeholder -->
              <span
                style="
                  font-family: var(--font-sans);
                  font-weight: 800;
                  font-size: 80px;
                  color: var(--border-2);
                  user-select: none;
                "
                >BC</span
              >
              <!-- Bottom gradient -->
              <div
                style="
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  right: 0;
                  height: 45%;
                  background: linear-gradient(
                    to top,
                    var(--bg-card),
                    transparent
                  );
                  pointer-events: none;
                "
              ></div>
              <!-- Name overlay -->
              <div style="position: absolute; bottom: 24px; left: 24px">
                <p
                  style="font-weight: 700; font-size: 18px; color: var(--text)"
                >
                  Brandon Cabrera
                </p>
                <p
                  style="
                    font-family: var(--font-mono);
                    font-size: 12px;
                    color: var(--accent);
                    margin-top: 2px;
                  "
                >
                  Full Stack Developer
                </p>
              </div>
            </div>

            <!-- Accent ring -->
            <div
              style="
                position: absolute;
                top: -8px;
                right: -8px;
                bottom: -8px;
                left: -8px;
                border: 1px solid var(--border);
                border-radius: 20px;
                pointer-events: none;
                z-index: -1;
              "
            ></div>

            <!-- Location badge -->
            <div
              class="card"
              style="
                position: absolute;
                top: 16px;
                right: -16px;
                padding: 8px 14px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                gap: 8px;
              "
            >
              <span style="font-size: 14px">🇬🇹</span>
              <span
                style="font-size: 12px; font-weight: 600; color: var(--text)"
                >Guatemala</span
              >
            </div>
          </div>
        </div>

        <!-- Content column -->
        <div
          ref="contentEl"
          style="opacity: 0; display: flex; flex-direction: column; gap: 24px"
        >
          <p
            style="
              font-size: 20px;
              font-weight: 700;
              line-height: 1.5;
              color: var(--text);
            "
          >
            Full Stack Developer enfocado en
            <span style="color: var(--accent)">sistemas empresariales</span>
            y APIs escalables con arquitectura modular.
          </p>

          <div class="divider"></div>

          <p style="font-size: 15px; line-height: 1.8; color: var(--text-2)">
            Desarrollador Full Stack especializado en el desarrollo de software
            empresarial. Me especializo en
            <strong style="color: var(--text)"
              >Node.js, NestJS, Vue.js y MySQL</strong
            >, con experiencia en arquitectura modular, APIs REST y sistemas de
            Recursos Humanos y Nómina.
          </p>

          <!-- Highlights list -->
          <div style="display: flex; flex-direction: column; gap: 10px">
            <div
              v-for="item in highlights"
              :key="item.text"
              style="display: flex; align-items: flex-start; gap: 12px"
            >
              <span style="font-size: 15px; flex-shrink: 0; margin-top: 1px">{{
                item.icon
              }}</span>
              <p
                style="font-size: 14px; line-height: 1.6; color: var(--text-2)"
              >
                {{ item.text }}
              </p>
            </div>
          </div>

          <!-- Quick facts -->
          <div
            style="
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 12px;
              margin-top: 8px;
            "
          >
            <div class="card" style="padding: 16px; border-radius: 10px">
              <p
                style="
                  font-size: 11px;
                  color: var(--text-3);
                  margin-bottom: 4px;
                  font-family: var(--font-mono);
                "
              >
                Ubicación
              </p>
              <p style="font-weight: 600; font-size: 14px; color: var(--text)">
                Guatemala 🇬🇹
              </p>
            </div>
            <div class="card" style="padding: 16px; border-radius: 10px">
              <p
                style="
                  font-size: 11px;
                  color: var(--text-3);
                  margin-bottom: 4px;
                  font-family: var(--font-mono);
                "
              >
                Disponibilidad
              </p>
              <p
                style="font-weight: 600; font-size: 14px; color: var(--accent)"
              >
                Inmediata
              </p>
            </div>
            <div class="card" style="padding: 16px; border-radius: 10px">
              <p
                style="
                  font-size: 11px;
                  color: var(--text-3);
                  margin-bottom: 4px;
                  font-family: var(--font-mono);
                "
              >
                Modalidad
              </p>
              <p style="font-weight: 600; font-size: 14px; color: var(--text)">
                Remoto / Híbrido
              </p>
            </div>
            <div class="card" style="padding: 16px; border-radius: 10px">
              <p
                style="
                  font-size: 11px;
                  color: var(--text-3);
                  margin-bottom: 4px;
                  font-family: var(--font-mono);
                "
              >
                Idiomas
              </p>
              <p style="font-weight: 600; font-size: 14px; color: var(--text)">
                ES (Nativo) / EN
              </p>
            </div>
          </div>

          <div style="margin-top: 8px">
            <a href="#" class="btn-secondary" style="display: inline-flex">
              Descargar CV <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Education & Certifications -->
      <div class="divider" style="margin-bottom: 56px"></div>
      <div
        ref="eduEl"
        style="display: grid; grid-template-columns: 1fr; gap: 48px"
        id="edu-grid"
      >
        <!-- Education -->
        <div>
          <span
            class="section-tag"
            style="margin-bottom: 24px; display: inline-flex"
            >Educación</span
          >
          <div style="display: flex; flex-direction: column; gap: 12px">
            <div
              v-for="edu in education"
              :key="edu.degree"
              class="edu-item card"
              style="
                opacity: 0;
                padding: 20px 24px;
                border-radius: 12px;
                display: flex;
                align-items: flex-start;
                gap: 16px;
              "
            >
              <span style="font-size: 22px; flex-shrink: 0; margin-top: 2px">{{
                edu.icon
              }}</span>
              <div style="flex: 1">
                <p
                  style="
                    font-weight: 700;
                    font-size: 15px;
                    color: var(--text);
                    margin-bottom: 4px;
                  "
                >
                  {{ edu.degree }}
                </p>
                <p style="font-size: 13px; color: var(--text-2)">
                  {{ edu.school }}
                </p>
              </div>
              <span
                style="
                  font-family: var(--font-mono);
                  font-size: 11px;
                  padding: 3px 10px;
                  border-radius: 6px;
                  flex-shrink: 0;
                "
                :style="
                  edu.status === 'En curso'
                    ? 'background:rgba(110,231,183,0.1); color:var(--accent); border:1px solid rgba(110,231,183,0.2);'
                    : 'background:var(--bg-hover); color:var(--text-3); border:1px solid var(--border);'
                "
              >
                {{ edu.status }}
              </span>
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div>
          <span
            class="section-tag"
            style="margin-bottom: 24px; display: inline-flex"
            >Certificaciones</span
          >
          <div style="display: flex; flex-direction: column; gap: 12px">
            <div
              v-for="cert in certifications"
              :key="cert.name"
              class="edu-item card"
              style="
                opacity: 0;
                padding: 20px 24px;
                border-radius: 12px;
                display: flex;
                align-items: center;
                gap: 16px;
              "
            >
              <span style="font-size: 22px; flex-shrink: 0">{{
                cert.icon
              }}</span>
              <div>
                <p
                  style="
                    font-weight: 700;
                    font-size: 15px;
                    color: var(--text);
                    margin-bottom: 3px;
                  "
                >
                  {{ cert.name }}
                </p>
                <p style="font-size: 13px; color: var(--text-2)">
                  {{ cert.issuer }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@media (min-width: 768px) {
  #about-grid {
    grid-template-columns: 380px 1fr !important;
  }
  #edu-grid {
    grid-template-columns: 1fr 1fr !important;
  }
}
</style>
