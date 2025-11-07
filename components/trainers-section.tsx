"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Instagram, Facebook } from "lucide-react"

export default function TrainersSection() {
  const trainers = [
    {
      name: "Raj Kumar",
      specialty: "Strength & Conditioning",
      image: "/images/trainer1.jpg",
    },
    {
      name: "Arman Sharma",
      specialty: "Yoga & Flexibility",
      image: "/images/trainer2.jpg",
    },
    {
      name: "Amit Patel",
      specialty: "Cardio & CrossFit",
      image: "/images/trainer3.jpg",
    },
    {
      name: "Rajat Singh",
      specialty: "Personal Training",
      image: "/images/trainer4.jpg",
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="trainers" className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-[#2f7df9]/5 via-white to-[#5ba0ff]/5 dark:from-[#2f7df9]/10 dark:via-gray-900 dark:to-[#2f7df9]/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-5 w-64 h-64 bg-[#2f7df9]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-5 w-80 h-80 bg-[#5ba0ff]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-3"
          >
            <span className="text-xs font-bold text-[#2f7df9] bg-[#2f7df9]/10 px-3 py-1.5 rounded-full border border-[#2f7df9]/20">
              OUR TEAM
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our <span className="bg-gradient-to-r from-[#2f7df9] to-[#5ba0ff] bg-clip-text text-transparent">Expert Trainers</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Our certified trainers are passionate about helping you achieve your fitness goals with personalized
            guidance and motivation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {trainers.map((trainer, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl hover:shadow-[#2f7df9]/30 transition-all duration-500 rounded-2xl bg-gradient-to-br from-white to-[#2f7df9]/5 dark:from-gray-800 dark:to-[#2f7df9]/10 backdrop-blur-md border border-[#2f7df9]/15 hover:border-[#2f7df9]/30 relative p-0">
                {/* Decorative gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2f7df9]/0 to-[#5ba0ff]/0 group-hover:from-[#2f7df9]/5 group-hover:to-[#5ba0ff]/5 transition-all duration-500 rounded-2xl pointer-events-none" />
                
                {/* Image container - removed top padding/margin */}
                <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 dark:bg-gray-700 rounded-t-2xl">
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                  
                  <img
                    src={trainer.image || "/placeholder.svg"}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2f7df9]/60 via-[#2f7df9]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Social icons */}
                  <div className="absolute inset-0 flex items-end justify-center pb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.1 }}
                      className="flex gap-2"
                    >
                      <motion.button 
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-[#2f7df9] text-white rounded-full p-2 hover:bg-[#2568e6] transition-all shadow-lg hover:shadow-xl hover:shadow-[#2f7df9]/40"
                      >
                        <Instagram size={18} />
                      </motion.button>
                      <motion.button 
                        whileHover={{ scale: 1.15, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-[#2f7df9] text-white rounded-full p-2 hover:bg-[#2568e6] transition-all shadow-lg hover:shadow-xl hover:shadow-[#2f7df9]/40"
                      >
                        <Facebook size={18} />
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
                
                {/* Content section */}
                <div className="p-5 text-center relative z-10">
                  <motion.h3 
                    className="text-lg font-bold text-foreground mb-1.5 group-hover:text-[#2f7df9] transition-colors duration-300"
                    whileHover={{ scale: 1.03 }}
                  >
                    {trainer.name}
                  </motion.h3>
                  <p className="text-xs font-semibold bg-gradient-to-r from-[#2f7df9] to-[#5ba0ff] bg-clip-text text-transparent">
                    {trainer.specialty}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}