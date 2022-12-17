import MyContacts from "../components/MyContacts";
import {GetStaticProps, NextPage} from "next";
import {svgType} from "../types";

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch('https://backend-app-rho.vercel.app/api/svg')
	const data = await res.json()

	if (!data) {
		return {
			notFound: true
		}
	}

	return {
		props: {
			svg: data.main
		}
	}
}

const Contacts: NextPage<{svg: svgType[]}> = ({svg}) => {
	return (
		<MyContacts svg={svg}/>
	);
};

export default Contacts;