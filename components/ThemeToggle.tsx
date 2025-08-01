'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Image
          src="/icons/moon.svg"
          alt="Dark mode"
          width={24}
          height={24}
          className="h-6 w-6"
        />
      ) : (
        <Image
          src="/icons/sun.svg"
          alt="Light mode"
          width={24}
          height={24}
          className="h-6 w-6"
        />
      )}
    </button>
  )
}