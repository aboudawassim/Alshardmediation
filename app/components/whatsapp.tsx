// components/WhatsAppButton.js

import Image from "next/image";

const WhatsApp = () => {
    const phoneNumber = '+97450706084'; // Replace with your full phone number
  const message = 'Hi, I would like to inquire about your services'; // Your default message
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
    >
        <Image
        src="/whatsapp.svg" // Path to your SVG file in the public folder
        alt="WhatsApp"
        className="w-8 h-8"
        width={8}
        height={8}
      />
    </a>
  );
};

  
export default WhatsApp;
