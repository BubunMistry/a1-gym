"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react"

export default function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-[#2f7df9]/20 via-[#5ba0ff]/30 to-[#2f7df9]/20 dark:from-[#2f7df9]/30 dark:via-[#5ba0ff]/40 dark:to-[#2f7df9]/30 border-t border-[#2f7df9]/30 text-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/logo.png" 
                alt="A1 Gym Tech Logo" 
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling?.classList.remove('hidden')
                }}
              />
              <div className="w-12 h-12 bg-[#2f7df9]/20 rounded-xl flex items-center justify-center shadow-lg hidden">
                <span className="text-[#2f7df9] font-bold text-sm">A1</span>
              </div>
            </div>
            <p className="text-foreground/80 dark:text-foreground/90 text-sm mb-4">Transform your body, transform your life. ফিটনেস মানে আত্মবিশ্বাস।</p>
            <div className="flex gap-3">
              <a href="#" className="bg-[#2f7df9]/20 hover:bg-[#2f7df9] hover:text-white text-[#2f7df9] p-2 rounded-xl transition-all hover:scale-110">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-[#2f7df9]/20 hover:bg-[#2f7df9] hover:text-white text-[#2f7df9] p-2 rounded-xl transition-all hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-[#2f7df9]/20 hover:bg-[#2f7df9] hover:text-white text-[#2f7df9] p-2 rounded-xl transition-all hover:scale-110">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/80 dark:text-foreground/90">
              <li>
                <a href="#home" className="hover:text-[#2f7df9] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#2f7df9] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-[#2f7df9] transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#2f7df9] transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Support</h4>
            <ul className="space-y-2 text-sm text-foreground/80 dark:text-foreground/90">
              <li>
                <a href="#contact" className="hover:text-[#2f7df9] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2f7df9] transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2f7df9] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2f7df9] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact Info</h4>
            <div className="space-y-3 text-sm text-foreground/80 dark:text-foreground/90">
              <div className="flex gap-2 items-start">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>87, Ahalyanagar, Mukundapur, Kolkata 700099</span>
              </div>
              <div className="flex gap-2 items-center">
                <Phone size={16} />
                <span>084205 78077</span>
              </div>
              <div className="flex gap-2 items-center">
                <Mail size={16} />
                <span>contact@a1gymtech.com</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-[#2f7df9]/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/80 dark:text-foreground/90">
            <p>&copy; {currentYear} A1 Gym Tech. All rights reserved.</p>
            <p className="text-center italic">ফিটনেস মানে আত্মবিশ্বাস — Fitness Means Confidence</p>
            <div className="space-x-4">
              <a href="#" className="hover:text-[#2f7df9] transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-[#2f7df9] transition-colors">
                Privacy
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-[#2f7df9]/30 text-center">
            <p className="text-foreground/70 dark:text-foreground/80 text-sm">
              Made with <span className="text-red-500">♥</span> by{" "}
              <a
                href="https://www.fusiondev.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2f7df9] hover:text-[#5ba0ff] font-semibold transition-colors"
              >
                FusionDev
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
