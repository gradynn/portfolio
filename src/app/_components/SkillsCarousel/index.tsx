"use client"

import { SiC, SiCplusplus, SiDjango, SiDocker, SiExpress, SiGo, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiRedis, SiTerraform, SiTypescript } from "react-icons/si";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SkillBadge from "../SkillBadge";
import { FaJava } from "react-icons/fa";
import Legend from "./Legend";

const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
      <button
          onClick={onClick}
          className="absolute left-10 z-10 flex items-center justify-center text-black text-4xl rounded-full hover:bg-gray-100 w-[50px] h-[50px] leading-none"
          aria-label="Previous"
      >
          ‹
      </button>
  );
};

const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
      <button
          onClick={onClick}
          className="absolute right-10 z-10 flex items-center justify-center text-black text-4xl rounded-full hover:bg-gray-100 w-[50px] h-[50px] leading-none"
          aria-label="Next"
      >
          ›
      </button>
  );
};

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
};

function SkillsCarousel() {
    const iconStyles = "text-5xl text-white";
    return (
        <div className="overflow-hidden lg:p-10">
            <Carousel
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                centerMode={false}
                partialVisbile={false}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
            >
                <SkillBadge color="#2d629f" icon={<SiTypescript className={iconStyles} />} professionalExperience={true} />
                <SkillBadge color="#68dbfb" icon={<SiReact className={iconStyles} />} professionalExperience={true} />
                <SkillBadge color="#c0942d" icon={<SiPython className={iconStyles} />} professionalExperience={true} />
                <SkillBadge color="#83cd29" icon={<SiNodedotjs className={iconStyles} />} professionalExperience={true} />
                <SkillBadge color="#323232" icon={<SiExpress className={iconStyles} />} professionalExperience={true} />
                <SkillBadge color="#3b6d95" icon={<SiPostgresql className={iconStyles} />} professionalExperience={true} />
                <SkillBadge color="#d9392e" icon={<SiRedis className={iconStyles} />} professionalExperience={true} />
                <SkillBadge color="#1c96e7" icon={<SiDocker className={iconStyles} />} professionalExperience={true} />
                <SkillBadge color="#6843e5" icon={<SiTerraform className={iconStyles} />} professionalExperience={true} /> 
                <SkillBadge color="#235f92" icon={<SiCplusplus className={iconStyles} />} professionalExperience={false} />
                <SkillBadge color="#d0242d" icon={<FaJava className={iconStyles} />} professionalExperience={false} />
                <SkillBadge color="#537ca7" icon={<SiC className={iconStyles} />} professionalExperience={false} />
                <SkillBadge color="#0798bf" icon={<SiGo className={iconStyles} />} professionalExperience={false} />
                <SkillBadge color="#000000" icon={<SiNextdotjs className={iconStyles} />} professionalExperience={false} />
                <SkillBadge color="#1a533a" icon={<SiDjango className={iconStyles} />} professionalExperience={false} />
                <SkillBadge color="#56ad49" icon={<SiMongodb className={iconStyles} />} professionalExperience={false} />
            </Carousel>
            <Legend />
        </div>
    )
}

export default SkillsCarousel