import { notFound } from "next/navigation"
import { CaseStudyPage } from "@/components/case-study-page"

// Definimos los casos de éxito disponibles
const caseStudies = {
  "logistica-express": {
    title: "Automatización de procesos para empresa logística",
    videoUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Automatizacio%CC%81n%20de%20procesos%20para%20empresa%20logi%CC%81stica-broVf0MvHDEzoDwzuhFVXkDbqB5ZqG.mp4",
    challenge:
      "Una empresa líder en logística y transporte enfrentaba desafíos significativos con sus sistemas desconectados, lo que resultaba en retrasos, errores manuales y una experiencia de cliente deficiente.",
    solution:
      "Desarrollamos una solución de integración API RESTful personalizada que conectó los sistemas de gestión de inventario, seguimiento y facturación, automatizó la transferencia de datos entre plataformas, implementó validaciones en tiempo real para prevenir errores y creó un panel unificado para visualizar todo el proceso logístico.",
    results: {
      processing: "-70%",
      errors: "-95%",
      satisfaction: "+40%",
    },
    testimonial: {
      quote:
        "La solución de Integrabot transformó completamente nuestras operaciones. La integración perfecta entre nuestros sistemas nos ha permitido escalar el negocio sin aumentar proporcionalmente nuestro personal administrativo.",
      author: "Carlos Rodríguez, Director de Operaciones",
    },
    challengeDetails: [
      "Tiempos de procesamiento prolongados (hasta 3 horas por pedido)",
      "Alta tasa de errores en la entrada de datos (15%)",
      "Visibilidad limitada del estado de los envíos",
      "Dificultad para escalar operaciones",
    ],
    solutionDetails: [
      "Conectó los sistemas de gestión de inventario, seguimiento y facturación",
      "Automatizó la transferencia de datos entre plataformas",
      "Implementó validaciones en tiempo real para prevenir errores",
      "Creó un panel unificado para visualizar todo el proceso logístico",
    ],
  },
  "banco-digital": {
    title: "Chatbot de atención al cliente para banco",
    videoUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chatbot%20de%20atencio%CC%81n%20al%20cliente%20para%20banco-v0CeVwKmx22btP8gTO85rzZLqkmfYd.mp4",
    challenge:
      "Un banco digital en rápido crecimiento enfrentaba desafíos para mantener la calidad de su servicio al cliente mientras su base de usuarios se expandía exponencialmente.",
    solution:
      "Desarrollamos un bot conversacional inteligente con procesamiento de lenguaje natural avanzado, integración con los sistemas bancarios, capacidad para realizar transacciones básicas tras verificación de identidad, transferencia fluida a agentes humanos cuando sea necesario y aprendizaje continuo basado en interacciones.",
    results: {
      resolution: "85%",
      responseTime: "-90%",
      satisfaction: "+60%",
    },
    testimonial: {
      quote:
        "Nuestro chatbot no solo ha mejorado la eficiencia operativa, sino que ha transformado por completo la experiencia del cliente. Los usuarios valoran la respuesta instantánea y la precisión de la información, y nuestros agentes ahora pueden centrarse en casos más complejos que realmente requieren el toque humano.",
      author: "María González, Directora de Innovación Digital",
    },
    challengeDetails: [
      "Aumento del 300% en consultas de clientes en 6 meses",
      "Tiempos de espera prolongados (promedio de 15 minutos)",
      "Dificultad para contratar y capacitar agentes a la velocidad necesaria",
      "Consultas repetitivas que consumían recursos humanos valiosos",
    ],
    solutionDetails: [
      "Procesamiento de lenguaje natural avanzado para entender consultas complejas",
      "Integración con los sistemas bancarios para proporcionar información en tiempo real",
      "Capacidad para realizar transacciones básicas tras verificación de identidad",
      "Transferencia fluida a agentes humanos cuando sea necesario",
      "Aprendizaje continuo basado en interacciones para mejorar con el tiempo",
    ],
  },
  "retail-analytics": {
    title: "Plataforma de análisis de datos para retail",
    videoUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Plataforma%20de%20ana%CC%81lisis%20de%20datos%20para%20retail-hnOj8m8Nv69Yx8nC5N5slzBcZMGALn.mp4",
    challenge:
      "Una cadena de tiendas minoristas con presencia nacional necesitaba una solución para unificar y analizar datos de múltiples fuentes para mejorar su toma de decisiones y optimizar sus operaciones.",
    solution:
      "Desarrollamos una plataforma de análisis de datos integral con integración API RESTful con todos los sistemas existentes, data warehouse centralizado con actualización en tiempo real, dashboards personalizados para diferentes departamentos, algoritmos predictivos para pronóstico de demanda y sistema de alertas para detectar anomalías y oportunidades.",
    results: {
      sales: "+18%",
      inventory: "-25%",
      roi: "320%",
    },
    testimonial: {
      quote:
        "La plataforma de análisis de Integrabot ha transformado nuestra forma de operar. Ahora tomamos decisiones basadas en datos en tiempo real, lo que nos ha permitido ser mucho más ágiles y competitivos en un mercado cada vez más desafiante. La capacidad de predecir tendencias nos ha dado una ventaja significativa.",
      author: "Javier Méndez, Director de Operaciones Retail",
    },
    challengeDetails: [
      "Datos dispersos en múltiples sistemas (POS, ERP, CRM, e-commerce)",
      "Informes manuales que consumían tiempo y estaban propensos a errores",
      "Incapacidad para analizar tendencias en tiempo real",
      "Dificultad para predecir demanda y optimizar inventario",
    ],
    solutionDetails: [
      "Integración API RESTful con todos los sistemas existentes",
      "Data warehouse centralizado con actualización en tiempo real",
      "Dashboards personalizados para diferentes departamentos",
      "Algoritmos predictivos para pronóstico de demanda",
      "Sistema de alertas para detectar anomalías y oportunidades",
    ],
  },
}

// Página dinámica para cada caso de éxito
export default function CaseStudy({ params }: { params: { slug: string } }) {
  const { slug } = params

  // Verificar si el caso de éxito existe
  if (!caseStudies[slug as keyof typeof caseStudies]) {
    notFound()
  }

  // Obtener los datos del caso de éxito
  const caseStudy = caseStudies[slug as keyof typeof caseStudies]

  return <CaseStudyPage caseStudy={caseStudy} />
}

// Generar rutas estáticas para los casos de éxito
export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}
