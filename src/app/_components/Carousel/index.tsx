"use client"

import { useState } from 'react';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa"
import { SiCplusplus, SiDjango, SiDocker, SiExpress, SiGo, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiRedis, SiTerraform, SiTypescript } from "react-icons/si";

interface CarouselProps {
    numToShow: number
}

// TODO: Abstract
function Carousel(props: CarouselProps) {
    const { numToShow } = props;

    const [displayStartIndex, setDisplayStartIndex] = useState<number>(0);

    const iconStyles = "text-[100px] p-5";
    const skillsIcons = [
        <SiTypescript key="ts" className={iconStyles} />,
        <SiCplusplus key="cpp" className={iconStyles} />,
        <SiPython key="python" className={iconStyles} />,
        <SiGo key="go" className={iconStyles} />,
        <SiNextdotjs key="next" className={iconStyles} />,
        <SiReact key="react" className={iconStyles} />,
        <SiNodedotjs key="node" className={iconStyles} />,
        <SiExpress key="express" className={iconStyles} />,
        <SiDjango key="django" className={iconStyles} />,
        <SiPostgresql key="postgres" className={iconStyles} />,
        <SiMongodb key="mongo" className={iconStyles} />,
        <SiRedis key="redis" className={iconStyles} />,
        <SiDocker key="docker" className={iconStyles} />,
        <SiTerraform key="terraform" className={iconStyles} />,
    ]

    const decrementStartIndex = () => {
        console.log(displayStartIndex)
        if (displayStartIndex > 0) {
            setDisplayStartIndex(displayStartIndex - 1);
        }
    }

    const incrementStartIndex = () => {
        const upperBound = displayStartIndex + numToShow;
        if (upperBound < skillsIcons.length) {
            setDisplayStartIndex(displayStartIndex + 1);
        }
    }

    return (
        <div className="flex items-center justify-center">
            <FaCaretLeft className="text-[75px] p-5 hover:text-blue-500" onClick={decrementStartIndex}/>
            {skillsIcons.slice(displayStartIndex, displayStartIndex + numToShow)}
            <FaCaretRight className="text-[75px] p-5 hover:text-blue-500" onClick={incrementStartIndex}/>
        </div>
    )
}

export default Carousel