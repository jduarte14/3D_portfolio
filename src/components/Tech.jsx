import React, { useEffect, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import DownloadSvg from "./../assets/download.svg";
import Resume from "./../download_file/Resume.pdf";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Tech = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10 ">
        {technologies.map((technology) => (
          <motion.div
            className="w-28 h-28 gray-100 p-3 flex rounded align-center justify-center"
            key={technology.name}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.img
              src={technology.icon}
              alt={technology.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center pt-20">
        <motion.a
          href={Resume}
          download="Resume.pdf"
          className="flex items-center bg-tertiary py-3 px-5 border-w-2 white rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:opacity[0.8]"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.img
            src={DownloadSvg}
            className="w-10 h-10 mr-2 invert"
            alt=""
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
          Download my Resume
        </motion.a>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
