import AboutMe from "../components/AboutMe";
import aboutInfo from '../data/aboutInfo.json'
import {GetStaticProps, NextPage} from "next";
import {aboutType, mediaType} from "../types";

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

const About: NextPage<{ content: aboutType, media: mediaType }> = ({content, media}) => {
	return (
		<AboutMe info={content} props={media}/>
	);
};

export default About;