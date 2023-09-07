/* eslint-disable no-unused-vars */
import React from "react";
import linkedin from '../assets/icons-white/linkedin-white.png'
import Twitter from '../assets/icons-white/twitter-ico.png'
import Youtube from '../assets/icons-white/yt-ico.png'
import Github from '../assets/icons-white/github-white.png'
import Blog from '../assets/icons-white/blog-ico.png'

const Footer = () => {
  return (
    <div className="bg-black md:h-96 px-7">
      <div className="max-w-7xl mx-auto py-20 flex flex-col md:flex-row justify-between">
        <div className="md:w-2/5 my-3">
          <h4 className="text-white font-bold text-2xl tracking-wide">
            Wanchalerm Mitchachon
          </h4>
          <p className="mt-5 text-sm leading-7 text-[#eee]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nisi
            doloribus nemo tempore! Cum numquam blanditiis et sapiente dolor
            saepe vero voluptate commodi sequi porro ipsa, neque unde error in!
          </p>
        </div>
        <div className="my-3">
          <h4 className="text-white font-bold text-2xl tracking-wide">
            SOCIAL
          </h4>
          <div className="mt-5 flex gap-3">
            <a href="" className="ml-1" ><img src={Twitter} alt="dsad" className="w-7 h-7"/></a>
            <a href="" className="ml-1" ><img src={linkedin} alt="dsad" className="w-7 h-7"/></a>
            <a href="" className="ml-1" ><img src={linkedin} alt="dsad" className="w-7 h-7"/></a>
            <a href="" className="ml-1" ><img src={Youtube} alt="dsad" className="w-7 h-7"/></a>
            <a href="" className="ml-1" ><img src={Github} alt="dsad" className="w-7 h-7"/></a>
            <a href="" className="ml-1" ><img src={Blog} alt="dsad" className="w-7 h-7"/></a>

          </div>
        </div>
      </div>
      <hr className="text-slate-50 opacity-30 px-7"/>
      <div>
        <p className=" py-10 md:py-0 text-sm leading-7 text-[#eee] text-center">Copyright 20203. Made by wanchalerm Mit</p>
      </div>
    </div>
  );
};

export default Footer;
