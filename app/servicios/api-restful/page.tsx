"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Server, Shield, Zap, Code, FileJson, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ApiRestfulPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      title: "Endpoints Personalizados",
      description:
        "Diseñamos y desarrollamos endpoints específicos para tus necesidades de negocio, garantizando una integración perfecta con tus sistemas existentes.",
      icon: Server,
    },
    {
      title: "Seguridad Avanzada",
      description:
        "Implementamos protocolos de seguridad robustos como OAuth 2.0, JWT y HTTPS para proteger tus datos y transacciones.",
      icon: Shield,
    },
    {
      title: "Alto Rendimiento",
      description:
        "Optimizamos cada endpoint para garantizar tiempos de respuesta rápidos y una experiencia fluida, incluso con grandes volúmenes de datos.",
      icon: Zap,
    },
    {
      title: "Documentación Completa",
      description:
        "Proporcionamos documentación detallada con OpenAPI/Swagger para facilitar la integración y el mantenimiento de tu API.",
      icon: FileJson,
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6">Integración API RESTful</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Conecta sistemas, automatiza procesos y potencia tu negocio con nuestras soluciones de API RESTful
              personalizadas
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="group">
                Solicitar Consulta
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Ver Documentación Técnica
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4">Características Principales</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nuestras APIs RESTful están diseñadas con los más altos estándares de calidad y seguridad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-4">Cómo Funciona</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explora el proceso de integración API RESTful y cómo puede beneficiar a tu negocio
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Tabs defaultValue="architecture" className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="architecture">Arquitectura</TabsTrigger>
                <TabsTrigger value="implementation">Implementación</TabsTrigger>
                <TabsTrigger value="integration">Integración</TabsTrigger>
              </TabsList>

              <TabsContent value="architecture" className="space-y-6">
                <div className="bg-background rounded-lg p-6 shadow-sm border">
                  <h3 className="text-xl font-bold mb-4">Arquitectura API RESTful</h3>
                  <div className="relative h-[300px] mb-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full max-w-md">
                        {/* Diagrama simplificado de arquitectura */}
                        <div className="relative h-[250px] bg-muted/50 rounded-lg p-4">
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg z-20">
                            <Server className="w-10 h-10 text-white" />
                          </div>

                          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-background rounded-lg flex items-center justify-center shadow-md">
                            <Code className="w-8 h-8 text-primary" />
                          </div>

                          <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-background rounded-lg flex items-center justify-center shadow-md">
                            <FileJson className="w-8 h-8 text-secondary" />
                          </div>

                          <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-background rounded-lg flex items-center justify-center shadow-md">
                            <Shield className="w-8 h-8 text-green-500" />
                          </div>

                          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-background rounded-lg flex items-center justify-center shadow-md">
                            <Zap className="w-8 h-8 text-yellow-500" />
                          </div>

                          {/* Líneas de conexión */}
                          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 10 }}>
                            <line
                              x1="50%"
                              y1="50%"
                              x2="25%"
                              y2="25%"
                              stroke="#6366F1"
                              strokeWidth="2"
                              strokeDasharray="5,5"
                            />
                            <line
                              x1="50%"
                              y1="50%"
                              x2="75%"
                              y2="25%"
                              stroke="#6366F1"
                              strokeWidth="2"
                              strokeDasharray="5,5"
                            />
                            <line
                              x1="50%"
                              y1="50%"
                              x2="25%"
                              y2="75%"
                              stroke="#6366F1"
                              strokeWidth="2"
                              strokeDasharray="5,5"
                            />
                            <line
                              x1="50%"
                              y1="50%"
                              x2="75%"
                              y2="75%"
                              stroke="#6366F1"
                              strokeWidth="2"
                              strokeDasharray="5,5"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="mb-4">
                    Nuestra arquitectura API RESTful sigue los principios de diseño REST (Representational State
                    Transfer) para crear interfaces de programación de aplicaciones escalables y mantenibles.
                  </p>

                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="bg-primary/10 p-1 rounded-full mr-2">
                        <Server className="w-4 h-4 text-primary" />
                      </span>
                      <span>
                        <strong>Servidor API Central:</strong> Gestiona todas las solicitudes y respuestas,
                        implementando la lógica de negocio.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/10 p-1 rounded-full mr-2">
                        <Code className="w-4 h-4 text-primary" />
                      </span>
                      <span>
                        <strong>Endpoints RESTful:</strong> Interfaces bien definidas que siguen convenciones HTTP
                        estándar.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/10 p-1 rounded-full mr-2">
                        <FileJson className="w-4 h-4 text-primary" />
                      </span>
                      <span>
                        <strong>Formato JSON:</strong> Intercambio de datos ligero y fácil de procesar para clientes y
                        servidores.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/10 p-1 rounded-full mr-2">
                        <Shield className="w-4 h-4 text-primary" />
                      </span>
                      <span>
                        <strong>Capa de Seguridad:</strong> Autenticación y autorización robustas para proteger los
                        recursos.
                      </span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="implementation" className="space-y-6">
                <div className="bg-background rounded-lg p-6 shadow-sm border">
                  <h3 className="text-xl font-bold mb-4">Implementación Técnica</h3>

                  <div className="mb-6 overflow-x-auto">
                    <pre className="bg-muted p-4 rounded-lg text-sm">
                      <code>
                        {`// Ejemplo de endpoint RESTful
app.get('/api/v1/products', async (req, res) => {
  try {
    const { category, limit = 10, page = 1 } = req.query;
    
    // Aplicar filtros y paginación
    const products = await ProductModel.find(
      category ? { category } : {}
    )
    .limit(Number(limit))
    .skip((Number(page) - 1) * Number(limit))
    .sort({ createdAt: -1 });
    
    // Respuesta estructurada
    res.status(200).json({
      success: true,
      count: products.length,
      pagination: {
        page: Number(page),
        limit: Number(limit)
      },
      data: products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error del servidor'
    });
  }
});`}
                      </code>
                    </pre>
                  </div>

                  <p className="mb-4">
                    Nuestra implementación técnica utiliza las mejores prácticas para crear APIs RESTful robustas y
                    eficientes:
                  </p>

                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="bg-primary/10 p-1 rounded-full mr-2">
                        <Code className="w-4 h-4 text-primary" />
                      </span>
                      <span>
                        <strong>Métodos HTTP:</strong> Utilizamos GET, POST, PUT, PATCH y DELETE de manera semántica.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/10 p-1 rounded-full mr-2">
                        <FileJson className="w-4 h-4 text-primary" />
                      </span>
                      <span>
                        <strong>Respuestas Estructuradas:</strong> Formato consistente para facilitar el procesamiento
                        por parte del cliente.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/10 p-1 rounded-full mr-2">
                        <Zap className="w-4 h-4 text-primary" />
                      </span>
                      <span>
                        <strong>Optimización de Rendimiento:</strong> Implementación de caché, paginación y filtrado
                        eficiente.
                      </span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="integration" className="space-y-6">
                <div className="bg-background rounded-lg p-6 shadow-sm border">
                  <h3 className="text-xl font-bold mb-4">Integración con Sistemas Existentes</h3>

                  <div className="relative h-[200px] mb-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full max-w-md">
                        {/* Diagrama de integración */}
                        <div className="flex justify-between items-center">
                          <div className="w-24 h-24 bg-background rounded-lg flex items-center justify-center shadow-md border">
                            <span className="text-sm font-medium text-center">Sistema Existente</span>
                          </div>

                          <div className="w-24 text-center">
                            <svg width="100%" height="2">
                              <line
                                x1="0"
                                y1="0"
                                x2="100%"
                                y2="0"
                                stroke="#6366F1"
                                strokeWidth="2"
                                strokeDasharray="5,5"
                              />
                            </svg>
                            <div className="mt-2 text-xs text-muted-foreground">API RESTful</div>
                          </div>

                          <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-md">
                            <Server className="w-10 h-10 text-white" />
                          </div>

                          <div className="w-24 text-center">
                            <svg width="100%" height="2">
                              <line
                                x1="0"
                                y1="0"
                                x2="100%"
                                y2="0"
                                stroke="#6366F1"
                                strokeWidth="2"
                                strokeDasharray="5,5"
                              />
                            </svg>
                            <div className="mt-2 text-xs text-muted-foreground">API RESTful</div>
                          </div>

                          <div className="w-24 h-24 bg-background rounded-lg flex items-center justify-center shadow-md border">
                            <span className="text-sm font-medium text-center">Nuevo Sistema</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="mb-4">
                    Nuestro enfoque de integración garantiza una transición suave y una comunicación eficiente entre
                    sistemas:
                  </p>

                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="bg-primary/10 p-1 rounded-full mr-2">
                        <Server className="w-4 h-4 text-primary" />
                      </span>
                      <span>
                        <strong>Adaptadores Personalizados:</strong> Desarrollamos conectores específicos para tus
                        sistemas existentes.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/10 p-1 rounded-full mr-2">
                        <Code className="w-4 h-4 text-primary" />
                      </span>
                      <span>
                        <strong>Transformación de Datos:</strong> Convertimos formatos de datos entre sistemas para
                        garantizar la compatibilidad.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/10 p-1 rounded-full mr-2">
                        <Zap className="w-4 h-4 text-primary" />
                      </span>
                      <span>
                        <strong>Sincronización en Tiempo Real:</strong> Mantenemos la consistencia de datos entre
                        sistemas conectados.
                      </span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">¿Listo para potenciar tu negocio con APIs inteligentes?</h2>
            <p className="text-xl opacity-90 mb-8">
              Nuestro equipo de expertos está preparado para diseñar e implementar la solución API RESTful perfecta para
              tus necesidades
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contacto" passHref>
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 group">
                  Solicitar Presupuesto
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Agendar Demostración
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
