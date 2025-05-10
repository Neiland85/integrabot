"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Pause } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    title: "Automatización de procesos para empresa logística",
    description:
      "Implementamos una solución de API RESTful que conectó los sistemas de gestión de inventario, seguimiento de envíos y facturación, reduciendo los tiempos de procesamiento en un 70%.",
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Automatizacio%CC%81n%20de%20procesos%20para%20empresa%20logi%CC%81stica-broVf0MvHDEzoDwzuhFVXkDbqB5ZqG.mp4",
    tags: ["API RESTful", "Automatización", "Logística"],
    link: "/casos/logistica-express",
  },
  {
    title: "Chatbot de atención al cliente para banco",
    description:
      "Desarrollamos un bot inteligente capaz de resolver el 85% de las consultas de los clientes sin intervención humana, mejorando la satisfacción del cliente y reduciendo costos operativos.",
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chatbot%20de%20atencio%CC%81n%20al%20cliente%20para%20banco-v0CeVwKmx22btP8gTO85rzZLqkmfYd.mp4",
    tags: ["Bot IA", "Banca", "Atención al Cliente"],
    link: "/casos/banco-digital",
  },
  {
    title: "Plataforma de análisis de datos para retail",
    description:
      "Creamos una solución que integra múltiples fuentes de datos a través de APIs, proporcionando insights en tiempo real sobre el comportamiento de los clientes y tendencias de ventas.",
    video:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Plataforma%20de%20ana%CC%81lisis%20de%20datos%20para%20retail-hnOj8m8Nv69Yx8nC5N5slzBcZMGALn.mp4",
    tags: ["Análisis de Datos", "API", "Retail"],
    link: "/casos/retail-analytics",
  },
]

export function CaseStudies() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeVideo, setActiveVideo] = useState<number | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("casos")
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

  const handleVideoPlay = (index: number) => {
    // Pause any currently playing video
    if (activeVideo !== null && activeVideo !== index) {
      const currentVideo = videoRefs.current[activeVideo]
      if (currentVideo) {
        currentVideo.pause()
      }
    }

    const video = videoRefs.current[index]
    if (video) {
      if (video.paused) {
        video.play()
        setActiveVideo(index)
      } else {
        video.pause()
        setActiveVideo(null)
      }
    }
  }

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
    <section id="casos" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Casos de Éxito</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo nuestras soluciones han transformado negocios en diferentes industrias
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {caseStudies.map((caseStudy, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={caseStudy.video}
                    className="absolute inset-0 w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    onClick={() => handleVideoPlay(index)}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity cursor-pointer"
                    onClick={() => handleVideoPlay(index)}
                  >
                    <div className="bg-white/80 rounded-full p-3 backdrop-blur-sm transition-transform hover:scale-110">
                      {activeVideo === index ? (
                        <Pause className="h-6 w-6 text-primary" />
                      ) : (
                        <Play className="h-6 w-6 text-primary" />
                      )}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs font-medium bg-primary/80 text-white px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{caseStudy.description}</p>
                  <Link href={caseStudy.link} passHref>
                    <Button variant="ghost" className="group/btn p-0">
                      Ver caso completo
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
