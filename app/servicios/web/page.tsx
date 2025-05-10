import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function WebPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Desarrollo Web</h1>
      <p className="text-xl mb-8">
        Creamos sitios web modernos, responsivos y optimizados que reflejan la identidad de tu marca y ofrecen una
        experiencia de usuario excepcional.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Tecnologías y características:</h2>
      <ul className="list-disc list-inside mb-8">
        <li>React y Next.js para rendimiento óptimo</li>
        <li>Diseño responsivo y accesible</li>
        <li>Optimización SEO avanzada</li>
        <li>Integración de CMS headless</li>
        <li>Análisis de rendimiento y optimización continua</li>
      </ul>
      <Link href="/contacto" passHref>
        <Button className="group">
          Solicitar presupuesto
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
  )
}
