import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { MenuIcon, MountainIcon } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 bg-primary-foreground opacity-90 text-primary py-4 px-6 md:px-10 flex items-center justify-between">
      <Link href="#contact" prefetch={false}>
        <Button className="bg-primary text-primary-foreground">
          Get in Touch
        </Button>
      </Link>

      <div className="hidden md:flex items-center gap-6 ml-32 bg-green-500 rounded-bl-[50%] rounded-br-[50%] p-4">
        <nav className="flex items-center gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#partners"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Partners
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </div>
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <Image
          src="/Logo.svg"
          alt="Logo"
          width={32} // Ajustez cette valeur selon vos besoins
          height={32} // Ajustez cette valeur selon vos besoins
          className="h-8 w-64  " // Assurez-vous que ces classes correspondent à la taille désirée
        />
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-6 p-6">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Image
          src="/al-shard.svg"
          alt="al-shard"
          width={32} // Ajustez cette valeur selon vos besoins
          height={32} // Ajustez cette valeur selon vos besoins
          className="h-32 w-64  " // Assurez-vous que ces classes correspondent à la taille désirée
        />
            </Link>
            <nav className="grid gap-4">
              <Link href="#" className="text-primary text-lg font-medium" prefetch={false}>
                Home
              </Link>
              <Link href="#about" className="text-primary text-lg font-medium" prefetch={false}>
                About
              </Link>
              <Link href="#services" className="text-primary text-lg font-medium" prefetch={false}>
                Services
              </Link>
              <Link href="#partners" className="text-primary text-lg font-medium" prefetch={false}>
                Partners
              </Link>
              <Link href="#contact" className="text-primary text-lg font-medium" prefetch={false}>
                Contact
              </Link>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
