"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export function HeroVideo() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const playerRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)

    // Función para cargar el API de YouTube
    const loadYouTubeAPI = () => {
      // Si ya existe el script, no lo volvemos a cargar
      if (document.getElementById("youtube-api")) return

      const tag = document.createElement("script")
      tag.id = "youtube-api"
      tag.src = "https://www.youtube.com/iframe_api"
      const firstScriptTag = document.getElementsByTagName("script")[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
    }

    // Función para inicializar el reproductor
    const initializePlayer = () => {
      if (typeof window !== "undefined" && window.YT && window.YT.Player) {
        try {
          playerRef.current = new window.YT.Player("youtube-hero-player", {
            videoId: "q1id-zgPlPo",
            playerVars: {
              autoplay: 0,
              controls: 0,
              disablekb: 1,
              fs: 0,
              rel: 0,
              modestbranding: 1,
              showinfo: 0,
              mute: 1,
              loop: 1,
              playlist: "q1id-zgPlPo", // Necesario para el loop
            },
            events: {
              onReady: (event) => {
                console.log("YouTube player is ready")
                setIsLoaded(true)
              },
              onStateChange: (event) => {
                setIsPlaying(event.data === window.YT.PlayerState.PLAYING)
              },
              onError: (event) => {
                console.error("YouTube player error:", event.data)
              },
            },
          })
        } catch (error) {
          console.error("Error initializing YouTube player:", error)
        }
      } else {
        // Si la API aún no está lista, intentamos de nuevo en 100ms
        setTimeout(initializePlayer, 100)
      }
    }

    // Cargar la API de YouTube
    loadYouTubeAPI()

    // Configurar el callback para cuando la API esté lista
    if (typeof window !== "undefined") {
      window.onYouTubeIframeAPIReady = () => {
        console.log("YouTube API is ready")
        initializePlayer()
      }

      // Si la API ya está cargada, inicializamos el reproductor directamente
      if (window.YT && window.YT.Player) {
        initializePlayer()
      }
    }

    // Limpieza al desmontar el componente
    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy()
      }
    }
  }, [])

  const togglePlay = () => {
    if (!playerRef.current) return

    try {
      if (isPlaying) {
        playerRef.current.pauseVideo()
      } else {
        playerRef.current.playVideo()
      }
    } catch (error) {
      console.error("Error toggling play state:", error)
    }
  }

  const toggleMute = () => {
    if (!playerRef.current) return

    try {
      if (isMuted) {
        playerRef.current.unMute()
        setIsMuted(false)
      } else {
        playerRef.current.mute()
        setIsMuted(true)
      }
    } catch (error) {
      console.error("Error toggling mute state:", error)
    }
  }

  // Fallback para cuando el video no se carga
  const handlePlayFallback = () => {
    window.open("https://www.youtube.com/watch?v=q1id-zgPlPo", "_blank")
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video container */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <div id="youtube-hero-player" className="w-full h-full"></div>

        {/* Fallback background para cuando el video no carga */}
        {!isLoaded && <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30"></div>}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 pointer-events-none"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
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

        {/* Video controls */}
        <div className="flex items-center space-x-4 mt-8">
          <button
            onClick={isLoaded ? togglePlay : handlePlayFallback}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
            aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
          >
            {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white ml-1" />}
          </button>

          {isLoaded && (
            <button
              onClick={toggleMute}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
              aria-label={isMuted ? "Activar sonido" : "Silenciar"}
            >
              {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
            </button>
          )}
        </div>

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
