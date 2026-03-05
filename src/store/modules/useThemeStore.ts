import { ref, watchEffect } from "vue";

const isDark = ref(localStorage.getItem("theme") !== "light");

watchEffect(() => {
  document.documentElement.classList.toggle("light", !isDark.value);
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
});

export function useThemeStore() {
  function toggle() {
    isDark.value = !isDark.value;
  }
  return { isDark, toggle };
}
