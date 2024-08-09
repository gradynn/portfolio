import Image from "next/image";

import SocialIcons from "@/app/_components/SocialIcons";
import SectionHeading from "@/app/_components/Headings/SectionHeading";
import Carousel from "@/app/_components/Carousel";

export default function About() {
  	return (
		<main className="flex flex-col w-full">
			<section id="bio" className="flex flex-col lg:flex-row w-full justify-between p-10">
				<div className="flex justify-center items-center w-full">
					<Image alt="Graduation portrait" src="images/profile.jpg" width={300} height={0}/>
				</div>
				<div className="flex flex-col justify-evenly items-start w-full">
					<SectionHeading value="About Me"/>	
					<p>
						Adaptable and highly motivated full stack engineer, 
						experienced in both front-end and back-end programming. 
						Eager to learn and apply new technologies. Excited to 
						apply my technology skills to problems in the healthcare 
						industry and improve healthcare outcomes for all.
					</p>
					<SocialIcons />
				</div>
			</section>
			<section id="skills" className="flex flex-col w-full justify-between p-10">
				<SectionHeading value="Skills" />
				<Carousel numToShow={10} />
			</section>
			<section id="education" className="flex flex-col w-full justify-between p-10">
				<SectionHeading value="Education" />
			</section>
			<section id="experience" className="flex flex-col w-full justify-between p-10">
				<SectionHeading value="Experience" />
			</section>
		</main>
	);
}
