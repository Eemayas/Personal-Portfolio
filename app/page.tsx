import Hero from "@/components/Hero";
import Projects from "@/app/projects/page";
import Blogs from "@/app/blog/page";
import AboutPage from "./about/page";
import ContactPage from "./contacts/page";
import AdminPopup from "@/components/AdminPopUp";
import TestimonialSection from "./testinomial";
import ExperienceSection from "./experiences/ExperiencesSection";

export default function Home() {
  return (
    <div className="relative z-0 ">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <AboutPage />
      <Projects />
      <Blogs />
      <ExperienceSection />
      <TestimonialSection />
      <ContactPage />
      <AdminPopup />
    </div>
  );
}
