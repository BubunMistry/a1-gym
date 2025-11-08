"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const containerVariants = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen w-full pt-20 px-4 sm:px-6 lg:px-8 xl:px-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2f7df9]/10 via-white to-[#5ba0ff]/10 dark:from-[#2f7df9]/20 dark:via-gray-900 dark:to-[#2f7df9]/20"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-[#2f7df9]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#5ba0ff]/20 rounded-full blur-3xl"
        />
      </div>
      
      <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: 'url("/images/banner.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.15,
        filter: "blur(4px)",
      }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Content */}
        <motion.div variants={fadeInUp} className="text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-block bg-[#2f7df9]/10 text-[#2f7df9] px-4 py-1 rounded-full my-6 border border-[#2f7df9]/20"
        >
          <span className="text-sm font-semibold">Premium Fitness Experience</span>
        </motion.div>

        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-foreground mb-6 leading-tight break-words"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className="block bg-gradient-to-r from-[#2f7df9] via-[#5ba0ff] to-[#2f7df9] bg-clip-text text-transparent bg-[length:200%_auto]"
            animate={{
              backgroundPosition: ["0% center", "200% center", "0% center"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Transform Your Body,
          </motion.span>
          <motion.span 
            className="block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform Your Life
          </motion.span>
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8 max-w-md">
          Join A1 Gym Tech and start your fitness journey with expert trainers and state-of-the-art equipment.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button
          size="lg"
          className="bg-[#2f7df9] hover:bg-[#2568e6] text-white rounded-2xl font-semibold shadow-lg shadow-[#2f7df9]/30 hover:shadow-xl hover:shadow-[#2f7df9]/40 transition-all hover:scale-105"
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }}
          >
          Join Now
          <ArrowRight className="ml-2" size={18} />
          </Button>
          <Button
          size="lg"
          className="border-2 border-[#2f7df9] text-[#2f7df9] hover:bg-[#2f7df9]/10 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105"
          onClick={() => {
            document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })
          }}
          >
          View Programs
          </Button>
        </motion.div>
        </motion.div>

        {/* Right Stats */}
        <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
        {[
          { number: "2500+", label: "Happy Members", icon: "👥" },
          { number: "25", label: "Expert Trainers", icon: "💪" },
          { number: "120", label: "Daily Classes", icon: "🎯" },
          { number: "500+", label: "5-Star Reviews", icon: "⭐" },
        ].map((stat, i) => (
          <motion.div
          key={i}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
          whileHover={{ y: -8, scale: 1.08, rotate: 2 }}
          className="group bg-gradient-to-br from-white/90 to-[#2f7df9]/10 dark:from-gray-800/90 dark:to-[#2f7df9]/20 backdrop-blur-md rounded-3xl p-6 border-2 border-[#2f7df9]/20 hover:border-[#2f7df9]/40 shadow-xl hover:shadow-2xl hover:shadow-[#2f7df9]/30 transition-all duration-300 relative overflow-hidden"
          >
          {/* Animated background on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2f7df9]/0 to-[#5ba0ff]/0 group-hover:from-[#2f7df9]/20 group-hover:to-[#5ba0ff]/20 transition-all duration-300 rounded-3xl" />
          
          <motion.div 
            className="text-4xl mb-3 relative z-10"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {stat.icon}
          </motion.div>
          <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#2f7df9] to-[#5ba0ff] bg-clip-text text-transparent mb-2 relative z-10">
            {stat.number}
          </p>
          <p className="text-sm font-semibold text-muted-foreground group-hover:text-[#2f7df9] transition-colors relative z-10">
            {stat.label}
          </p>
          </motion.div>
        ))}
        </motion.div>
      </motion.div>
      </div>
    </section>
  )
}
