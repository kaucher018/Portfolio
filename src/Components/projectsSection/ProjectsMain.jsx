import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "LuxoBD -No.1 wallet brand in BD",
    year: "Sept2025 (Live Project)",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "https://www.luxobd.com",
  },
  {
    name: "Style loop [Laravel+React]",
    year: "Jan 2025",
    align: "left",
    image: "../../public/images/website-img-130.jpg",
    link: "https://github.com/kaucher018/Ecommerce-react-laravel-",
  },
  {
    name: "LogeAchi.com [Full stack laravel]",
    year: "Dec 2024",
    align: "right",
    image: "../../public/images/website-img-10.png",
    link: "https://github.com/kaucher018/ecommerce-website-by-laravel",
  },
  {
    name: "SnapTok [ social media website ]",
    year: "Runnig Project",
    align: "left",
    image: "../../public/images/Alternative-Social-Media-Platform-Blog-Resized.webp",
    link: "https://github.com/kaucher018/Snaptok-social-media-laravel-",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
