'use client'
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
const currentTheme = theme === "system" ? systemTheme : theme;

  return (
      <>
    {currentTheme === "dark" ? (
        <SunIcon
        role='button'
        className="h-8 w-8 ml-1 mt-1 cursor-pointer" stroke="white"
        onClick={() => setTheme('light') }/>
  ) : (
    <MoonIcon
    role='button' stroke="white"
    className="h-8 w-8 ml-1 mt-1 cursor-pointer "
    onClick={() => setTheme('dark')}/>
  )}
  </>
  )
};


export default DarkModeSwitch