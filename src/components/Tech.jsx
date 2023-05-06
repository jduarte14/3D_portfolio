import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import DownloadSvg from "./../assets/download.svg"
import  Resume  from "./../download_file/Resume.pdf"
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true, 
  });

  return (
    <>
      <motion.div ref={ref} animate={inView ? 'animate' : 'initial'} initial='initial' variants={fadeIn}>
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((technology) => (
            <Tilt key={technology.name}>
              <div className='w-28 h-28 gray-100 p-3 flex rounded align-center justify-center'>
                <img src={technology.icon} alt={technology.name} />
              </div>
            </Tilt>
          ))}
        </div>
        <div className="flex justify-center pt-20">
          <a href={Resume} download="Resume.pdf" className="flex items-center bg-tertiary py-3 px-5 border-w-2 white rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:opacity[0.8]">
            <img src={DownloadSvg} className="w-10 h-10 mr-2 invert" alt="" /> Download my Resume
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");
