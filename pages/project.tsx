import Projects from "../components/Projects";
import projectInfo from '../data/projectInfo.json'
import {GetStaticProps, NextPage} from "next";
import {projectType} from "../types";

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

const Project:NextPage<{project: projectType[]}> = ({project}) => {

	return (
		<Projects projects={project}/>
	);
};

export default Project;