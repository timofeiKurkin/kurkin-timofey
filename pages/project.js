import Projects from "../components/Projects";
import projectInfo from '../data/projectInfo.json'

export const getStaticProps = async () => {
	const data = projectInfo

	if (!data) {
		return {
			notFound: true
		}
	}

	return {
		props: {
			project: data.main
		}
	}
}

const Project = ({project, media}) => {
	return (
		<Projects projects={project} props={media}/>
	);
};

export default Project;