/* eslint-disable no-unused-vars */
import React from "react";
import Headline from "../shared/Headline";
import projects from "../../projects";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import dopefolio from '../assets/dopefolio.png'
import wilsonport from '../assets/wilsonport.png'
import Resume  from '../assets/Resume.png'


const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto md:py-8 px-7" id="projects">
      <Headline
        title={"PROJECTS"}
        subtitle={
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porrratione reprehenderit rerum iste excepturi dolorem sequi eos  beatae tempore a."
        }
      />
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="md:grid grid-cols-2 mb-20">
          <img src={dopefolio} alt="xxx" className="max-h-[450px]" />
          <div className="md:w-10/12 text-center md:text-left px-2">
            <h4 className="text-2xl font-bold mb-6">Dopefolio</h4>
            <p className="text-lg text-[#666] leading-6">
              Dopefolio is a successful Open-Source project that I created which
              have been featured on some of the biggest tech sites like
              CSS-Tricks, Hostinger, etc & used by thousands of developers
              globally
            </p>
            <button className="btn py-3 px-7">Case study</button>
          </div>
        </div>
        <div className="md:grid grid-cols-2 mb-20">
          <img src={wilsonport} alt="xxx" className="max-h-[450px]" />
          <div className="md:w-10/12 text-center md:text-left px-2">
            <h4 className="text-2xl font-bold mb-6">Dopefolio</h4>
            <p className="text-lg text-[#666] leading-6">
              Dopefolio is a successful Open-Source project that I created which
              have been featured on some of the biggest tech sites like
              CSS-Tricks, Hostinger, etc & used by thousands of developers
              globally
            </p>
            <button className="btn py-3 px-7">Case study</button>
          </div>
        </div>
        <div className="md:grid grid-cols-2 mb-20">
          <img src={Resume} alt="xxx" className="max-h-[450px] w-full" />
          <div className="md:w-10/12 text-center md:text-left px-2">
            <h4 className="text-2xl font-bold mb-6">Dopefolio</h4>
            <p className="text-lg text-[#666] leading-6">
              Dopefolio is a successful Open-Source project that I created which
              have been featured on some of the biggest tech sites like
              CSS-Tricks, Hostinger, etc & used by thousands of developers
              globally
            </p>
            <button className="btn py-3 px-7">Case study</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
