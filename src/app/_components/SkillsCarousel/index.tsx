"use client"

import { SiCplusplus, SiDjango, SiDocker, SiExpress, SiGo, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiRedis, SiTerraform, SiTypescript } from "react-icons/si";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

function SkillsCarousel() {
    const iconStyles = "text-5xl";
    return (
        <Carousel 
            responsive={responsive} 
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            centerMode={true}
            partialVisbile={false}
        >
            <SiTypescript key="ts" className={iconStyles} />
            <SiCplusplus key="cpp" className={iconStyles} />
            <SiPython key="python" className={iconStyles} />
            <SiGo key="go" className={iconStyles} />
            <SiNextdotjs key="next" className={iconStyles} />
            <SiReact key="react" className={iconStyles} />
            <SiNodedotjs key="node" className={iconStyles} />
            <SiExpress key="express" className={iconStyles} />
            <SiDjango key="django" className={iconStyles} />
            <SiPostgresql key="postgres" className={iconStyles} />
            <SiMongodb key="mongo" className={iconStyles} />
            <SiRedis key="redis" className={iconStyles} />
            <SiDocker key="docker" className={iconStyles} />
            <SiTerraform key="terraform" className={iconStyles} />
        </Carousel> 
    )
}

export default SkillsCarousel