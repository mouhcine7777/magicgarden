import Herosection from "./components/Herosection";
import FestivalAboutSection from "./components/FestivalAboutSection";
import ExperiencesSection from "./components/ExperiencesSection";
import ContactSection from "./components/ContactSection";
import MagicFooter from "./components/MagicFooter";




export default function Home() {
  return (
    <main>
      <Herosection />
      <FestivalAboutSection />
      <ExperiencesSection />
      <ContactSection />
      <MagicFooter />
    </main>
  );
}
