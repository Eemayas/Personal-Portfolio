import Hero from "@/components/Hero";
// import Experience from "@/components/Experience";
import Projects from "@/app/projects/page";
import Feedbacks from "@/components/Feedbacks";
import Blogs from "@/app/blog/page";
import AboutPage from "./about/page";
import ContactPage from "./contacts/page";
import AdminPopup from "@/components/AdminPopup";
import TestimonialSection from "./testinomial";

export default function Home() {
  return (
    <div className="relative z-0 ">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <AboutPage />
      <Projects />
      <Blogs />
      <TestimonialSection />
      <ContactPage />
      <AdminPopup />
    </div>
  );
}
