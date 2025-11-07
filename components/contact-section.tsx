"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Mail, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "87, Ahalyanagar, Mukundapur, Kolkata, West Bengal 700099",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "084205 78077",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@a1gymtech.com",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "6 AM – 10 PM (Daily)",
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
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In <span className="text-[#2f7df9]">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out to us today!
          </p>
        </motion.div>

        <div className="mb-12 space-y-8">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div key={index} variants={itemVariants} className="flex gap-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 border border-[#2f7df9]/20 shadow-lg hover:shadow-xl hover:shadow-[#2f7df9]/20 transition-all">
                  <div className="bg-gradient-to-br from-[#2f7df9] to-[#5ba0ff] rounded-xl p-3 h-fit shadow-lg shadow-[#2f7df9]/20">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    <p className="text-muted-foreground text-sm">{info.content}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Google Maps Embed - Full Width */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border-2 border-[#2f7df9]/30 shadow-2xl shadow-[#2f7df9]/20 h-[500px] md:h-[600px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14744.623514025421!2d88.41019861223874!3d22.49833402522406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273429d9c5139%3A0x7ebbb427b36d9fca!2sA1%20Gym%20Tech!5e0!3m2!1sen!2sin!4v1762532570555!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 border border-[#2f7df9]/20 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert("Thank you for your message! We will get back to you soon.")
              setFormData({ name: "", email: "", message: "" })
            }}
            className="space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="px-4 py-3 border border-[#2f7df9]/20 rounded-xl bg-white/50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-[#2f7df9] focus:border-[#2f7df9] transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="px-4 py-3 border border-[#2f7df9]/20 rounded-xl bg-white/50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-[#2f7df9] focus:border-[#2f7df9] transition-all"
              />
            </div>
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-3 border border-[#2f7df9]/20 rounded-xl bg-white/50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-[#2f7df9] focus:border-[#2f7df9] resize-none transition-all"
            />
            <Button
              type="submit"
              className="bg-gradient-to-r from-[#2f7df9] to-[#5ba0ff] hover:from-[#2568e6] hover:to-[#4a8fff] text-white w-full rounded-xl font-semibold shadow-lg shadow-[#2f7df9]/30 hover:shadow-xl transition-all"
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
