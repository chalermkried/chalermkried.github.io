import { STORAGE_THEME } from '@/const'
import { create } from 'zustand'

function getLocalIsDarkMode() {
  // Note: this can be false only in development since for prod, it's static a site.
  if (typeof window !== 'undefined') {
    const localConfig = localStorage.getItem(STORAGE_THEME)

    if (localConfig) {
      return localConfig === 'true'
    }

    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return true
    }
  }

  return false
}

export const useStore = create<{
  isDarkMode: boolean
  toggleIsDarkMode: () => void
}>((set) => ({
  isDarkMode: getLocalIsDarkMode(),
  toggleIsDarkMode: () => {
    set((state) => {
      const newValue = !state.isDarkMode

      localStorage.setItem(STORAGE_THEME, `${newValue}`)

      return { isDarkMode: newValue }
    })
  },
}))
