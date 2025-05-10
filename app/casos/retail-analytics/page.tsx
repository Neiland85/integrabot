"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Play, Pause, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function RetailAnalyticsPage() {
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
        <h1 className="text-4xl font-bold mb-6">Plataforma de análisis de datos para retail</h1>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <p className="text-lg mb-6">
              Una cadena de tiendas minoristas con presencia nacional necesitaba una solución para unificar y analizar
              datos de múltiples fuentes para mejorar su toma de decisiones y optimizar sus operaciones.
            </p>

            <h2 className="text-2xl font-semibold mb-4">El desafío</h2>
            <p className="mb-6">La empresa enfrentaba varios desafíos:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Datos dispersos en múltiples sistemas (POS, ERP, CRM, e-commerce)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Informes manuales que consumían tiempo y estaban propensos a errores</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Incapacidad para analizar tendencias en tiempo real</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Dificultad para predecir demanda y optimizar inventario</span>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Nuestra solución</h2>
            <p className="mb-6">Desarrollamos una plataforma de análisis de datos integral:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Integración API RESTful con todos los sistemas existentes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Data warehouse centralizado con actualización en tiempo real</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Dashboards personalizados para diferentes departamentos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Algoritmos predictivos para pronóstico de demanda</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Sistema de alertas para detectar anomalías y oportunidades</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="relative rounded-lg overflow-hidden shadow-lg mb-6">
              <video
                ref={videoRef}
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Plataforma%20de%20ana%CC%81lisis%20de%20datos%20para%20retail-hnOj8m8Nv69Yx8nC5N5slzBcZMGALn.mp4"
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
                  <div>
                    <p className="text-sm text-muted-foreground">Ventas</p>
                    <p className="text-2xl font-bold text-primary">+18%</p>
                  </div>
                  <div className="h-12 w-[1px] bg-muted"></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Inventario</p>
                    <p className="text-2xl font-bold text-primary">-25%</p>
                  </div>
                  <div className="h-12 w-[1px] bg-muted"></div>
                  <div>
                    <p className="text-sm text-muted-foreground">ROI</p>
                    <p className="text-2xl font-bold text-primary">320%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="mb-6">
              La implementación de la plataforma de análisis permitió a la empresa aumentar sus ventas en un 18% gracias
              a una mejor comprensión del comportamiento del cliente, reducir los niveles de inventario en un 25%
              manteniendo la disponibilidad de productos, y lograr un ROI del 320% en el primer año.
            </p>

            <p className="italic text-muted-foreground">
              "La plataforma de análisis de Integrabot ha transformado nuestra forma de operar. Ahora tomamos decisiones
              basadas en datos en tiempo real, lo que nos ha permitido ser mucho más ágiles y competitivos en un mercado
              cada vez más desafiante. La capacidad de predecir tendencias nos ha dado una ventaja significativa."
            </p>
            <p className="font-medium mt-2">— Javier Méndez, Director de Operaciones Retail</p>
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
