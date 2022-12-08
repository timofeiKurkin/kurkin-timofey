import AboutMe from "../components/AboutMe";
import aboutInfo from '../data/aboutInfo.json'
import {GetStaticProps, NextPage} from "next";
import {aboutType} from "../types";

export const getStaticProps: GetStaticProps = async () => {
	const data = aboutInfo

	if (!data) {
		return {
			notFound: true
		}
	}

	return {
		props: {
			content: data.main
		}
	}
}

const About: NextPage<{ content: aboutType}> = ({content}) => {
	return (
		<AboutMe info={content}/>
	);
};

export default About;