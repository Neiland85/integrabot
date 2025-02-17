"use client"

import { Button } from "@/components/ui/button"
import { Bot } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { MusicPlayer } from "@/components/music-player"

export function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("servicios")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    // Add any client-side only logic here
  }, [])

  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="container mx-auto px-4 py-32 relative">
        <div className="absolute top-4 right-4">
          <MusicPlayer />
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Bot className="w-12 h-12 text-primary" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Integrabot.net
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Desarrollo de Aplicaciones Inteligentes con IA
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transformamos ideas en soluciones tecnológicas innovadoras utilizando las últimas tecnologías en IA y
            desarrollo web.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button
              size="lg"
              variant="outline"
              className="text-lg w-full sm:w-auto hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={scrollToServices}
            >
              Nuestros Servicios
            </Button>
            <Link href="/contacto" passHref>
              <Button
                size="lg"
                className="text-lg w-full sm:w-auto hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                Contactar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

