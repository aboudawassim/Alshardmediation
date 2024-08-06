import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import Link from "next/link";
import { Footer1 } from "./footer1";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12 relative">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-0">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">
            Al Shard For Commercial Mediation
          </h4>
          <p className="text-primary-foreground">
            Specialized mediation services in Doha, Qatar.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-primary-foreground hover:text-white"
              prefetch={false}
            >
              <Image
                src="./x-twitter-brands-solid.svg"
                className="h-6 w-6"
                alt="Twitter X Icon"
                width={32} // Ajustez cette valeur selon vos besoins
                height={32} // Ajustez cette valeur selon vos besoins
              />
            </Link>

            <Link
              href="https://www.linkedin.com/company/al-shard-for-commercial-mediation/"
              className="text-primary-foreground hover:text-white"
              prefetch={false}
            >
              <LinkedinIcon className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.instagram.com/alshardmediation/"
              className="text-primary-foreground hover:text-white"
              prefetch={false}
            >
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61563564631497"
              className="text-primary-foreground hover:text-white"
              prefetch={false}
            >
              <FacebookIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <nav className="grid gap-2">
            <Link href="#" className="hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#about" className="hover:underline" prefetch={false}>
              About Us
            </Link>
            <Link href="#services" className="hover:underline" prefetch={false}>
              Services
            </Link>
            <Link href="#partners" className="hover:underline" prefetch={false}>
              Partners
            </Link>
            <Link href="#contact" className="hover:underline" prefetch={false}>
              Contact Us
            </Link>
          </nav>
        </div>
        <div className="space-y-2 ">
          <h4 className="text-lg font-semibold">Services</h4>
          <nav className="grid gap-2 pb-16">
            <Link href="#" className="hover:underline" prefetch={false}>
              New Projects
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Existing Projects
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Mergers & Acquisitions
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Global Transactions
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Property Brokerage
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Dispute Resolution
            </Link>
          </nav>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Contact</h4>
          <div className="grid gap-2 text-primary-foreground">
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-6 w-6" />
              <span>P.O. Box 40532, Doha, Qatar</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-6 w-6" />
              <span>+974-44581341</span>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="h-6 w-6" />
              <span>info@alshardmediation.com</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-6 w-6" />
              <span>Sun-Thu: 9:00am - 6:00pm</span>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <Footer1 />
    </footer>
  );
}
