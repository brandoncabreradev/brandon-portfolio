<script setup>
import { ref, onMounted } from "vue";
import meImg from "@/assets/img/Me.png";
import cvPdf from "@/assets/Document/CV BC.pdf";
import { animate, inView, stagger } from "motion";

const headerEl = ref(null);
const imageEl = ref(null);
const contentEl = ref(null);
const eduEl = ref(null);
const valuesEl = ref(null);

const highlights = [
  {
    text: "Especializado en Node.js, NestJS, Vue.js",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m17 20.66-1-1.73"/><path d="M11 10.27 7 3.34"/><path d="m20.66 17-1.73-1"/><path d="m3.34 7 1.73 1"/><path d="M14 12h8"/><path d="M2 12h2"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m17 3.34-1 1.73"/><path d="m11 13.73-4 6.93"/></svg>`,
  },
  {
    text: "Desarrollo de sistemas competitivos y escalables",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  },
  {
    text: "Experiencia en arquitectura modular y APIs REST",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="6" height="6" rx="1"/><rect x="16" y="3" width="6" height="6" rx="1"/><rect x="9" y="15" width="6" height="6" rx="1"/><path d="M5 9v4c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V9"/><path d="M12 14v1"/></svg>`,
  },
  {
    text: "Diseño y optimización de bases de datos SQL",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>`,
  },
  {
    text: "Enfoque en código limpio, escalable y mantenible",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  },
];

const education = [
  {
    degree: "Ingeniería en Ciencias y Sistemas",
    school: "Universidad de San Carlos de Guatemala",
    status: "En curso",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  },
  {
    degree: "Perito en Informática",
    school: "Fundación KINAL",
    status: "Completado",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="17" x="5" y="2" rx="2"/><path d="M9 7h6"/><path d="M9 11h6"/><path d="M9 15h4"/></svg>`,
  },
];

const certifications = [
  {
    name: "CCNA",
    issuer: "Cisco",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  },
  {
    name: "Desarrollo de Aplicaciones Móviles",
    issuer: "Universidad Galileo",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="10" height="18" x="7" y="3" rx="2"/><path d="M11 18h2"/></svg>`,
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
              <!-- Photo -->
              <img
                :src="meImg"
                alt="Brandon Cabrera"
                style="
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  object-position: center top;
                "
              />
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
            Full Stack Developer enfocado en el
            <span style="color: var(--accent)"
              >desarrollo de software empresariales</span
            >
            y APIs escalables.
          </p>

          <div class="divider"></div>

          <p style="font-size: 15px; line-height: 1.8; color: var(--text-2)">
            Trabajo principalmente con
            <strong style="color: var(--text)">Node.js, NestJS y Vue.js</strong
            >, construyendo
            <strong style="color: var(--text)">APIs robustas <br /></strong> y
            soluciones efectivas. Sobre bases de datos
            <strong style="color: var(--text)">(MySQL/PostgreSQL)</strong>. Me
            enfoco en arquitecturas bien estructuradas
            <strong style="color: var(--text)">(modular/microservicios)</strong
            >, el rendimiento y un código limpio que sea fácil de mantener y
            escalar.
          </p>

          <!-- Highlights list -->
          <div style="display: flex; flex-direction: column; gap: 10px">
            <div
              v-for="item in highlights"
              :key="item.text"
              style="display: flex; align-items: flex-start; gap: 12px"
            >
              <span
                v-html="item.svg"
                style="
                  flex-shrink: 0;
                  margin-top: 2px;
                  color: var(--accent);
                  display: flex;
                  align-items: center;
                "
              ></span>
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
                Modalidad
              </p>
              <p style="font-weight: 600; font-size: 14px; color: var(--text)">
                Remoto / Híbrido
              </p>
            </div>
          </div>

          <div style="margin-top: 8px">
            <a
              :href="cvPdf"
              class="btn-secondary"
              style="display: inline-flex"
              target="_blank"
              rel="noopener noreferrer"
              download="Brandon-Cabrera-CV.pdf"
            >
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
              <span
                v-html="edu.svg"
                style="
                  flex-shrink: 0;
                  margin-top: 2px;
                  color: var(--accent);
                  display: flex;
                  align-items: center;
                "
              ></span>
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
              <span
                v-html="cert.svg"
                style="
                  flex-shrink: 0;
                  color: var(--accent);
                  display: flex;
                  align-items: center;
                "
              ></span>
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
