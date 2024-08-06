import { BriefcaseIcon, GlobeIcon, HandshakeIcon, MergeIcon, PackageIcon, UsersIcon } from "lucide-react";
import Link from "next/link";


export function Services () { 
     
    return ( 
<section id="services" className="bg-muted py-16 px-6 md:px-10">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-background rounded-lg shadow-lg p-6">
        <GlobeIcon className="h-8 w-8 text-primary mb-4" />
        <h3 className="text-xl font-bold mb-2">Global Transactions</h3>
        <p className="text-muted-foreground mb-4">
          Leveraging our extensive international network, we facilitate seamless cross-border transactions, enabling clients to expand their reach and operations globally.
        </p>
        <Link href="#" className="text-primary font-medium hover:underline" prefetch={false}>
          Learn More
        </Link>
      </div>

      <div className="bg-background rounded-lg shadow-lg p-6">
        <HandshakeIcon className="h-8 w-8 text-primary mb-4" />
        <h3 className="text-xl font-bold mb-2">Dispute Resolution</h3>
        <p className="text-muted-foreground mb-4">
          Our seasoned mediators offer expert dispute resolution services, helping clients resolve commercial conflicts efficiently and amicably through negotiation and mediation.
        </p>
        <Link href="#" className="text-primary font-medium hover:underline" prefetch={false}>
          Learn More
        </Link>
      </div>
      <div className="bg-background rounded-lg shadow-lg p-6">
        <PackageIcon className="h-8 w-8 text-primary mb-4" />
        <h3 className="text-xl font-bold mb-2">Product Sourcing</h3>
        <p className="text-muted-foreground mb-4">
          Our dedicated team excels in sourcing high-quality products from reliable suppliers, ensuring your business consistently has access to the best materials and goods.
        </p>
        <Link href="#" className="text-primary font-medium hover:underline" prefetch={false}>
          Learn More
        </Link>
      </div>
      <div className="bg-background rounded-lg shadow-lg p-6">
        <UsersIcon className="h-8 w-8 text-primary mb-4" />
        <h3 className="text-xl font-bold mb-2">Strategic Partnerships</h3>
        <p className="text-muted-foreground mb-4">
          We facilitate strategic partnerships and connections, linking businesses with investors, collaborators, and key stakeholders to drive innovation and growth.
        </p>
        <Link href="#" className="text-primary font-medium hover:underline" prefetch={false}>
          Learn More
        </Link>
      </div>
      <div className="bg-background rounded-lg shadow-lg p-6">
        <BriefcaseIcon className="h-8 w-8 text-primary mb-4" />
        <h3 className="text-xl font-bold mb-2">Trade Facilitation</h3>
        <p className="text-muted-foreground mb-4">
          We provide expert guidance through the complexities of local and international trade, ensuring smooth operations and successful outcomes for your business.
        </p>
        <Link href="#" className="text-primary font-medium hover:underline" prefetch={false}>
          Learn More
        </Link>
      </div>
      <div className="bg-background rounded-lg shadow-lg p-6">
        <MergeIcon className="h-8 w-8 text-primary mb-4" />
        <h3 className="text-xl font-bold mb-2">Mergers & Acquisitions</h3>
        <p className="text-muted-foreground mb-4">
          Our M&A specialists provide in-depth support and advisory services to navigate complex merger and acquisition transactions, ensuring strategic and successful deals.
        </p>
        <Link href="#" className="text-primary font-medium hover:underline" prefetch={false}>
          Learn More
        </Link>
      </div>
    </div>
  </div>
</section>


    )
}

export default Services 