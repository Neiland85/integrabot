"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Bot } from "lucide-react"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Contacto</h1>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-primary to-secondary"></div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Integrabot.net</h2>
                    <p className="text-muted-foreground">Soluciones tecnológicas innovadoras</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <p className="text-muted-foreground">Neil Muñoz (Ceo - Code Architect):</p>
                      <a href="tel:+34613722441" className="text-muted-foreground hover:text-primary transition-colors">
                        +34 613 722 441
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4">¿Cómo podemos ayudarte?</h2>
              <p className="mb-4">
                Estamos aquí para responder a tus preguntas y ayudarte a encontrar la solución tecnológica perfecta para
                tu negocio.
              </p>
              <p className="mb-4">Contáctanos para:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-2 mt-0.5">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <span>Consultas sobre nuestros servicios</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-2 mt-0.5">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <span>Solicitar un presupuesto personalizado</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-2 mt-0.5">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <span>Agendar una demostración</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full mr-2 mt-0.5">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <span>Explorar oportunidades de colaboración</span>
                </li>
              </ul>
              <p>
                Nuestro equipo te responderá a la brevedad posible. Generalmente respondemos en menos de 24 horas
                durante días laborables.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Horario de atención</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Lunes a Viernes</p>
                <p className="text-muted-foreground">9:00 - 18:00</p>
              </div>
              <div>
                <p className="font-medium">Sábados</p>
                <p className="text-muted-foreground">10:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
