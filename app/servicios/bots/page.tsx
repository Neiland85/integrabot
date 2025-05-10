import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BotsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Bots Inteligentes</h1>
      <p className="text-xl mb-8">
        Desarrollamos bots conversacionales avanzados que mejoran la interacción con tus clientes y automatizan tareas
        repetitivas, aumentando la eficiencia de tu negocio.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Características principales:</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Procesamiento de lenguaje natural avanzado</li>
        <li>Integración con múltiples plataformas de mensajería</li>
        <li>Aprendizaje continuo y mejora automática</li>
        <li>Personalización según la identidad de marca</li>
        <li>Análisis de conversaciones y reportes de rendimiento</li>
      </ul>
      <Link href="/contacto" passHref>
        <Button className="group">
          Solicitar una demostración
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
  )
}
