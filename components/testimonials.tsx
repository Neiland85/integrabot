"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "CTO, TechSolutions",
    content:
      "La integración API RESTful que desarrolló Integrabot para nuestra plataforma superó todas nuestras expectativas. El rendimiento mejoró un 40% y la comunicación entre sistemas es ahora perfecta.",
    avatar: "/placeholder.svg?height=40&width=40",
    stars: 5,
  },
  {
    name: "María González",
    role: "Directora de Innovación, InnovaGroup",
    content:
      "Trabajar con Integrabot ha sido una experiencia excepcional. Su equipo entendió perfectamente nuestras necesidades y entregó una solución de IA que ha transformado nuestros procesos internos.",
    avatar: "/placeholder.svg?height=40&width=40",
    stars: 5,
  },
  {
    name: "Javier Méndez",
    role: "CEO, StartupConnect",
    content:
      "Los bots inteligentes que Integrabot desarrolló para nuestro servicio de atención al cliente han reducido nuestros tiempos de respuesta en un 60%. Nuestros clientes están encantados con la experiencia.",
    avatar: "/placeholder.svg?height=40&width=40",
    stars: 5,
  },
  {
    name: "Laura Sánchez",
    role: "Directora de Marketing, MediaGroup",
    content:
      "Integrabot transformó nuestra presencia digital con un sitio web moderno y optimizado. El tráfico ha aumentado un 35% desde el lanzamiento y las conversiones han mejorado significativamente.",
    avatar: "/placeholder.svg?height=40&width=40",
    stars: 4,
  },
]

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("testimonios")
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="testimonios" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empresas de diversos sectores confían en nuestras soluciones tecnológicas
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.stars ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
