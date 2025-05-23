import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useDarkModeStore = defineStore('darkMode', () => {
  const darkMode = useStorage('darkMode', false)

  // Watch for changes and update the class
  watch(
    darkMode,
    (val) => {
      document.documentElement.classList.toggle('dark', val)
    },
    { immediate: true }
  )

  function toggleDarkMode() {
    darkMode.value = !darkMode.value
  }

  return { darkMode, toggleDarkMode }
})
