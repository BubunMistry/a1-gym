"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Trainers", href: "#trainers" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-[#2f7df9]/20 shadow-lg rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="#home" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="A1 Gym Tech Logo" 
              className="w-12 h-12 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                const fallback = e.currentTarget.nextElementSibling as HTMLElement
                if (fallback) fallback.classList.remove('hidden')
              }}
            />
            <div className="w-12 h-12 bg-gradient-to-br from-[#2f7df9] to-[#5ba0ff] rounded-xl flex items-center justify-center shadow-lg shadow-[#2f7df9]/30 hidden">
              <span className="text-white font-bold text-sm">A1</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-foreground text-sm font-medium rounded-xl transition-all duration-300 group hover:text-[#2f7df9]"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-[#2f7df9]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm group-hover:blur-none"></span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2f7df9] to-[#5ba0ff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-xl bg-[#2f7df9]/10 hover:bg-[#2f7df9]/20 text-[#2f7df9] transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Button 
              className="bg-[#2f7df9] hover:bg-[#2568e6] text-white rounded-2xl px-6 py-2.5 font-semibold shadow-lg shadow-[#2f7df9]/30 hover:shadow-xl hover:shadow-[#2f7df9]/40 transition-all duration-300 hover:scale-105"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Join Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-xl bg-[#2f7df9]/10 hover:bg-[#2f7df9]/20 text-[#2f7df9] transition-all"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-xl hover:bg-[#2f7df9]/10 text-foreground transition-all">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-[#2f7df9]/20 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-foreground hover:text-[#2f7df9] hover:bg-[#2f7df9]/10 rounded-xl transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              className="w-full bg-[#2f7df9] hover:bg-[#2568e6] text-white rounded-2xl font-semibold mt-4 shadow-lg shadow-[#2f7df9]/30"
              onClick={() => {
                setIsOpen(false)
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Join Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
