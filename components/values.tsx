// components/ValuesSection.js
import { Shield, Briefcase, Lock, Scale } from "lucide-react";

const values = [
  {
    title: "Integrity",
    description:
      "We adhere to the highest standards of honesty and ethical conduct.",
    icon: <Shield className="h-12 w-12 text-primary" />,
  },
  {
    title: "Impartiality",
    description: "We make decisions without bias, favoritism, or discrimination.",
    icon: <Scale className="h-12 w-12 text-primary" />,
  },
  {
    title: "Professionalism",
    description: "We maintain a high level of competence and professionalism.",
    icon: <Briefcase className="h-12 w-12 text-primary" />,
  },
  {
    title: "Confidentiality",
    description: "We ensure all client information is kept private and secure.",
    icon: <Lock className="h-12 w-12 text-primary" />,
  },
];

export function Values() {
  return (
    <section id="values" className="py-16 px-6 md:px-10 text-center text-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-white">
              We uphold a set of core values to guide our actions and decisions.
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="bg-white rounded-full p-3 mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
