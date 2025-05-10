"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function HeroVideoIframe() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video container */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <iframe
          src="https://www.youtube.com/embed/q1id-zgPlPo?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=q1id-zgPlPo&modestbranding=1"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Integrabot Video"
        ></iframe>

        {/* Overlay gradient - ajustado para ser más transparente en el centro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/70 pointer-events-none"></div>
      </div>

      {/* Content - movido más arriba */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-start h-full text-white text-center px-4 pt-32 md:pt-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
          Transformamos ideas en soluciones tecnológicas innovadoras
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-200">
          Potencia tu negocio con nuestras soluciones de integración API RESTful e inteligencia artificial
        </p>

        {/* Ver video completo */}
        <a
          href="https://www.youtube.com/watch?v=q1id-zgPlPo"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-colors"
        >
          Ver video completo
        </a>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-gray-300 mb-2">Descubre más</span>
          <motion.div
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
