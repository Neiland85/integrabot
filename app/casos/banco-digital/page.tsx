"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Play, Pause, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function BancoDigitalPage() {
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
        <h1 className="text-4xl font-bold mb-6">Chatbot de atención al cliente para banco</h1>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <p className="text-lg mb-6">
              Un banco digital en rápido crecimiento enfrentaba desafíos para mantener la calidad de su servicio al
              cliente mientras su base de usuarios se expandía exponencialmente.
            </p>

            <h2 className="text-2xl font-semibold mb-4">El desafío</h2>
            <p className="mb-6">El banco experimentaba:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Aumento del 300% en consultas de clientes en 6 meses</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Tiempos de espera prolongados (promedio de 15 minutos)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Dificultad para contratar y capacitar agentes a la velocidad necesaria</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Consultas repetitivas que consumían recursos humanos valiosos</span>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Nuestra solución</h2>
            <p className="mb-6">Desarrollamos un bot conversacional inteligente con las siguientes características:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Procesamiento de lenguaje natural avanzado para entender consultas complejas</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Integración con los sistemas bancarios para proporcionar información en tiempo real</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Capacidad para realizar transacciones básicas tras verificación de identidad</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Transferencia fluida a agentes humanos cuando sea necesario</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Aprendizaje continuo basado en interacciones para mejorar con el tiempo</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="relative rounded-lg overflow-hidden shadow-lg mb-6">
              <video
                ref={videoRef}
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chatbot%20de%20atencio%CC%81n%20al%20cliente%20para%20banco-v0CeVwKmx22btP8gTO85rzZLqkmfYd.mp4"
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
                    <p className="text-sm text-muted-foreground">Resolución automática</p>
                    <p className="text-2xl font-bold text-primary">85%</p>
                  </div>
                  <div className="h-12 w-[1px] bg-muted"></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Tiempo de respuesta</p>
                    <p className="text-2xl font-bold text-primary">-90%</p>
                  </div>
                  <div className="h-12 w-[1px] bg-muted"></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Satisfacción</p>
                    <p className="text-2xl font-bold text-primary">+60%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="mb-6">
              El chatbot inteligente ahora maneja el 85% de todas las consultas sin intervención humana, ha reducido el
              tiempo de respuesta de 15 minutos a menos de 10 segundos, y ha mejorado significativamente la satisfacción
              del cliente según las encuestas posteriores al servicio.
            </p>

            <p className="italic text-muted-foreground">
              "Nuestro chatbot no solo ha mejorado la eficiencia operativa, sino que ha transformado por completo la
              experiencia del cliente. Los usuarios valoran la respuesta instantánea y la precisión de la información, y
              nuestros agentes ahora pueden centrarse en casos más complejos que realmente requieren el toque humano."
            </p>
            <p className="font-medium mt-2">— María González, Directora de Innovación Digital</p>
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
