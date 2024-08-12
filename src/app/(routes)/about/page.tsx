import Image from "next/image";

import SocialIcons from "@/app/_components/SocialIcons";
import SectionHeading from "@/app/_components/Headings/SectionHeading";
import SkillsCarousel from "@/app/_components/SkillsCarousel";
import SkillsGrid from "@/app/_components/SkillsGrid";
import Legend from "@/app/_components/SkillsCarousel/Legend";
import EducationEntry from "@/app/_components/EducationEntry";

export default function About() {
	const iconStyles = "text-[100px] p-5";

  	return (
		<main className="flex flex-col w-full">
			<section id="bio" className="flex flex-col lg:flex-row w-full justify-between p-10">
				<div className="flex justify-center items-center w-full">
					<Image alt="Graduation portrait" src="images/profile.jpg" width={300} height={0}/>
				</div>
				<div className="flex flex-col justify-evenly items-start w-full">
					<SectionHeading value="About Me"/>	
					<p>
						As a highly motivated and passionate software developer 
						with a strong background in software engineering and 
						computer science fundamentals, I am driven by the desire 
						to keep learning new things and improving my craft 
						constantly. I have a keen 
						interest in developing tools for other developers, which 
						motivates me to continuously expand my knowledge in this
						 area. Outside of work, I enjoy skiing in the winter, 
						golfing in the summer, and staying active through 
						running and reading.
					</p>
					<SocialIcons />
				</div>
			</section>
			<section id="skills" className="flex flex-col w-full justify-between p-10">
				<SectionHeading value="Skills" />
				<Legend />
				<SkillsCarousel />
				<SkillsGrid />
			</section>
			<section id="education" className="flex flex-col w-full justify-between p-10">
				<SectionHeading value="Education" />
				<EducationEntry school="University of California, Davis" degree="B.S. Computer Science" location="Davis, California" photoPath="/images/davisLogo.png"/>
				<EducationEntry school="Diablo Valley College" degree="A.S. Computer Science" location="Pleasant Hill, California" photoPath="/images/dvcLogo.jpg"/>
			</section>
		</main>
	);
}
