import { Metadata } from "next";

import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";
import { Benefits } from "@/components/benefits";
import { Faq } from "@/components/faq";

export const metadata: Metadata = {
  title: "הסטודיו של קאתרין",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Benefits />
      <Testimonials />
      <Faq />
    </div>
  );
}
