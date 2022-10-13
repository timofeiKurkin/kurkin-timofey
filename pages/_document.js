import {Head, Html, Main, NextScript} from "next/document";
import {ServerStyleSheet} from "styled-components";

export default function Document() {
	function getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();

		const page = renderPage((App) => (props) =>
			sheet.collectStyles(<App {...props} />),
		);

		const styleTags = sheet.getStyleElement();

		return { ...page, styleTags };
	}
	return (
		<Html lang='en'>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap"
					  rel="stylesheet"/>
				<link rel="icon" href="k.svg" type="image/svg"/>
				<meta name={'description'} content={'Kurkin Timofey - Frontend Developer'}/>
			</Head>
			<body>
				<Main/>
				<NextScript/>
			</body>
		</Html>
	);
};
