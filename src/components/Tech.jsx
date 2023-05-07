import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import DownloadSvg from "./../assets/download.svg"
import Resume from "./../download_file/Resume.pdf"
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const Tech = () => {
  return (
    <motion.div variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}>
      <div className='flex flex-row flex-wrap justify-center gap-10 '>
        {technologies.map((technology) => (
          <div className='w-28 h-28 gray-100 p-3 flex rounded align-center justify-center' key={technology.name}>
            <img src={technology.icon} alt="" />
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-20">
        <a href={Resume} download="Resume.pdf" className="flex items-center bg-tertiary py-3 px-5 border-w-2 white rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:opacity[0.8]">
          <img src={DownloadSvg} className="w-10 h-10 mr-2 invert" alt="" /> Download my Resume
        </a>

      </div>
    </motion.div>
  );
};

export default SectionWrapper(Tech, "");