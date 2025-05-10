"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Play, Pause, CheckCircle } from "lucide-react"
import Link from "next/link"

type CaseStudyProps = {
  title: string
  videoUrl: string
  challenge: string
  solution: string
  results: Record<string, string>
  testimonial: {
    quote: string
    author: string
  }
  challengeDetails: string[]
  solutionDetails: string[]
}

export function CaseStudyPage({ caseStudy }: { caseStudy: CaseStudyProps }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  // Determinar las etiquetas de resultados basadas en las claves
  const getResultLabel = (key: string) => {
    switch (key) {
      case "processing":
        return "Tiempo de procesamiento"
      case "errors":
        return "Errores de datos"
      case "satisfaction":
        return "Satisfacción del cliente"
      case "resolution":
        return "Resolución automática"
      case "responseTime":
        return "Tiempo de respuesta"
      case "sales":
        return "Ventas"
      case "inventory":
        return "Inventario"
      case "roi":
        return "ROI"
      default:
        return key
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Link href="/#casos" className="inline-flex items-center text-primary hover:underline mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Volver a casos de éxito
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6">{caseStudy.title}</h1>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <p className="text-lg mb-6">{caseStudy.challenge}</p>

            <h2 className="text-2xl font-semibold mb-4">El desafío</h2>
            <p className="mb-6">La empresa enfrentaba varios desafíos:</p>
            <ul className="space-y-2 mb-6">
              {caseStudy.challengeDetails.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Nuestra solución</h2>
            <p className="mb-6">Desarrollamos una solución integral:</p>
            <ul className="space-y-2 mb-6">
              {caseStudy.solutionDetails.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="relative rounded-lg overflow-hidden shadow-lg mb-6">
              <video
                ref={videoRef}
                src={caseStudy.videoUrl}
                className="w-full h-auto"
                loop
                playsInline
                onClick={handleVideoPlay}
              />
              <div
                className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity cursor-pointer ${isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
                onClick={handleVideoPlay}
              >
                <div className="bg-white/80 rounded-full p-4 backdrop-blur-sm transition-transform hover:scale-110">
                  {isPlaying ? <Pause className="h-8 w-8 text-primary" /> : <Play className="h-8 w-8 text-primary" />}
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Resultados</h2>
            <Card className="mb-4">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  {Object.entries(caseStudy.results).map(([key, value], index, array) => (
                    <div key={key}>
                      <p className="text-sm text-muted-foreground">{getResultLabel(key)}</p>
                      <p className="text-2xl font-bold text-primary">{value}</p>
                      {index < array.length - 1 && (
                        <div className="h-12 w-[1px] bg-muted absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <p className="mb-6">{caseStudy.solution}</p>

            <p className="italic text-muted-foreground">{caseStudy.testimonial.quote}</p>
            <p className="font-medium mt-2">— {caseStudy.testimonial.author}</p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contacto" passHref>
            <Button size="lg" className="group">
              ¿Quieres una solución similar?
              <ArrowLeft className="ml-2 h-5 w-5 rotate-180 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
