import AboutMe from "../components/AboutMe";
import {GetStaticProps, NextPage} from "next";
import {aboutType} from "../types";

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://backend-app-rho.vercel.app/api/about')
    const data = await res.json()

    if (!data.main) {
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

const About: NextPage<{ content: aboutType }> = ({content}) => {
    return (
        <AboutMe info={content}/>
    );
};

export default About;