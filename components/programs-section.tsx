"use client"

import { motion } from "framer-motion"
import { Dumbbell, Zap, Activity, Music, Leaf, User } from "lucide-react"

export default function ProgramsSection() {
  const programs = [
    { name: "Weight Training", icon: Dumbbell },
    { name: "CrossFit", icon: Zap },
    { name: "Cardio", icon: Activity },
    { name: "Zumba", icon: Music },
    { name: "Yoga", icon: Leaf },
    { name: "Personal Training", icon: User },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="programs" className="py-20 relative overflow-hidden bg-gradient-to-br from-white via-[#2f7df9]/5 to-[#5ba0ff]/5 dark:from-gray-900 dark:via-[#2f7df9]/10 dark:to-[#2f7df9]/10">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #2f7df9 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-bold text-[#2f7df9] bg-[#2f7df9]/10 px-4 py-2 rounded-full border border-[#2f7df9]/20">
              OUR PROGRAMS
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Our <span className="bg-gradient-to-r from-[#2f7df9] to-[#5ba0ff] bg-clip-text text-transparent">Training Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our diverse range of fitness programs designed to meet all fitness levels and goals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                whileHover={{ y: -12, scale: 1.05, rotate: 1 }}
                className="group"
              >
                <div className="relative overflow-hidden h-72 p-8 flex flex-col justify-between cursor-pointer rounded-3xl bg-gradient-to-br from-white to-[#2f7df9]/5 dark:from-gray-800 dark:to-[#2f7df9]/10 backdrop-blur-md border-2 border-[#2f7df9]/20 hover:border-[#2f7df9]/40 shadow-xl hover:shadow-2xl hover:shadow-[#2f7df9]/30 transition-all duration-500">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2f7df9] via-[#5ba0ff] to-[#2f7df9] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none rounded-3xl" />
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#2f7df9]/0 to-[#5ba0ff]/0 group-hover:from-[#2f7df9]/20 group-hover:to-[#5ba0ff]/20 rounded-bl-full transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="bg-gradient-to-br from-[#2f7df9]/20 to-[#5ba0ff]/20 group-hover:from-white/30 group-hover:to-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:scale-110"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon size={32} className="text-[#2f7df9] group-hover:text-white transition-colors" />
                    </motion.div>
                    <motion.h3 
                      className="text-2xl font-bold text-[#2f7df9] group-hover:text-white transition-colors mb-2"
                      whileHover={{ x: 5 }}
                    >
                      {program.name}
                    </motion.h3>
                  </div>
                  <motion.p 
                    className="text-sm text-muted-foreground group-hover:text-white/90 transition-colors relative z-10 font-medium"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    Transform your fitness with expert guidance
                  </motion.p>
                  
                  {/* Arrow indicator on hover */}
                  <motion.div
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white text-lg">→</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
