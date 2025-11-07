"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Rahul Verma",
      title: "Fitness Enthusiast",
      rating: 5,
      text: "Excellent gym with top-notch equipment and friendly staff. The trainers are very professional and motivating!",
      image: "/user/unnamed.png",
    },
    {
      name: "Sneha Gupta",
      title: "Health Professional",
      rating: 5,
      text: "I have been training here for 2 months and already seen amazing results. Highly recommend A1 Gym Tech!",
      image: "/user/unnamed (2).png",
    },
    {
      name: "Aman Singh",
      title: "Corporate Professional",
      rating: 5,
      text: "The best gym in Mukundapur! Great atmosphere, clean facilities, and experienced trainers who really care.",
      image: "/user/unnamed (1).png",
    },
    {
      name: "Divya Sharma",
      title: "Athlete",
      rating: 5,
      text: "Outstanding personal training sessions. The trainers customize programs based on individual needs.",
      image: "/user/unnamed (3).png",
    },
    {
      name: "Vikram Patel",
      title: "Business Owner",
      rating: 5,
      text: "Love the variety of programs and classes. A1 Gym Tech truly cares about member success!",
      image: "/user/unnamed (4).png",
    },
    {
      name: "Raj Kapoor",
      title: "Fitness Coach",
      rating: 5,
      text: "Professional environment with state-of-the-art equipment. My fitness journey has been transformed here.",
      image: "/user/unnamed (5).png",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section id="reviews" className="py-20 relative overflow-hidden bg-gradient-to-br from-[#2f7df9]/5 via-white to-[#5ba0ff]/5 dark:from-[#2f7df9]/10 dark:via-gray-900 dark:to-[#2f7df9]/10">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2f7df9]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5ba0ff]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
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
              TESTIMONIALS
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Member <span className="bg-gradient-to-r from-[#2f7df9] to-[#5ba0ff] bg-clip-text text-transparent">Reviews & Testimonials</span>
          </h2>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-lg text-muted-foreground">4.8/5 average rating based on 500+ reviews</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((review, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              whileHover={{ y: -8, scale: 1.02, rotate: 0.5 }}
              className="group"
            >
              <Card className="border-2 border-[#2f7df9]/20 hover:border-[#2f7df9]/40 shadow-xl hover:shadow-2xl hover:shadow-[#2f7df9]/30 transition-all duration-500 p-6 bg-gradient-to-br from-white to-[#2f7df9]/5 dark:from-gray-800 dark:to-[#2f7df9]/10 backdrop-blur-md rounded-3xl h-full flex flex-col relative overflow-hidden">
                {/* Decorative gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2f7df9]/0 to-[#5ba0ff]/0 group-hover:from-[#2f7df9]/10 group-hover:to-[#5ba0ff]/10 transition-all duration-500 rounded-3xl pointer-events-none" />
                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative"
                  >
                    <img
                      src={review.image || "/logo.png"}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover border-3 border-[#2f7df9] shadow-xl group-hover:shadow-[#2f7df9]/50 transition-all duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "/logo.png"
                      }}
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#2f7df9] rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <p className="font-bold text-lg text-foreground group-hover:text-[#2f7df9] transition-colors">{review.name}</p>
                    <p className="text-sm text-muted-foreground font-medium">{review.title}</p>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    className="text-[#2f7df9]/30 group-hover:text-[#2f7df9] transition-colors flex-shrink-0"
                  >
                    <Quote size={24} />
                  </motion.div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed flex-1">{review.text}</p>

                <motion.div 
                  className="mt-4 pt-4 border-t-2 border-[#2f7df9]/20 group-hover:border-[#2f7df9]/40 transition-colors relative z-10"
                  whileHover={{ x: 5 }}
                >
                  <p className="text-xs font-bold bg-gradient-to-r from-[#2f7df9] to-[#5ba0ff] bg-clip-text text-transparent">
                    ✓ Verified Member
                  </p>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
