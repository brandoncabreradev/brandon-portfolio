<script setup>
import NavBar from "@/components/layout/NavBar.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col" style="background: var(--bg); color: var(--text); transition: background 0.3s ease, color 0.3s ease">
    <NavBar />
    <main class="flex-1">
      <RouterView v-slot="{ Component, route }">
        <Transition :name="'page'" mode="out-in" appear>
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>
    <Footer />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(16px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
