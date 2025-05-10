import { NextResponse } from "next/server"
import OpenAI from "openai"

// Configuración de OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Contexto para el asistente
const SYSTEM_PROMPT = `
Eres un asistente virtual especializado en servicios de integración API RESTful, desarrollo de bots inteligentes y soluciones tecnológicas.
Responde de manera concisa y profesional a las preguntas sobre los servicios de Integrabot.net.

Información sobre los servicios:
1. Integración API RESTful: Conectamos sistemas y automatizamos procesos mediante APIs RESTful personalizadas y seguras. Ofrecemos endpoints personalizados, autenticación OAuth/JWT y documentación OpenAPI.
2. Bots Inteligentes: Desarrollamos bots conversacionales con IA para atención al cliente y automatización de tareas. Utilizamos procesamiento de lenguaje natural y aprendizaje continuo.
3. Desarrollo Web: Creamos sitios web modernos y responsivos utilizando las últimas tecnologías como React, Next.js y TailwindCSS.
4. Aplicaciones Móviles: Desarrollamos apps nativas y multiplataforma para iOS y Android con experiencia de usuario fluida.
5. Soluciones de IA: Implementamos soluciones inteligentes para optimizar procesos empresariales mediante análisis predictivo y automatización.
`

export async function POST(req: Request) {
  try {
    // Verificar la clave API
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: "OpenAI API key no configurada" }, { status: 500 })
    }

    // Obtener la consulta del usuario
    const { query } = await req.json()

    if (!query || query.trim().length === 0) {
      return NextResponse.json({ error: "Por favor proporciona una consulta válida" }, { status: 400 })
    }

    // Realizar la consulta a OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: query },
      ],
      temperature: 0.7,
      max_tokens: 500,
    })

    // Extraer la respuesta
    const result = completion.choices[0].message?.content || "Lo siento, no pude procesar tu consulta."

    // Devolver la respuesta
    return NextResponse.json({ result })
  } catch (error: any) {
    console.error(`Error con la API de OpenAI: ${error.message}`)
    return NextResponse.json({ error: "Error al procesar la consulta" }, { status: 500 })
  }
}
