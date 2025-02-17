"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("Enviando...")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (response.ok) {
        setStatus("Mensaje enviado con éxito")
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setStatus("Error al enviar el mensaje")
      }
    } catch (error) {
      setStatus("Error al enviar el mensaje")
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Contacto</h1>
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Nombre
            </label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Mensaje
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tu mensaje"
              rows={5}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Enviar mensaje
          </Button>
        </form>
        {status && <p className="mt-4 text-center">{status}</p>}
      </div>
    </div>
  )
}

