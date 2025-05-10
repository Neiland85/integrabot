import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { ApiIntegration } from "@/components/api-integration"
import { Testimonials } from "@/components/testimonials"
import { CaseStudies } from "@/components/case-studies"
import { AiSearch } from "@/components/ai-search"
import { HeroVideoIframe } from "@/components/hero-video-iframe"

export default function Home() {
  return (
    <>
      <HeroVideoIframe />
      <Hero />
      <Services />
      <ApiIntegration />
      <Testimonials />
      <CaseStudies />
      <AiSearch />
    </>
  )
}
