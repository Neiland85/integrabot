import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Integrabot.net</h3>
            <p className="text-sm text-muted-foreground">
              Soluciones tecnológicas innovadoras con IA para impulsar tu negocio
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#servicios" className="hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-8 border-t text-sm text-muted-foreground">
          <p>© 2024 Integrabot.net. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/privacidad" className="hover:text-primary transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-primary transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

