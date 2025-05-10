"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Server, Database, Code, Lock, Zap, RefreshCw } from "lucide-react"
import Link from "next/link"

export function ApiIntegration() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: "Análisis de Requisitos",
      description: "Identificamos las necesidades específicas de tu negocio para diseñar la API adecuada.",
      icon: Database,
    },
    {
      title: "Diseño de Endpoints",
      description: "Creamos una estructura clara y eficiente para los endpoints de tu API RESTful.",
      icon: Code,
    },
    {
      title: "Implementación Segura",
      description: "Desarrollamos la API con los más altos estándares de seguridad y autenticación.",
      icon: Lock,
    },
    {
      title: "Pruebas y Optimización",
      description: "Realizamos pruebas exhaustivas para garantizar el rendimiento y la fiabilidad.",
      icon: Zap,
    },
    {
      title: "Despliegue y Monitoreo",
      description: "Implementamos la API en producción con sistemas de monitoreo continuo.",
      icon: Server,
    },
    {
      title: "Mantenimiento Continuo",
      description: "Ofrecemos soporte y actualizaciones para mantener tu API siempre actualizada.",
      icon: RefreshCw,
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("api-integration")
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isVisible, steps.length])

  return (
    <section id="api-integration" className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Integración API RESTful</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conecta tus sistemas y automatiza procesos con nuestras soluciones de API RESTful personalizadas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side: Process visualization */}
            <motion.div
              className="relative h-[400px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  {/* Central API hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg z-20">
                    <Server className="w-12 h-12 text-white" />
                  </div>

                  {/* Connection lines */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-primary/30"></div>

                  {/* Step indicators */}
                  {steps.map((step, index) => {
                    const angle = (index * (360 / steps.length) * Math.PI) / 180
                    const x = 120 * Math.cos(angle)
                    const y = 120 * Math.sin(angle)

                    return (
                      <motion.div
                        key={index}
                        className={`absolute w-12 h-12 rounded-full flex items-center justify-center shadow-md ${
                          currentStep === index
                            ? "bg-gradient-to-br from-primary to-secondary text-white"
                            : "bg-white dark:bg-gray-800"
                        }`}
                        style={{
                          top: `calc(50% - ${y}px)`,
                          left: `calc(50% - ${x}px)`,
                        }}
                        animate={{
                          scale: currentStep === index ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <step.icon className={`w-6 h-6 ${currentStep === index ? "text-white" : "text-primary"}`} />
                      </motion.div>
                    )
                  })}

                  {/* Animated connection line */}
                  {steps.map((step, index) => {
                    const angle = (index * (360 / steps.length) * Math.PI) / 180
                    const x1 = 0
                    const y1 = 0
                    const x2 = 120 * Math.cos(angle)
                    const y2 = 120 * Math.sin(angle)

                    return (
                      <svg
                        key={index}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
                        style={{ zIndex: 10 }}
                      >
                        <motion.line
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke={currentStep === index ? "#6366F1" : "#6366F133"}
                          strokeWidth={currentStep === index ? 3 : 1}
                          strokeDasharray={currentStep === index ? "5,5" : "0,0"}
                          animate={{
                            strokeDashoffset: currentStep === index ? [0, -20] : 0,
                          }}
                          transition={{
                            duration: 1,
                            repeat: currentStep === index ? Number.POSITIVE_INFINITY : 0,
                            ease: "linear",
                          }}
                        />
                      </svg>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right side: Step details */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-primary">{steps[currentStep].title}</h3>
              <p className="text-muted-foreground">{steps[currentStep].description}</p>

              <div className="pt-4 space-y-4">
                <h4 className="font-medium">Nuestro proceso de integración API RESTful:</h4>
                <ul className="space-y-3">
                  {steps.map((step, index) => (
                    <li
                      key={index}
                      className={`flex items-center p-3 rounded-lg transition-colors ${
                        currentStep === index ? "bg-primary/10 border-l-4 border-primary" : "hover:bg-muted/50"
                      }`}
                      onClick={() => setCurrentStep(index)}
                    >
                      <step.icon
                        className={`w-5 h-5 mr-3 ${currentStep === index ? "text-primary" : "text-muted-foreground"}`}
                      />
                      <span className={currentStep === index ? "font-medium" : ""}>{step.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <Link href="/servicios/api-restful" passHref>
                  <Button className="group">
                    Más sobre integración API RESTful
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
