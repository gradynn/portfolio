import { SiVercel, SiDatadog, SiNotion, SiSentry, SiFigma, SiAmazonaws, SiJira, SiSlack, SiGit, SiGithub } from 'react-icons/si';

import SubsectionHeading from "../Headings/SubsectionHeading";
import SkillBadge from "../SkillBadge";

function SkillsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:px-10 px-0">
            <div>
                <SubsectionHeading value="Infrastructure" />
                <div className="flex flex-wrap">
                    <SkillBadge color="#ff9900" icon={<SiAmazonaws className="text-5xl text-white" />} professionalExperience={true} />
                    <SkillBadge color="#000000" icon={<SiVercel className="text-5xl text-white" />} professionalExperience={true} />
                </div>
            </div>
            <div>
                <SubsectionHeading value="Collaboration" />
                <div className="flex flex-wrap">
                    <SkillBadge color="#287cf3" icon={<SiJira className="text-5xl text-white" />} professionalExperience={true} />
                    <SkillBadge color="#501d52" icon={<SiSlack className="text-5xl text-white" />} professionalExperience={true} />
                    <SkillBadge color="#000000" icon={<SiNotion className="text-5xl text-white" />} professionalExperience={true} />
                    <SkillBadge color="#2c3036" icon={<SiGithub className="text-5xl text-white" />} professionalExperience={true} />
                </div>
            </div>
            <div>
                <SubsectionHeading value="Tools" />
                <div className="flex flex-wrap">
                    <SkillBadge color="#6832ab" icon={<SiDatadog className="text-5xl text-white" />} professionalExperience={true} />
                    <SkillBadge color="#472c52" icon={<SiSentry className="text-5xl text-white" />} professionalExperience={true} />
                    <SkillBadge color="#252525" icon={<SiFigma className="text-5xl text-white" />} professionalExperience={true} />
                </div>
            </div>
        </div>
    )
}

export default SkillsGrid;