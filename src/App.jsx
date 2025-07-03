
import './App.css'
import NavbarMain from "./Components/navbar/NavbarMain"; 
import HeroMain from "./components/heroSection/HeroMain";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import FooterMain from "./components/footer/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";
import ContactMeMain from "./Components/contactMeSection/ContactMeMain";


function App() {


  return (
    <>
     <NavbarMain/>
     <HeroMain/>
      <HeroGradient />
      <SubHeroMain />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </>
  )
}

export default App
