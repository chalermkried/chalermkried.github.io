import create from 'zustand'
import { STORAGE_THEME } from 'const/'

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

const useStore = create((set) => ({
  isDarkMode: getLocalIsDarkMode(),
  toggleIsDarkMode: () => {
    set((state) => {
      const newValue = !state.isDarkMode

      localStorage.setItem(STORAGE_THEME, newValue)

      return { isDarkMode: newValue }
    })
  },
}))

export default useStore
