import Projects from "../components/Projects";
import projectInfo from '../data/projectInfo.json'
import {GetStaticProps, NextPage} from "next";
import {mediaType, projectType} from "../types";

export const getStaticProps: GetStaticProps = async () => {
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

const Project:NextPage<{project: projectType[], media: mediaType}> = ({project, media}) => {

	return (
		<Projects projects={project} props={media}/>
	);
};

export default Project;