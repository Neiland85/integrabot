"use client"

import { Button } from "@/components/ui/button"
import { Bot, ArrowRight, Code2, Server, Zap } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToServices = () => {
    const servicesSection = document.getElementById("servicios")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative py-24 flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-background" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl opacity-30 animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl opacity-30 animate-pulse-slow animation-delay-1000" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side content */}
            <motion.div
              className="flex-1 text-center lg:text-left space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center space-x-2 bg-primary/10 px-3 py-1 rounded-full text-primary mb-4">
                <Bot className="w-5 h-5" />
                <span className="text-sm font-medium">Soluciones de Integración Inteligente</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Potencia tu negocio con{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  APIs inteligentes
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Transformamos ideas en soluciones tecnológicas innovadoras utilizando las últimas tecnologías en IA y
                APIs RESTful.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                <Button size="lg" className="text-lg group" onClick={scrollToServices}>
                  Explorar Servicios
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link href="/contacto" passHref>
                  <Button size="lg" variant="outline" className="text-lg">
                    Contactar
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right side illustration */}
            <motion.div
              className="flex-1 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-full h-[400px]">
                {/* Central API hub */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg z-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Server className="w-16 h-16 text-white" />
                </motion.div>

                {/* Connection lines */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow"></div>
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-2 border-dashed border-secondary/30 animate-spin-slow"
                  style={{ animationDirection: "reverse" }}
                ></div>

                {/* Orbiting elements */}
                <motion.div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg flex items-center justify-center animate-float"
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 20, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <Bot className="w-8 h-8 text-primary" />
                </motion.div>

                <motion.div
                  className="absolute bottom-0 left-1/4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg flex items-center justify-center animate-float"
                  animate={{
                    y: [0, 20, 0],
                    x: [0, -20, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 1,
                  }}
                >
                  <Code2 className="w-8 h-8 text-secondary" />
                </motion.div>

                <motion.div
                  className="absolute top-1/3 right-0 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg flex items-center justify-center animate-float"
                  animate={{
                    y: [0, 15, 0],
                    x: [0, -15, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 0.5,
                  }}
                >
                  <Zap className="w-8 h-8 text-yellow-500" />
                </motion.div>

                {/* Pulse effects */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full animate-pulse opacity-70"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
