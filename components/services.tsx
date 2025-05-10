"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Globe, Cpu, Server, ArrowRight, Bot, Zap, Database } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Integración API RESTful",
    description: "Conectamos sistemas y automatizamos procesos mediante APIs RESTful personalizadas y seguras.",
    icon: Server,
    features: ["Endpoints personalizados", "Autenticación OAuth/JWT", "Documentación OpenAPI"],
    cta: "Conocer más",
    href: "/servicios/api-restful",
    color: "from-primary to-secondary",
  },
  {
    title: "Bots Inteligentes",
    description: "Desarrollamos bots conversacionales con IA para atención al cliente y automatización de tareas.",
    icon: Bot,
    features: [
      "Procesamiento de lenguaje natural",
      "Integración con plataformas de mensajería",
      "Aprendizaje continuo",
    ],
    cta: "Ver soluciones",
    href: "/servicios/bots",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Desarrollo Web",
    description: "Creamos sitios web modernos y responsivos utilizando las últimas tecnologías.",
    icon: Globe,
    features: ["Diseño UX/UI", "Optimización SEO", "Rendimiento optimizado"],
    cta: "Ver portfolio",
    href: "/servicios/web",
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "Aplicaciones Móviles",
    description: "Desarrollamos apps nativas y multiplataforma para iOS y Android.",
    icon: Smartphone,
    features: ["Experiencia de usuario fluida", "Notificaciones push", "Integración con APIs"],
    cta: "Ver ejemplos",
    href: "/servicios/movil",
    color: "from-orange-500 to-amber-400",
  },
  {
    title: "Soluciones de IA",
    description: "Implementamos soluciones inteligentes para optimizar procesos empresariales.",
    icon: Cpu,
    features: ["Análisis predictivo", "Procesamiento de datos", "Automatización inteligente"],
    cta: "Descubrir",
    href: "/servicios/ia",
    color: "from-purple-500 to-pink-400",
  },
  {
    title: "Bases de Datos",
    description: "Diseñamos e implementamos bases de datos escalables y eficientes para tus aplicaciones.",
    icon: Database,
    features: ["Modelado de datos", "Optimización de consultas", "Migración de datos"],
    cta: "Explorar",
    href: "/servicios/bases-datos",
    color: "from-red-500 to-rose-400",
  },
]

export function Services() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("servicios")
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
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos soluciones tecnológicas completas para impulsar tu negocio en la era digital
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className="h-full overflow-hidden group hover:shadow-lg transition-shadow border-t-4"
                style={{ borderImageSlice: 1, borderImageSource: `linear-gradient(to right, ${service.color})` }}
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Zap className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href={service.href} passHref>
                    <Button variant="ghost" className="group">
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
