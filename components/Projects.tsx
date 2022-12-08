import {
	ArrowSize,
	Project,
	ProjectDescription,
	ProjectRepo, ProjectRepoWrapper,
	ProjectsWrapper,
	ProjectTitle,
	ProjectWrapper
} from "../styles/ProjectsStyle";
import Link from "next/link";
import {FC} from "react";
import {mediaType, projectType} from "../types";
import {useAppContext} from "../context/store";

const Projects: FC<{projects: projectType[]}> = ({projects}) => {
	const props = useAppContext()

	return (
		<main className='main-projects'>
			<ProjectsWrapper {...props}>
				{projects.map(({id, title, href, description, stack, stackDescription, repo, link}) => (
					<Project key={id} {...props}>
						<ProjectWrapper {...props}>
							<ProjectTitle {...props}>
								<h2 className='title'>
									{href ?
										<a href={href} target={'_blank'} rel="noreferrer">
											{title}
											<ArrowSize {...props}>
												<svg viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M16.0784 2C16.0784 1.30964 15.5187 0.75 14.8284 0.75H3.57837C2.88801 0.75 2.32837 1.30964 2.32837 2C2.32837 2.69036 2.88801 3.25 3.57837 3.25H13.5784V13.25C13.5784 13.9404 14.138 14.5 14.8284 14.5C15.5187 14.5 16.0784 13.9404 16.0784 13.25V2ZM13.9445 1.11612L0.944485 14.1161L2.71225 15.8839L15.7123 2.88388L13.9445 1.11612Z"
													/>
												</svg>
											</ArrowSize>
										</a>
										:
										title
									}
								</h2>
							</ProjectTitle>
							<ProjectDescription {...props}>
								<p className='text'>
									{description}
								</p>
							</ProjectDescription>
							<div className='color-light-grey'>
								<p className='text'>{stack} {stackDescription}</p>
							</div>
							<ProjectRepo>
								<ProjectRepoWrapper href={link}
													target={"_blank"}
													rel="noreferrer"
													{...props}
								>
									<span className='text'>
										{repo}
									</span>
								</ProjectRepoWrapper>
							</ProjectRepo>
						</ProjectWrapper>
					</Project>
				))}
			</ProjectsWrapper>
		</main>
	);
};

export default Projects;