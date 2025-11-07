"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Zap, Award } from "lucide-react"

export default function DashboardSection() {
  const stats = [
    {
      icon: Users,
      number: "2,500+",
      label: "Active Members",
      description: "Growing community of fitness enthusiasts",
    },
    {
      icon: Zap,
      number: "500+",
      label: "Workout Programs",
      description: "Customized fitness plans for all levels",
    },
    {
      icon: Award,
      number: "98%",
      label: "Success Rate",
      description: "Members achieving their fitness goals",
    },
    {
      icon: TrendingUp,
      number: "25+",
      label: "Expert Trainers",
      description: "Certified professionals ready to guide you",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#2f7df9]/5 via-white to-[#5ba0ff]/5 dark:from-[#2f7df9]/10 dark:via-gray-900 dark:to-[#2f7df9]/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 w-64 h-64 bg-[#2f7df9]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-10 right-10 w-80 h-80 bg-[#5ba0ff]/20 rounded-full blur-3xl"
        />
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
              STATISTICS
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Gym <span className="bg-gradient-to-r from-[#2f7df9] to-[#5ba0ff] bg-clip-text text-transparent">Performance Dashboard</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time statistics showcasing our commitment to your fitness success
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="group border-2 border-[#2f7df9]/20 hover:border-[#2f7df9]/40 bg-gradient-to-br from-white to-[#2f7df9]/5 dark:from-gray-800 dark:to-[#2f7df9]/10 backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-[#2f7df9]/30 transition-all duration-500 p-8 rounded-3xl overflow-hidden relative">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2f7df9]/0 to-[#5ba0ff]/0 group-hover:from-[#2f7df9]/10 group-hover:to-[#5ba0ff]/10 transition-all duration-500 rounded-3xl" />
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#2f7df9]/10 to-[#5ba0ff]/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />

                  <div className="relative z-10">
                    <motion.div 
                      className="bg-gradient-to-br from-[#2f7df9] to-[#5ba0ff] p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-xl shadow-[#2f7df9]/30 group-hover:shadow-2xl group-hover:shadow-[#2f7df9]/50 transition-all duration-300"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon size={28} className="text-white" />
                    </motion.div>

                    <motion.h3 
                      className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#2f7df9] to-[#5ba0ff] bg-clip-text text-transparent mb-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      {stat.number}
                    </motion.h3>

                    <p className="text-xl font-bold text-foreground mb-3 group-hover:text-[#2f7df9] transition-colors">{stat.label}</p>

                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">{stat.description}</p>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
