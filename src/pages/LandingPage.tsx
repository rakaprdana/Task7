import Button from "../components/elements/Button";
import Navbar from "../components/elements/Navbar";
import AboutSect from "../components/layout/aboutsect";
import CertiSect from "../components/layout/certisect";
import Contact from "../components/layout/contactsect";
import Footer from "../components/layout/footer";
import GallerySect from "../components/layout/gallerysect";
import Profile from "../components/layout/profile";
import ProjectSect from "../components/layout/projectsect";
import SkillSect from "../components/layout/skillsect";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
const LandingPage = () => {
  const handleClick = () => {
    const contactSection = document.getElementById("contact") as HTMLElement;
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Navbar />
      <section id="first" className="relative flex flex-col items-center py-28">
        <Profile />
        <p className="text-5xl text-center w-1/2 px-12">
          <Typewriter
            words={["Full Stack Software Developer", "Front end Developer"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={85}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
        <Button type="button" onClick={handleClick} label="Contact Me" />
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 p-4 w-16 rounded-full bg-stone-800 hover:bg-zinc-800 active:bg-stone-950 text-white shadow-lg hover:shadow-xl active:shadow-none transition-all duration-500"
        >
          <i className="bx bx-chevron-up text-2xl font-bold"></i>
        </button>
      </section>
      <SkillSect />
      <AboutSect />
      <ProjectSect />
      <CertiSect />
      <GallerySect />
      <Contact id="contact" />
      <Footer />
    </>
  );
};

export default LandingPage;
