
import { Button } from "@/components/ui/button"
import Services from "./services"
import Values from "./values"
import { Vision } from "./vision"
import { Partners } from "./partners"
import { Contact } from "./contact"
import { About } from "./about"
import Link from "next/link"

export function Container() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="bg-[#001F54]  py-20 px-6 md:px-10 text-center text-primary-foreground">
          <h1 className="text-4xl font-bold mb-4">Connecting Businesses, Securing Opportunities</h1>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Al Shard For Commercial Mediation is a specialized mediation service provider based in Doha, Qatar, dedicated to
            facilitating local and international trade, securing products, and connecting businesses with partners and
            investors.
          </p>
          <Link href="#services" className="text-primary-foreground hover:text-white" prefetch={false}>

          <Button variant="secondary">Explore Our Services</Button>

          </Link>
        </section>
       
        <About/>
        <Vision/>
        <Values/>
        <Services/>
        <Partners/>
        <Contact/>
    
      </main>

    </div>
  )
}


export default Container;