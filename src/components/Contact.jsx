 

"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Loader2, Sparkles } from "lucide-react"
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: "" })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ success: false, message: "" })

   try {
      // Initialize EmailJS with your public key
      // You need to create an account at https://www.emailjs.com/ and get these credentials
      const serviceID = 'service_s3fac5j' // Replace with your EmailJS service ID
      const templateID = 'template_ymib3ir' // Replace with your EmailJS template ID
      const publicKey = 'e4wTbaV9PZQNvBwQT' // Replace with your EmailJS public key

  
      // Send the email using EmailJS
      const response = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: 'dangolraman3@gmail.com',
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        },
        publicKey
      )

      if (response.status === 200) {
        setSubmitStatus({ 
          success: true, 
          message: "🎉 Thank you for your message! I'll get back to you within 24 hours." 
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      }
    } catch (error) {
      console.error("Failed to send message:", error)
      setSubmitStatus({ 
        success: false, 
        message: "❌ Sorry, there was an error sending your message. Please try again later or contact me directly at dangolraman3@gmail.com." 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dangolraman3@gmail.com",
      href: "mailto:dangolraman3@gmail.com",
      color: "hover:bg-red-500/20 hover:scale-105 hover:shadow-lg transition-all duration-300",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977 9763774451",
      href: "tel:+9779763774451",
      color: "hover:bg-green-500/20 hover:scale-105 hover:shadow-lg transition-all duration-300",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kathmandu, Nepal",
      href: "#",
      color: "hover:bg-blue-500/20 hover:scale-105 hover:shadow-lg transition-all duration-300",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/raman1224",
      color: "hover:bg-gray-900 hover:text-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300",
      bgColor: "bg-gradient-to-br from-gray-700 to-gray-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ramandangol",
      color: "hover:bg-blue-600 hover:text-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-800",
    },
    {
      icon: MessageCircle,
      label: "Portfolio",
      href: "#",
      color: "hover:bg-green-600 hover:text-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300",
      bgColor: "bg-gradient-to-br from-green-600 to-green-800",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30 dark:from-background dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-200/20 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
            <Sparkles size={16} className="animate-pulse" />
            Let's Connect
            <Sparkles size={16} className="animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project or just say hello. 
            I'm always excited about new opportunities and creative collaborations.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-3xl transition-all duration-500">
              <h3 className="text-3xl font-bold mb-8 text-primary flex items-center gap-3">
                <div className="w-2 h-8 bg-primary rounded-full animate-bounce"></div>
                Let's Connect
              </h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className={`flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-white to-gray-50/80 dark:from-gray-800 dark:to-gray-900/80 shadow-md hover:shadow-xl border border-gray-100/50 dark:border-gray-700/50 ${info.color} group cursor-pointer`}
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                      <info.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{info.label}</p>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-6 text-foreground text-lg flex items-center gap-2">
                  Follow My Journey
                  <div className="w-1 h-1 bg-primary rounded-full animate-ping"></div>
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-xl ${social.bgColor} text-white ${social.color} shadow-lg`}
                      title={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300">
                <h4 className="font-semibold mb-3 text-primary text-lg flex items-center gap-2">
                  Availability Status
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </h4>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                  <span className="text-muted-foreground font-medium">Available for new projects</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Currently accepting freelance work and full-time opportunities. Let's build something amazing together!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-3xl transition-all duration-500">
              {submitStatus.message && (
                <div className={`mb-6 p-4 rounded-xl border-l-4 ${
                  submitStatus.success 
                    ? 'bg-green-100/80 dark:bg-green-900/20 text-green-800 dark:text-green-300 border-green-500' 
                    : 'bg-red-100/80 dark:bg-red-900/20 text-red-800 dark:text-red-300 border-red-500'
                } backdrop-blur-sm animate-fade-in`}>
                  {submitStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary shadow-sm hover:shadow-md focus:shadow-lg transition-all duration-300 backdrop-blur-sm placeholder-gray-400 dark:placeholder-gray-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary shadow-sm hover:shadow-md focus:shadow-lg transition-all duration-300 backdrop-blur-sm placeholder-gray-400 dark:placeholder-gray-500"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary shadow-sm hover:shadow-md focus:shadow-lg transition-all duration-300 backdrop-blur-sm placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary shadow-sm hover:shadow-md focus:shadow-lg transition-all duration-300 backdrop-blur-sm resize-none placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="Tell me about your project, your vision, or just say hello... I'd love to hear from you!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-blue-600 text-primary-foreground px-8 py-4 rounded-xl hover:from-primary/90 hover:to-blue-600/90 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 font-semibold flex items-center justify-center space-x-3 group disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      <span>Sending your message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} className="group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300" />
                      <span>Launch Message 🚀</span>
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-muted-foreground pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                  💫 I typically respond within a few hours. Let's create something extraordinary together!
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact