import '../styles/globals.scss'
import Layout from "../components/Layout";
import Custom404 from "./404";

const media = {
	media: {
		phone375_639: "(min-width: 375px) and (max-width: 639px)",
		phone640_767: "(min-width: 640px) and (max-width: 767px)",
		pad768_1023: "(min-width: 768px) and (max-width: 1023px)",
		desktop1024_1279: "(min-width: 1024px) and (max-width: 1279px)",
		desktop1280_1439: "(min-width: 1280px) and (max-width: 1439px)",
		desktop1440_1919: "(min-width: 1440px) and (max-width: 1919px)",
		desktop1920: "(min-width: 1920px)"
	},
	color: {
		$white: "#FFFFFF",
		$black: "#000000",
		$grey: "#5B5B5B",
		$light_grey: "#DEDEDE",
		$text_error: "#9f3333",
		$background: "#1C1C1C",
		$green: "#577a33",
	}
}

const MyApp = ({Component, pageProps}) => (
	<>
		{Component === Custom404 ?
			<Component {...pageProps}/>
			:
			<Layout media={media}>
				<Component media={media} {...pageProps} />
			</Layout>
		}
	</>

)

export default MyApp

//
// ${props => props.media.phone375_639}
// ${props => props.media.phone640_767}
// ${props => props.media.pad768_1023}
// ${props => props.media.desktop1024_1279}
// ${props => props.media.desktop1280_1439}
// ${props => props.media.desktop1440_1919}
// ${props => props.media.desktop1920}
