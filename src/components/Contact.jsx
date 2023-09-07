/* eslint-disable no-unused-vars */
import React from "react";
import Headline from "../shared/Headline";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const [message, setMessage] = useState("");

  const baseURl="https://64f8479ee51dbe59237f8c68--melodic-taffy-2c3cbb.netlify.app/"

  const sendEmail =async()=>{
    let dataSend={
      email:email,
      subject:subject,
      message:message
    }
  }

  return (
    <div className="contact mx-auto mt-8 px-7">
      <Headline
        title={"CONTACT"}
        subtitle={
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porrratione reprehenderit rerum iste excepturi dolorem sequi eos  beatae tempore a."
        }
      />
      <motion.div
        className="md:w-2/3 mx-auto bg-white md:px-16 px-8 py-8 rounded mb-32"
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <form>
          <label htmlFor="">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="p-5"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="" >
            Subject:
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Enter your subject"
            className="p-5"
            onChange={(e) => setSubject(e.target.value)}

          />
          <label htmlFor="">Message:</label>
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Enter your message"
            className="p-5 mb-8"
            cols="80"
            rows="10"
            onChange={(e)=>setMessage(e.target.value)}
          />
          <button className="btn px-14 py-4  shadow-sm">Submit</button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
