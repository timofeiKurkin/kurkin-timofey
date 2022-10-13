import {
	Project,
	ProjectDescription,
	ProjectRepo, ProjectRepoWrapper,
	ProjectsWrapper,
	ProjectTitle,
	ProjectWrapper
} from "../styles/ProjectsStyle";

const Projects = ({projects, props}) => {

	return (
		<main className='main-projects'>
			<ProjectsWrapper {...props}>
				{projects.map(({id, title, description, stack, stackDescription, repo, link}) => (
					<Project key={id} {...props}>
						<ProjectWrapper {...props}>
							<ProjectTitle {...props}>
								<h2 className='title'>
									{title}
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