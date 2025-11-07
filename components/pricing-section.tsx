"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useState } from "react"

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "Basic",
      monthlyPrice: 2999,
      yearlyPrice: 29999,
      features: [
        "Gym access during off-peak hours",
        "Basic equipment access",
        "Locker facility",
        "Basic fitness assessment",
      ],
      popular: false,
    },
    {
      name: "Pro",
      monthlyPrice: 4999,
      yearlyPrice: 49999,
      features: [
        "24/7 Gym access",
        "All equipment access",
        "Personal locker",
        "Monthly fitness assessment",
        "Free fitness classes",
        "1 free training session/month",
      ],
      popular: true,
    },
    {
      name: "Elite",
      monthlyPrice: 7999,
      yearlyPrice: 79999,
      features: [
        "24/7 Premium gym access",
        "All equipment + premium areas",
        "VIP locker",
        "Weekly fitness assessment",
        "Unlimited classes",
        "4 free training sessions/month",
        "Nutrition consultation",
        "Priority support",
      ],
      popular: false,
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
    <section id="pricing" className="py-20 relative overflow-hidden bg-gradient-to-br from-white via-[#2f7df9]/5 to-[#5ba0ff]/5 dark:from-gray-900 dark:via-[#2f7df9]/10 dark:to-[#2f7df9]/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-80 h-80 bg-[#2f7df9]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-[#5ba0ff]/10 rounded-full blur-3xl"
        />
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
            className="inline-block mb-4"
          >
            <span className="text-sm font-bold text-[#2f7df9] bg-[#2f7df9]/10 px-4 py-2 rounded-full border border-[#2f7df9]/20">
              PRICING PLANS
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Simple & Transparent <span className="bg-gradient-to-r from-[#2f7df9] to-[#5ba0ff] bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">Choose the perfect plan for your fitness goals</p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={isYearly ? "text-muted-foreground" : "text-foreground font-semibold"}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-16 h-8 rounded-full transition-colors ${isYearly ? "bg-[#2f7df9]" : "bg-muted"}`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform shadow-lg ${
                  isYearly ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
            <span className={!isYearly ? "text-muted-foreground" : "text-foreground font-semibold"}>Yearly</span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`relative ${plan.popular ? "md:scale-105" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-gradient-to-r from-[#2f7df9] to-[#5ba0ff] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              <Card
                className={`border-2 p-8 h-full flex flex-col rounded-3xl relative overflow-hidden group ${
                  plan.popular
                    ? "bg-gradient-to-br from-[#2f7df9] to-[#5ba0ff] shadow-2xl shadow-[#2f7df9]/40 border-[#2f7df9]/50"
                    : "bg-gradient-to-br from-white to-[#2f7df9]/5 dark:from-gray-800 dark:to-[#2f7df9]/10 backdrop-blur-md border-[#2f7df9]/20 hover:border-[#2f7df9]/40 shadow-xl hover:shadow-2xl hover:shadow-[#2f7df9]/30"
                }`}
              >
                {/* Shine effect */}
                {!plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none rounded-3xl" />
                )}
                
                {/* Decorative gradient overlay for non-popular plans */}
                {!plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2f7df9]/0 to-[#5ba0ff]/0 group-hover:from-[#2f7df9]/10 group-hover:to-[#5ba0ff]/10 transition-all duration-500 rounded-3xl pointer-events-none" />
                )}
                <div className="relative z-10">
                  <h3 className={`text-3xl font-bold mb-3 ${plan.popular ? "text-white" : "text-foreground"}`}>
                    {plan.name}
                  </h3>
                  <div className={`mb-6 ${plan.popular ? "text-white/90" : "text-muted-foreground"}`}>
                    <span className="text-5xl font-extrabold">
                      ₹{isYearly ? (plan.yearlyPrice / 12).toFixed(0) : plan.monthlyPrice}
                    </span>
                    <span className="text-sm ml-2">/month</span>
                  </div>

                  <Button
                    className={`w-full mb-8 rounded-xl font-semibold transition-all hover:scale-105 relative z-10 ${
                      plan.popular
                        ? "bg-white text-[#2f7df9] hover:bg-white/90 shadow-lg hover:shadow-xl"
                        : "bg-gradient-to-r from-[#2f7df9] to-[#5ba0ff] hover:from-[#2568e6] hover:to-[#4a8fff] text-white shadow-lg shadow-[#2f7df9]/30 hover:shadow-xl"
                    }`}
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Join Now
                  </Button>

                  <div className="space-y-4 flex-1">
                    {plan.features.map((feature, i) => (
                      <motion.div 
                        key={i} 
                        className="flex gap-3 items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Check size={20} className={plan.popular ? "text-white" : "text-[#2f7df9]"} />
                        </motion.div>
                        <span className={plan.popular ? "text-white/90" : "text-foreground"}>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
