import Projects from "../components/Projects";
import {GetStaticProps, NextPage} from "next";
import {projectType} from "../types";

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch('https://backend-app-rho.vercel.app/api/project')
	const data = await res.json()

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