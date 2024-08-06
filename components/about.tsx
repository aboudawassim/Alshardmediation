import { Button } from "./ui/button";
import Image from "next/image";
import  Link  from "next/link";

export function About() {
  return (
    <section id="about" className="py-16 px-6 md:px-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-muted-foreground mb-4">
            Al Shard was founded in Doha, Qatar in 2024 with the mission of
            facilitating successful trade agreements and partnerships between
            businesses around the world. Our team of experienced mediators and
            industry experts work tirelessly to connect companies, secure
            reliable supply chains, and unlock new growth opportunities. We are
            committed to upholding the highest standards of integrity,
            transparency, and professionalism in all our dealings. Our goal is
            to build lasting relationships and create value for our clients
            through our comprehensive suite of mediation services.
          </p>
          <p className="text-muted-foreground mb-4">
            We pride ourselves on our deep understanding of the Qatari market,
            our extensive network of industry contacts, and our commitment to
            delivering exceptional service to our clients. Whether you&apos;re
            looking to expand your business, secure new suppliers, or explore
            investment opportunities, we&apos;re here to help.
          </p>
          <Link
            href="#vision"
            className="text-primary font-medium hover:underline"
          >
            <Button> Learn More</Button>
          </Link>
           
         
        </div>
        <Image
          src="/IMG_5497.JPG"
          width={500}
          height={400}
          alt="About Us"
          className="rounded-lg object-cover"
        />
      </div>
    </section>
  );
}
