<script setup>
defineProps({
  project: { type: Object, required: true },
  index:   { type: Number, default: 0 },
})
</script>

<template>
  <article
    class="card"
    style="
      border-radius: 14px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: border-color 0.2s ease, transform 0.2s ease;
    "
    @mouseenter="(e) => (e.currentTarget.style.transform = 'translateY(-4px)')"
    @mouseleave="(e) => (e.currentTarget.style.transform = 'translateY(0)')"
  >
    <!-- Image / placeholder -->
    <div
      style="
        height: 180px;
        background: var(--bg);
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
      "
    >
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.title"
        :style="{
          width: '100%',
          height: '100%',
          objectFit:
            project.title === 'Tu gimnasio en la palma de tu mano'
              ? 'contain'
              : 'cover',
        }"
      />
      <span
        v-else
        style="
          font-family: var(--font-mono);
          font-size: 32px;
          font-weight: 700;
          color: var(--border-2);
          user-select: none;
          letter-spacing: -0.04em;
        "
      >
        {{ project.title.slice(0, 2).toUpperCase() }}
      </span>

      <!-- Featured badge -->
      <span
        v-if="project.featured"
        style="
          position: absolute;
          top: 12px;
          right: 12px;
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 6px;
          background: color-mix(in srgb, var(--accent) 12%, transparent);
          color: var(--accent);
          border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        "
      >
        Destacado
      </span>
    </div>

    <!-- Body -->
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 12px; flex: 1">
      <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 8px">
        <h3
          style="
            font-family: var(--font-sans);
            font-weight: 700;
            font-size: 17px;
            color: var(--text);
            line-height: 1.3;
          "
        >
          {{ project.title }}
        </h3>
        <!-- Links -->
        <div style="display: flex; gap: 8px; flex-shrink: 0">
          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`Ver ${project.title} en vivo`"
            style="
              color: var(--text-2);
              transition: color 0.2s ease;
              display: flex;
              align-items: center;
            "
            @mouseenter="(e) => (e.currentTarget.style.color = 'var(--accent)')"
            @mouseleave="(e) => (e.currentTarget.style.color = 'var(--text-2)')"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
          <a
            v-if="project.repoUrl"
            :href="project.repoUrl"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`Ver código de ${project.title}`"
            style="
              color: var(--text-2);
              transition: color 0.2s ease;
              display: flex;
              align-items: center;
            "
            @mouseenter="(e) => (e.currentTarget.style.color = 'var(--accent)')"
            @mouseleave="(e) => (e.currentTarget.style.color = 'var(--text-2)')"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
        </div>
      </div>

      <p style="font-size: 13px; line-height: 1.7; color: var(--text-2); flex: 1">
        {{ project.description }}
      </p>

      <!-- Note -->
      <p v-if="project.note" style="font-family: var(--font-mono); font-size: 11px; color: var(--text-3)">
        // {{ project.note }}
        <a
          v-if="project.noteUrl"
          :href="project.noteUrl"
          target="_blank"
          rel="noopener noreferrer"
          style="color: var(--accent); text-decoration: underline; text-underline-offset: 2px; transition: opacity 0.2s ease"
          @mouseenter="(e) => (e.currentTarget.style.opacity = '0.7')"
          @mouseleave="(e) => (e.currentTarget.style.opacity = '1')"
        >↗</a>
      </p>

      <!-- Tags -->
      <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px">
        <span
          v-for="tag in project.tags"
          :key="tag"
          style="
            font-family: var(--font-mono);
            font-size: 11px;
            padding: 3px 10px;
            border-radius: 6px;
            background: color-mix(in srgb, var(--accent) 8%, transparent);
            color: var(--accent);
            border: 1px solid color-mix(in srgb, var(--accent) 18%, transparent);
          "
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </article>
</template>
