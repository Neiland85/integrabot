import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function IaPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Soluciones de IA</h1>
      <p className="text-xl mb-8">
        Implementamos soluciones de Inteligencia Artificial avanzadas para optimizar procesos, mejorar la toma de
        decisiones y crear nuevas oportunidades de negocio.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Áreas de aplicación:</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Análisis predictivo y prescriptivo</li>
        <li>Procesamiento de lenguaje natural</li>
        <li>Visión por computadora</li>
        <li>Sistemas de recomendación</li>
        <li>Automatización de procesos con machine learning</li>
      </ul>
      <Link href="/contacto" passHref>
        <Button className="group">
          Explorar posibilidades de IA
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
  )
}
