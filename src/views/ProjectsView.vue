<script setup>
import { ref, computed, onMounted } from "vue";
import { animate, inView, stagger } from "motion";
import ProjectCard from "@/components/ui/ProjectCard.vue";
import { projects, categories } from "@/data/projects.ts";

const activeCategory = ref("all");
const headerEl = ref(null);
const gridEl = ref(null);

const filtered = computed(() =>
  activeCategory.value === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory.value),
);

onMounted(() => {
  if (headerEl.value)
    animate(
      headerEl.value,
      { opacity: [0, 1], y: [16, 0] },
      { duration: 0.5, easing: "ease-out" },
    );

  if (gridEl.value)
    inView(gridEl.value, () => {
      const cards = gridEl.value.querySelectorAll("article");
      animate(
        cards,
        { opacity: [0, 1], y: [24, 0] },
        { duration: 0.4, delay: stagger(0.08), easing: "ease-out" },
      );
    });
});
</script>

<template>
  <section class="section">
    <div class="container">
      <!-- Header -->
      <div ref="headerEl" style="opacity: 0; margin-bottom: 48px">
        <span class="section-tag">Lo que he construido</span>
        <div
          style="
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            justify-content: space-between;
            gap: 16px;
          "
        >
          <h2 class="section-title">Proyectos</h2>
          <p
            style="
              font-size: 15px;
              color: var(--text-2);
              max-width: 400px;
              line-height: 1.7;
            "
          >
            Una selección de proyectos que demuestran mis habilidades técnicas.
          </p>
        </div>
      </div>

      <!-- Filter tabs -->
      <div
        style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 40px"
      >
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="activeCategory = cat.id"
          :style="{
            padding: '8px 18px',
            borderRadius: '8px',
            border: '1px solid',
            fontFamily: 'var(--font-sans)',
            fontWeight: '600',
            fontSize: '13px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            background:
              activeCategory === cat.id ? 'var(--accent)' : 'transparent',
            color: activeCategory === cat.id ? '#0d0d0d' : 'var(--text-2)',
            borderColor:
              activeCategory === cat.id ? 'var(--accent)' : 'var(--border-2)',
          }"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Grid -->
      <div
        ref="gridEl"
        style="
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        "
      >
        <TransitionGroup name="proj" tag="div" style="display: contents">
          <ProjectCard
            v-for="(project, i) in filtered"
            :key="project.id"
            :project="project"
            :index="i"
          />
        </TransitionGroup>
      </div>

      <!-- Empty state -->
      <div
        v-if="filtered.length === 0"
        style="padding: 80px 0; text-align: center"
      >
        <p style="font-size: 16px; color: var(--text-3)">
          Sin proyectos en esta categoría.
        </p>
      </div>

      <!-- CTA footer -->
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
          ¿Tienes un proyecto en mente?
        </p>
        <RouterLink
          to="/contacto"
          class="btn-secondary"
          style="display: inline-flex; font-size: 13px; padding: 9px 18px"
        >
          Hablemos →
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.proj-enter-active,
.proj-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.proj-enter-from,
.proj-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>
