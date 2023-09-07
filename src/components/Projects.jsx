/* eslint-disable no-unused-vars */
import React from "react";
import Headline from "../shared/Headline";
import projects from "../../projects";

import { motion } from "framer-motion"
import {fadeIn} from "../variants"

import picture from '../assets/Resume.png'

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto md:py-8 px-7" id="projects">
      <Headline
        title={"PROJECTS"}
        subtitle={
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porrratione reprehenderit rerum iste excepturi dolorem sequi eos  beatae tempore a."
        }
      />
      <div>
        {projects.map((project) => (
          <motion.div key={project.id} className="projects items.center my-20"
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.2}}
          >
            <img src={project.image} alt="xxx" className="max-h-[450px]" />
            <div className="md:w-10/12 text-center md:text-left px-2">
              <h4 className="text-2xl font-bold mb-6">{project.name}</h4>
              <p className="text-lg text-[#666] leading-6">{project.description}</p>
              <button className="btn py-3 px-7">Case study</button>
            </div>
          </motion.div>
        ))}
      </div>
      <img src={picture} alt="" />
    </div>
  );
};

export default Projects;
