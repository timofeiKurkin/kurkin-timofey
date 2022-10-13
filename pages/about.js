import AboutMe from "../components/AboutMe";
import aboutInfo from '../data/aboutInfo.json'

export const getStaticProps = async () => {
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

const About = ({content, media}) => {
	return (
		<AboutMe info={content} props={media}/>
	);
};

export default About;