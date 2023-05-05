import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import DownloadSvg from "./../assets/download.svg"
import  Resume  from "./../download_file/Resume.pdf"

const Tech = () => {
  return (
    <>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-20">
        <a href={Resume} download="Resume.pdf" className="flex items-center bg-tertiary py-3 px-5 border-w-2 white rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:opacity[0.8]">
          <img src={DownloadSvg} className="w-10 h-10 mr-2" alt="" /> Download my Resume
        </a>

      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");