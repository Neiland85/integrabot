import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Smartphone, Globe, Cpu } from "lucide-react"

const services = [
  {
    title: "Desarrollo Web",
    description: "Creamos sitios web modernos y responsivos utilizando las últimas tecnologías.",
    icon: Globe,
  },
  {
    title: "Aplicaciones Móviles",
    description: "Desarrollamos apps nativas y multiplataforma para iOS y Android.",
    icon: Smartphone,
  },
  {
    title: "Integración de APIs",
    description: "Conectamos sistemas y automatizamos procesos mediante APIs personalizadas.",
    icon: Code2,
  },
  {
    title: "Soluciones de IA",
    description: "Implementamos soluciones inteligentes para optimizar procesos empresariales.",
    icon: Cpu,
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos soluciones tecnológicas completas para impulsar tu negocio
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

