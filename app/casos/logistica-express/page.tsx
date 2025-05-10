"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Play, Pause, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function LogisticaExpressPage() {
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
        <h1 className="text-4xl font-bold mb-6">Automatización de procesos para empresa logística</h1>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <p className="text-lg mb-6">
              Una empresa líder en logística y transporte enfrentaba desafíos significativos con sus sistemas
              desconectados, lo que resultaba en retrasos, errores manuales y una experiencia de cliente deficiente.
            </p>

            <h2 className="text-2xl font-semibold mb-4">El desafío</h2>
            <p className="mb-6">
              La empresa operaba con múltiples sistemas aislados para gestión de inventario, seguimiento de envíos y
              facturación. Los empleados debían ingresar la misma información en diferentes plataformas, lo que
              generaba:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Tiempos de procesamiento prolongados (hasta 3 horas por pedido)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Alta tasa de errores en la entrada de datos (15%)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Visibilidad limitada del estado de los envíos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Dificultad para escalar operaciones</span>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Nuestra solución</h2>
            <p className="mb-6">Desarrollamos una solución de integración API RESTful personalizada que:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Conectó los sistemas de gestión de inventario, seguimiento y facturación</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Automatizó la transferencia de datos entre plataformas</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Implementó validaciones en tiempo real para prevenir errores</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Creó un panel unificado para visualizar todo el proceso logístico</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="relative rounded-lg overflow-hidden shadow-lg mb-6">
              <video
                ref={videoRef}
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Automatizacio%CC%81n%20de%20procesos%20para%20empresa%20logi%CC%81stica-broVf0MvHDEzoDwzuhFVXkDbqB5ZqG.mp4"
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
                    <p className="text-sm text-muted-foreground">Tiempo de procesamiento</p>
                    <p className="text-2xl font-bold text-primary">-70%</p>
                  </div>
                  <div className="h-12 w-[1px] bg-muted"></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Errores de datos</p>
                    <p className="text-2xl font-bold text-primary">-95%</p>
                  </div>
                  <div className="h-12 w-[1px] bg-muted"></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Satisfacción del cliente</p>
                    <p className="text-2xl font-bold text-primary">+40%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="mb-6">
              La implementación de nuestra solución API RESTful permitió a la empresa reducir drásticamente los tiempos
              de procesamiento de 3 horas a menos de 30 minutos, prácticamente eliminar los errores de entrada de datos
              y mejorar significativamente la experiencia del cliente con actualizaciones en tiempo real.
            </p>

            <p className="italic text-muted-foreground">
              "La solución de Integrabot transformó completamente nuestras operaciones. La integración perfecta entre
              nuestros sistemas nos ha permitido escalar el negocio sin aumentar proporcionalmente nuestro personal
              administrativo."
            </p>
            <p className="font-medium mt-2">— Carlos Rodríguez, Director de Operaciones</p>
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
