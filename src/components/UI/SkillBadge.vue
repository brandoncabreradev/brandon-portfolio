<script setup>
import { ref, onMounted } from 'vue'
import { inView, animate } from 'motion'

const props = defineProps({
  skill: { type: Object, required: true },
  accentColor: { type: String, default: 'var(--accent)' },
  delay: { type: Number, default: 0 },
})

const barEl = ref(null)

onMounted(() => {
  if (barEl.value) {
    inView(barEl.value, () => {
      animate(
        barEl.value,
        { width: [`0%`, `${props.skill.level}%`] },
        { duration: 0.7, delay: props.delay, easing: [0.25, 1, 0.5, 1] },
      )
    })
  }
})
</script>

<template>
  <div>
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
      <span style="font-size: 13px; font-weight: 500; color: var(--text);">{{ skill.name }}</span>
      <span style="font-family: var(--font-mono); font-size: 11px; color: var(--text-3);">{{ skill.level }}%</span>
    </div>
    <div style="height: 4px; background: var(--bg-hover); border-radius: 99px; overflow: hidden;">
      <div
        ref="barEl"
        style="height: 100%; width: 0%; border-radius: 99px; transition: background 0.3s ease;"
        :style="{ background: accentColor }"
      ></div>
    </div>
  </div>
</template>
