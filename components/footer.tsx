import Link from "next/link"
import { Bot, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Bot className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold">Integrabot.net</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Soluciones tecnológicas innovadoras con IA para impulsar tu negocio en la era digital
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/servicios/api-restful"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Integración API RESTful
                </Link>
              </li>
              <li>
                <Link href="/servicios/bots" className="text-muted-foreground hover:text-primary transition-colors">
                  Bots Inteligentes
                </Link>
              </li>
              <li>
                <Link href="/servicios/web" className="text-muted-foreground hover:text-primary transition-colors">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link href="/servicios/movil" className="text-muted-foreground hover:text-primary transition-colors">
                  Aplicaciones Móviles
                </Link>
              </li>
              <li>
                <Link href="/servicios/ia" className="text-muted-foreground hover:text-primary transition-colors">
                  Soluciones de IA
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre-nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/casos" className="text-muted-foreground hover:text-primary transition-colors">
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-primary flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>Neil Muñoz (Ceo - Code Architect): +34 613 722 441</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Integrabot.net. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/privacidad" className="hover:text-primary transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-primary transition-colors">
              Términos de Servicio
            </Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
