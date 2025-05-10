"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Bot, Loader2 } from "lucide-react"

export function AiSearchWithOpenAI() {
  const [query, setQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [searchResult, setSearchResult] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("ai-search")
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!query.trim()) return

    setIsSearching(true)
    setSearchResult("")

    try {
      const response = await fetch("/api/ai-search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      })

      if (!response.ok) {
        throw new Error("Error al procesar la consulta")
      }

      const data = await response.json()
      setSearchResult(data.result)
    } catch (error) {
      setSearchResult("Lo siento, ha ocurrido un error al procesar tu consulta. Por favor, intenta nuevamente.")
    } finally {
      setIsSearching(false)
    }
  }

  const handleFocus = () => {
    setIsExpanded(true)
  }

  return (
    <section id="ai-search" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center space-x-2 bg-primary/10 px-3 py-1 rounded-full text-primary mb-4">
            <Bot className="w-5 h-5" />
            <span className="text-sm font-medium">Asistente IA</span>
          </div>

          <h2 className="text-3xl font-bold mb-4">¿Tienes preguntas sobre nuestros servicios?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Nuestro asistente con IA puede responder tus dudas sobre integración API RESTful, desarrollo de bots y más
          </p>

          <motion.div
            className={`relative bg-background rounded-xl shadow-lg transition-all duration-300 ${
              isExpanded ? "p-6" : "p-4"
            }`}
            animate={{
              height: isExpanded || searchResult ? "auto" : "auto",
            }}
          >
            <form onSubmit={handleSearch} className="relative">
              <Input
                ref={inputRef}
                type="text"
                placeholder="Pregunta sobre nuestros servicios..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={handleFocus}
                className={`pr-12 transition-all duration-300 ${isExpanded ? "text-lg py-6" : "text-base"}`}
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1/2 transform -translate-y-1/2"
                disabled={isSearching || !query.trim()}
              >
                {isSearching ? <Loader2 className="h-5 w-5 animate-spin" /> : <Search className="h-5 w-5" />}
              </Button>
            </form>

            <AnimatePresence>
              {searchResult && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6"
                >
                  <Card>
                    <CardContent className="p-4 text-left">
                      <div className="flex items-start">
                        <div className="bg-primary/10 p-2 rounded-full mr-3">
                          <Bot className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-primary mb-1">Asistente IA</p>
                          <p>{searchResult}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-4 text-xs text-muted-foreground text-center">
              Prueba preguntas como "¿Qué es una API RESTful?" o "¿Cómo pueden ayudarme los bots?"
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
