import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Web Developer(Laravel)",
    company: "Creative Software",
    date: "2025 - Present",
    responsibilities: [
      "Analyzed client needs: delivered projects on time.",
" Built and maintained RESTful APIs, implemented MVC architecture for scalability",
"Integrated payment gateways and APIs for seamless user experience.",
    ]
  },
 
 
];

const ExperienceTopRight = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
               
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default ExperienceTopRight;
