import React from 'react';

interface SkillBadgeProps {
    color: string,
    icon: React.ReactElement<any>,
    professionalExperience: boolean,
    link?: string | '',
    subskill?: boolean,
}

function SkillBadge(props: SkillBadgeProps) {
    const { color, icon, professionalExperience, link, subskill } = props;

    const backgroundStyle = {
        backgroundColor: color,
        opacity: subskill ? 0.5 : 1,
    };

    return (
        <div className="flex p-2 justify-center items-center">
            <div
                className={`relative flex w-[65px] h-[65px] justify-center items-center rounded-lg aspect-1 ${professionalExperience ? "outline outline-offset-4" : ""}`}
                style={{ outlineColor: professionalExperience ? color : undefined }}
            >
                <div
                    className="absolute inset-0 rounded-lg"
                    style={backgroundStyle}
                ></div>
                <a href={link} className="relative z-10">
                    {icon}
                </a>
            </div>
        </div>
    )
}

export default SkillBadge;