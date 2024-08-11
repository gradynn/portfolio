import React from 'react';

interface SkillBadgeProps {
    color: string,
    icon: React.ReactElement<any>,
    professionalExperience: boolean,
    link?: string | '',
}

function SkillBadge(props: SkillBadgeProps) {
    const { color, icon, professionalExperience, link } = props;

    const style = professionalExperience ? {
        backgroundColor: color,
        outlineColor: color, 
    } : {
        backgroundColor: color,
    }

    return (
        <div className="flex p-2 justify-center items-center">
            <div
                className={`flex w-[65px] justify-center items-center rounded-lg aspect-1 ${professionalExperience ? "outline outline-offset-4" : ""}`}
                style={style}>
                <a href={link}>
                    {icon}
                </a>
            </div>
        </div>
    )
}

export default SkillBadge;