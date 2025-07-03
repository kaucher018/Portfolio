
import './App.css'
import NavbarMain from "./Components/navbar/NavbarMain"; 
import HeroMain from "./Components/heroSection/HeroMain";
import AboutMeMain from "./Components/aboutMeSection/AboutMeMain";
import FooterMain from "./Components/footer/FooterMain";
import HeroGradient from "./Components/heroSection/HeroGradient";
import ProjectsMain from "./Components/projectsSection/ProjectsMain";
import SkillsMain from "./Components/skillsSection/SkillsMain";
import SubSkills from "./Components/skillsSection/SubSkills";
import SubHeroMain from "./Components/subHeroSection/SubHeroMain";
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
