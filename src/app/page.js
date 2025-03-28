/* eslint-disable @next/next/no-img-element */

import { HeroSection } from "@/components/home/hero";
import { Testimonials } from "@/components/home/testimonials";
import { WhyUsSection } from "@/components/home/whyus";

export default function Home() {
  return (
    <main className="flex flex-col justify-between font-sans">
      <HeroSection />
      {/* Text Section */}
      <section className="mx-auto max-w-4xl p-4 py-20">
        <div className="">
          <p className="text-center text-base leading-loose text-black md:text-xl">
            From the moment you reach out, you’re in good hands. Our dedicated
            team works 24/7 — nights, weekends and holidays — ensuring your
            shipments are always a priority.
            <br /> Whether it’s a small load or large freight, we get it there
            fast and on time.
          </p>
        </div>
      </section>
      <WhyUsSection />
      <Testimonials />
    </main>
  );
}

// const ServiceCard = ({ icon, title, description }) => {
//   return (
//     <div className="flex flex-col md:flex-row gap-4 items-start p-4 max-w-xl  ">
//       <div className="flex-shrink-0">{icon}</div>
//       <span className=" hidden md:block h-36 border-l" />
//       <div>
//         <h3 className="text-2xl md:text-xl mb-2 ">{title}</h3>
//         <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
//       </div>
//     </div>
//   );
// };
