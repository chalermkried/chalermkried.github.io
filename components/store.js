import create from 'zustand'
import { STORAGE_THEME } from 'const/'

function getLocalIsDarkMode() {
  // Note: this can be fault only in development since for prod, it's static a site.
  if (typeof window !== 'undefined') {
    return localStorage.getItem(STORAGE_THEME) === 'true'
  }

  return false
}

const useStore = create((set) => ({
  isDarkMode: getLocalIsDarkMode(),
  toggleIsDarkMode: (e) => {
    set((state) => {
      const newValue = !state.isDarkMode

      localStorage.setItem(STORAGE_THEME, newValue)

      return { isDarkMode: newValue }
    })

    e.target.blur()
    e.target.parentElement.blur()
    e.target.parentElement.parentElement.blur()
  },
}))

export default useStore
