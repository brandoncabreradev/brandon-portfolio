<script setup>
import { ref, onMounted } from "vue";
import { animate, inView, stagger } from "motion";
import SkillBadge from "@/components/ui/SkillBadge.vue";
import { skillGroups, techStack } from "@/data/skillGropus.ts";

const headerEl = ref(null);
const techEl = ref(null);
const groupEls = ref([]);

onMounted(() => {
  if (headerEl.value)
    animate(
      headerEl.value,
      { opacity: [0, 1], y: [16, 0] },
      { duration: 0.5, easing: "ease-out" },
    );

  if (techEl.value)
    inView(techEl.value, () => {
      const chips = techEl.value.querySelectorAll(".tech-chip");
      animate(
        chips,
        { opacity: [0, 1], scale: [0.85, 1] },
        { duration: 0.3, delay: stagger(0.04), easing: [0.34, 1.56, 0.64, 1] },
      );
    });

  groupEls.value.forEach((el, i) => {
    if (el)
      inView(el, () =>
        animate(
          el,
          { opacity: [0, 1], y: [24, 0] },
          { duration: 0.5, delay: i * 0.07, easing: "ease-out" },
        ),
      );
  });
});
</script>

<template>
  <section class="section">
    <div class="container">
      <!-- Header -->
      <div ref="headerEl" style="opacity: 0; margin-bottom: 64px">
        <span class="section-tag">Lo que sé hacer</span>
        <div
          style="
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            justify-content: space-between;
            gap: 16px;
          "
        >
          <h2 class="section-title">Habilidades</h2>
          <p
            style="
              font-size: 15px;
              color: var(--text-2);
              max-width: 400px;
              line-height: 1.7;
            "
          >
            Stack tecnológico centrado en el ecosistema JavaScript moderno.
          </p>
        </div>
      </div>

      <!-- Tech chips -->
      <div ref="techEl" style="margin-bottom: 64px">
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
          Stack tecnológico
        </p>
        <div style="display: flex; flex-wrap: wrap; gap: 8px">
          <div
            v-for="tech in techStack"
            :key="tech.name"
            class="tech-chip"
            style="
              opacity: 0;
              display: inline-flex;
              align-items: center;
              gap: 6px;
              padding: 6px 14px;
              background: var(--bg-card);
              border: 1px solid var(--border);
              border-radius: 8px;
              font-family: var(--font-mono);
              font-size: 12px;
              color: var(--text-2);
              cursor: default;
              transition: all 0.2s ease;
            "
            @mouseenter="
              (e) => {
                e.currentTarget.style.borderColor = tech.color;
                e.currentTarget.style.color = tech.color;
                e.currentTarget.style.background = 'var(--bg-hover)';
              }
            "
            @mouseleave="
              (e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--text-2)';
                e.currentTarget.style.background = 'var(--bg-card)';
              }
            "
          >
            <span
              :style="{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: tech.color,
                display: 'block',
                flexShrink: 0,
              }"
            ></span>
            {{ tech.name }}
          </div>
        </div>
      </div>

      <div class="divider" style="margin-bottom: 56px"></div>

      <!-- Skill groups grid -->
      <div
        style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        "
      >
        <div
          v-for="(group, i) in skillGroups"
          :key="group.id"
          :ref="(el) => (groupEls[i] = el)"
          class="card"
          style="opacity: 0; padding: 28px; border-radius: 14px"
        >
          <!-- Group header -->
          <div
            style="
              display: flex;
              align-items: center;
              gap: 10px;
              margin-bottom: 28px;
            "
          >
            <span
              :style="{
                width: '10px',
                height: '10px',
                borderRadius: '3px',
                background: group.color,
                display: 'block',
                flexShrink: 0,
              }"
            ></span>
            <h3 style="font-weight: 700; font-size: 15px; color: var(--text)">
              {{ group.label }}
            </h3>
            <span
              style="
                margin-left: auto;
                font-family: var(--font-mono);
                font-size: 11px;
                color: var(--text-3);
              "
              >{{ group.skills.length }}</span
            >
          </div>

          <!-- Skills -->
          <div style="display: flex; flex-direction: column; gap: 18px">
            <SkillBadge
              v-for="(skill, j) in group.skills"
              :key="skill.name"
              :skill="skill"
              :accent-color="group.color"
              :delay="j * 0.07"
            />
          </div>
        </div>
      </div>

      <!-- Footer note -->
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 56px;
          padding-top: 32px;
          border-top: 1px solid var(--border);
        "
      >
        <p style="font-size: 14px; color: var(--text-3)">
          Siempre aprendiendo. Siempre mejorando.
        </p>
        <RouterLink
          to="/proyectos"
          class="btn-secondary"
          style="display: inline-flex; font-size: 13px; padding: 9px 18px"
        >
          Ver proyectos →
        </RouterLink>
      </div>
    </div>
  </section>
</template>
