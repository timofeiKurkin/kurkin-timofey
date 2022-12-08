import Image from "next/image";
import {
	About,
	Content,
	Education,
	EducationDescription,
	English,
	Skills,
	Work,
	Wrapper,
	Title,
	ImageAboutMe,
	Item, SkillsList
} from "../styles/AboutMeStyle";
import {aboutType, mediaType} from "../types";
import {FC} from "react";
import {useAppContext} from "../context/store";

const AboutMe: FC<{ info: aboutType }> = ({info}) => {
	const about = info.aboutMe
	const skills = info.skills
	const english = info.english
	const education = info.education
	const work = info.workExperience

	const props = useAppContext()

	return (
		<main className='main-about-me'>
			<Wrapper {...props}>
				<ImageAboutMe {...props}>
					<Image src={'/myPhoto.webp'} priority  layout={'fill'} objectFit={'cover'} alt={'My Image'}/>
				</ImageAboutMe>
				<Content {...props}>
					<About {...props}>
						<Title>
							<h2 className='title with-line color-light-grey'>{about.title}</h2>
						</Title>
						<div className='about-about__text'>
							<p className='text color-white'>{about.description}</p>
						</div>
					</About>

					<Skills {...props}>
						<Title>
							<h2 className='title with-line color-light-grey'>{skills.title}</h2>
						</Title>
						<div className='skills-about__items'>
							<SkillsList >
								{skills.skillsItems.map(({id, title, description}) => (
									<Item key={id} {...props}>
										<p className='color-light-grey'>{title}</p>
										<p className='color-white'>{description}</p>
									</Item>
								))}
							</SkillsList>
						</div>
					</Skills>

					<English {...props}>
						<Title>
							<h2 className='title with-line color-light-grey'>{english.title}</h2>
						</Title>
						<div className='english-about__text'>
							<p className='text color-white'>{english.description}</p>
						</div>
					</English>

					<Education {...props}>
						<Title>
							<h2 className='title with-line color-light-grey'>{education.title}</h2>
						</Title>
						<div className='education-about__text'>
							{education.educationInfo.map(({id, description}) => (
								id === education.educationInfo.length ?
									<div
										key={id}
										className='education-about__link'
									>
										<a
											href={'https://www.freecodecamp.org/certification/fccbedffbe3-d1bc-40ba-b052-9c534e7aed70/javascript-algorithms-and-data-structures'}
											className='text color-white'
											target={'_blank'}
											rel="noreferrer"
										>
											{description}
										</a>
									</div>

									:
									<EducationDescription
										key={id}
										{...props}
									>
										<p className='text color-white'>
											{description}
										</p>
									</EducationDescription>

							))}
						</div>
					</Education>

					<Work {...props}>
						<Title>
							<h2 className='title with-line color-light-grey'>{work.title}</h2>
						</Title>
						<div className='work-about__text'>
							<div className='text color-white'>
								<a href="https://onlydigital.ru/" target={'_blank'} rel="noreferrer">
									{work.workExperience.description}
								</a>
							</div>
						</div>
					</Work>

				</Content>
			</Wrapper>
		</main>
	);
};

export default AboutMe;