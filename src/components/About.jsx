/* eslint-disable no-unused-vars */
import React from "react";
import Headline from "../shared/Headline";
import skills from "../../skills";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto my-14 md:py-8 px-7" id="about">
      <Headline
        title={"ABOUT ME"}
        subtitle={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipitperspiciatis soluta veritatis odio consectetur repellat illumnesciunt, alias aliquid. Quidem inventore praesentium velit vel? Sequicdszdasdasdasd accusantium aliquid ipsam nemo?"
        }
      />
      <div className="flex flex-col md:flex-row items-start justify-start">
        <motion.div
          className="md:w-1/2 my-8"
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h4 className="text-2xl font-bold mb-8">Get to know me!</h4>
          <div className="md:w-10/12 text-lg text-[#666] mb-8">
            <p className="mb-5">
              <strong> Lorem ipsum, dolor sit amet </strong>
              consectetur adipisicing elit. Porro ratione reprehenderit rerum
              iste excepturi dolorem sequi
              <strong> eosbeatae</strong> tempore a.
            </p>
            <p className="mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              ratione{" "}
              <a href="" className="text-secondary font-bold">
                LinkedIn
              </a>{" "}
              rerum iste excepturi dolorem sequi eos beatae tempore a.
            </p>
            <p className="mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              ratione reprehenderit rerum iste excepturi dolorem sequi eos
              beatae tempore a.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2 my-8"
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h4 className="text-2xl font-bold mb-8">My Skills</h4>
          <div className="flex flex-wrap gap-3 md:w-10/12">
            {skills.map((skill) => (
              <p
                key={skill.id}
                className="bg-slate-300 text-light py-2 px-4 rounded"
              >
                {skill.title}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
