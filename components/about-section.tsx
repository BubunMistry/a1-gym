"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-br from-white via-[#2f7df9]/5 to-white dark:from-gray-900 dark:via-[#2f7df9]/10 dark:to-gray-900">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#2f7df9]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#5ba0ff]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 1 }} 
            className="relative group h-96 rounded-3xl overflow-hidden shadow-2xl border-2 border-[#2f7df9]/20 hover:border-[#2f7df9]/40 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#2f7df9]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img
              src="/images/about-gym.jpg"
              alt="A1 Gym Tech"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="text-sm font-bold text-[#2f7df9] bg-[#2f7df9]/10 px-4 py-2 rounded-full border border-[#2f7df9]/20">
                ABOUT US
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-to-r from-[#2f7df9] to-[#5ba0ff] bg-clip-text text-transparent">A1 Gym Tech</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Welcome to A1 Gym Tech, your premier fitness destination in Mukundapur, Kolkata. We are dedicated to
              providing a welcoming, professional, and motivational environment where fitness enthusiasts of all levels
              can achieve their goals.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With top-quality equipment, certified personal trainers, and a supportive community, we offer
              comprehensive fitness solutions tailored to your unique needs. Whether you're a beginner or an advanced
              athlete, we're here to support your fitness journey.
            </p>

            <p className="text-base font-semibold text-[#2f7df9] italic mb-6">
              ফিটনেস মানে আত্মবিশ্বাস — Fitness means confidence
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "State-of-the-art Equipment", desc: "Latest fitness technology", icon: "💪" },
                { title: "Expert Trainers", desc: "Certified professionals", icon: "🏆" },
                { title: "Flexible Timings", desc: "6 AM - 10 PM daily", icon: "⏰" },
                { title: "Community Focus", desc: "Motivational environment", icon: "🤝" },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="group bg-gradient-to-br from-[#2f7df9]/10 to-[#5ba0ff]/10 dark:from-[#2f7df9]/20 dark:to-[#5ba0ff]/20 backdrop-blur-sm p-5 rounded-2xl border-2 border-[#2f7df9]/20 hover:border-[#2f7df9]/40 shadow-lg hover:shadow-xl hover:shadow-[#2f7df9]/20 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">{item.icon}</div>
                  <h3 className="font-bold text-[#2f7df9] mb-1 group-hover:text-[#2568e6] transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
