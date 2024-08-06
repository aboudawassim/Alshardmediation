import { StarIcon } from "lucide-react";
import { Card } from "./ui/card";
import Image from "next/image";

export function Partners() {
  return (
    <section id="partners" className="py-16 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Partners</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/placeholder.svg"
                width={48}
                height={48}
                alt="Partner"
                className="rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold">Wassim Abouda</h3>
                <p className="text-muted-foreground">CEO, Acme Inc.</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Al Shard Mediation has been an invaluable partner in helping us
              expand our business into the Qatari market. Their expertise and
              connections have been instrumental in securing new suppliers and
              finding the right investment opportunities.
            </p>
            <div className="flex items-center gap-2">
              <StarIcon className="h-5 w-5 text-primary" />
              <StarIcon className="h-5 w-5 text-primary" />
              <StarIcon className="h-5 w-5 text-primary" />
              <StarIcon className="h-5 w-5 text-primary" />
              <StarIcon className="h-5 w-5 text-primary" />
            </div>
          </Card>
          <Card className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/placeholder.svg"
                width={48}
                height={48}
                alt="Partner"
                className="rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold"> Wassim Abouda</h3>
                <p className="text-muted-foreground">CTO, Global Corp.</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Working with Al Shard Mediation has been a game-changer for our
              business. Their team&apos;s deep understanding of the Qatari market and
              their ability to connect us with the right partners has been
              instrumental in our success.
            </p>
            <div className="flex items-center gap-2">
              <StarIcon className="h-5 w-5 text-primary" />
              <StarIcon className="h-5 w-5 text-primary" />
              <StarIcon className="h-5 w-5 text-primary" />
              <StarIcon className="h-5 w-5 text-primary" />
              <StarIcon className="h-5 w-5 text-muted-foreground" />
            </div>
          </Card>
          <Card className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/placeholder.svg"
                width={48}
                height={48}
                alt="Partner"
                className="rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold"> Wassim Abouda </h3>
                <p className="text-muted-foreground">COO, Mega Corp.</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Al Shard Mediation has been an invaluable partner in helping us
              secure high-quality products and connect with potential investors.
              Their team&apos;s expertise and attention to detail have been crucial
              to the success of our operations in Qatar.
            </p>
            <div className="flex items-center gap-2">
              <StarIcon className="h-5 w-5 text-primary" />
              <StarIcon className="h-5 w-5 text-primary" />
              <StarIcon className="h-5 w-5 text-primary" />
              <StarIcon className="h-5 w-5 text-primary" />
              <StarIcon className="h-5 w-5 text-primary" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
