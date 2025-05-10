import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function MovilPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Aplicaciones Móviles</h1>
      <p className="text-xl mb-8">
        Desarrollamos aplicaciones móviles nativas y multiplataforma que ofrecen una experiencia de usuario fluida y
        funcionalidades avanzadas para iOS y Android.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Características principales:</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Desarrollo nativo (Swift, Kotlin) y multiplataforma (React Native, Flutter)</li>
        <li>Diseño UX/UI centrado en el usuario</li>
        <li>Integración con APIs y servicios en la nube</li>
        <li>Implementación de funcionalidades offline</li>
        <li>Optimización de rendimiento y consumo de batería</li>
      </ul>
      <Link href="/contacto" passHref>
        <Button className="group">
          Discutir tu proyecto
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
  )
}
