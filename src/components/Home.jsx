/* eslint-disable no-unused-vars */
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Linkedin from "../assets/socials/linkedin.svg";
import Twitter from "../assets/socials/twitter.svg";
import Youtube from "../assets/socials/youtube.svg";
import Github from "../assets/socials/github.svg";
import Books from "../assets/socials/book.svg";

import { motion } from "framer-motion"
import {fadeIn} from "../variants"

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center hero" id="home">

      <motion.div className="text-center md:w-1/2"
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.7}}
      >
        <h1 className="text-primary text-5xl font-extrabold tracking-wide mb-8">
          Hey, I'am Wanchalerm Mitcachon
        </h1>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "We produce food for Mice",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "We produce food for Hamsters",
            1000,
            "We produce food for Guinea Pigs",
            1000,
            "We produce food for Chinchillas",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
          className="font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        />
        <p className="text-xl text-light my-8 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          perspiciatis soluta veritatis odio consectetur repellat illum
          nesciunt, alias aliquid. Quidem inventore praesentium velit vel? Sequi
          porro accusantium aliquid ipsam nemo?
        </p>
        <button className="btn py-4 px-16">Projects</button>
      </motion.div>
      <div className="bg-white w-20 rounded py-1 px-2 absolute left-0 top-48 hidden md:block">
        <div className="py-1">
          <a
            href=""
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Linkedin} alt="Linkin" className="w-10 h-10" />
          </a>
        </div>
        <div className="py-1">
          <a
            href=""
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Twitter} alt="Twitter" className="w-10 h-10" />
          </a>
        </div>
        <div className="py-1">
          <a
            href=""
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Youtube} alt="Youtube" className="w-10 h-10" />
          </a>
        </div>
        <div className="py-1">
          <a
            href=""
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Github} alt="Github" className="w-10 h-10" />
          </a>
        </div>
        <div className="py-1">
          <a
            href=""
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Books} alt="Books" className="w-10 h-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
