import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import {useRouter} from "next/router";
import {CSSTransition, SwitchTransition} from 'react-transition-group'
import {useEffect, useState} from "react";


const Layout = ({children, media}) => {
	const defaultTitle = 'home.'
	const [open, setOpen] = useState(false)
	const [logoVisible, setLogoVisible] = useState(false)

	const {
		asPath,
		pathname
	} = useRouter()

	useEffect(() => {
		setTimeout(() => {
			setOpen(true)
		}, 1800)
		setTimeout(() => {
			setLogoVisible(true)
		}, 600)
	}, [])

	return (
		<>
			<Head>
				<title>{asPath === '/' ? defaultTitle : asPath.replace(/[^a-zа-яё]/gi, '') + '.'}</title>
			</Head>
			<div className='next'>
				<div className='curtains'>
					<div className={open ? 'curtains__topActive' : 'curtains__top'}></div>
					<div className={logoVisible ? 'curtains__logoActive' : 'curtains__logo'}>
						<svg viewBox="0 0 162 27" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M26 0.799998H19.34L12.32 7.244L8.972 10.304L5.264 13.688V0.799998H0.764V26H5.264V19.772L11.636 13.976L20.348 26H25.892L14.984 10.916L26 0.799998ZM51.373 0.799998V13.4C51.373 17.864 47.737 21.5 43.273 21.5C38.809 21.5 35.173 17.864 35.173 13.4V0.799998H30.673V13.4C30.673 20.348 36.325 26 43.273 26C50.221 26 55.873 20.348 55.873 13.4V0.799998H51.373ZM77.2859 14.372C77.9699 14.3 78.6179 14.12 79.2299 13.832C81.5699 12.752 83.1899 10.376 83.1899 7.64C83.1899 5.768 82.4339 4.076 81.2099 2.852C79.9859 1.628 78.2939 0.872 76.4219 0.872H60.5099V26.072H65.0099V14.48H69.5099C71.1299 14.48 72.5339 15.344 73.3259 16.64L73.4339 16.856L75.8459 21.572L78.1499 26.072H83.1899L80.8859 21.572L77.2859 14.372ZM65.0099 10.016V5.372H76.4219C77.2139 5.372 77.7539 5.732 78.0419 6.02C78.2939 6.272 78.7259 6.848 78.7259 7.676C78.7259 8.576 78.1859 9.404 77.3579 9.764C77.0699 9.908 76.7459 9.98 76.4219 9.98L65.0099 10.016ZM113.123 0.799998H106.463L99.4428 7.244L96.0948 10.304L92.3868 13.688V0.799998H87.8868V26H92.3868V19.772L98.7588 13.976L107.471 26H113.015L102.107 10.916L113.123 0.799998ZM122.296 26V0.799998H117.796V26H122.296ZM147.662 0.799998V16.856L131.462 4.364L126.962 0.907999V26.036H131.462V10.088L147.662 22.58L152.162 26.036V0.835998L147.662 0.799998ZM161.335 26.252V21.752H156.835V26.252H161.335Z"
								fill="#1C1C1C"/>
						</svg>

					</div>
					<div className={open ? 'curtains__bottomActive' : 'curtains__bottom'}></div>
				</div>
				<div className={pathname === '/' ? 'mainBackground' : 'ordinaryBackground'}>
					<div className='wrapper'>
						<Header media={media}>
							{children}
						</Header>
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;