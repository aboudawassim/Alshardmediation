import { ClockIcon, FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon, XIcon } from "lucide-react";
import Link from "next/link";

export function Footer1() {
  return (
<div className="w-full bg-muted py-4 mt-8 text-center text-muted-foreground absolute bottom-0">
  <p className="text-sm mb-2">&copy; {new Date().getFullYear()} Al Shard Mediation. All rights reserved.</p>
  <p className="text-xs">
    Designed & developed by &nbsp;  
    <a 
      href="https://www.linkedin.com/in/abouda-mdwassim" 
      className="text-black font-semibold hover:text-white" 
      target="_blank" 
      rel="noopener noreferrer"
    >
        Wassim Abouda
    </a>
  </p>
</div>

  
  );
}
