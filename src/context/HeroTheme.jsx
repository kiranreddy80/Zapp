import { createContext, useContext, useEffect, useMemo, useState } from 'react'

/**
 * Tells the fixed navbar whether the hero it is currently floating over is
 * light or dark, so it can pick legible text colours before the user scrolls.
 *
 * Defaults to 'dark' because every inner page uses a dark <PageHero>. The
 * homepage opts into 'light' via useHeroTheme().
 */
const HeroThemeContext = createContext({ theme: 'dark', setTheme: () => {} })

export function HeroThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')
  const value = useMemo(() => ({ theme, setTheme }), [theme])
  return <HeroThemeContext.Provider value={value}>{children}</HeroThemeContext.Provider>
}

/** Read the current hero theme (used by the navbar). */
export function useHeroThemeValue() {
  return useContext(HeroThemeContext).theme
}

/**
 * Declare the hero theme for the page that mounts this. Resets to 'dark' on
 * unmount so navigating away cannot leave the navbar mis-coloured.
 */
export function useHeroTheme(theme) {
  const { setTheme } = useContext(HeroThemeContext)

  useEffect(() => {
    setTheme(theme)
    return () => setTheme('dark')
  }, [theme, setTheme])
}
