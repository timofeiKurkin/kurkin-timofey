import Link from "next/link";
import useWindowSize from "../hooks/useWindowSize";
import Head from "next/head";
import {NextPage} from "next";

const Custom404: NextPage = () => {
	const sizeWindow = useWindowSize()

	return (
		<div className='next'>
			<div className='ordinaryBackground'>
				<Head>
					<title>Page Not Found</title>
				</Head>
				<div className='wrapper'>
					<div className='error-page'>

						<div className='error-page__logo-wrapper'>
							<div className='error-page__logo'>
								<Link href='/'>
									<svg width="99" height="17" viewBox="0 0 99 17" fill="none"
										 xmlns="http://www.w3.org/2000/svg">
										<path
											d="M15.5 0.599999H11.43L7.14 4.538L5.094 6.408L2.828 8.476V0.599999H0.0780001V16H2.828V12.194L6.722 8.652L12.046 16H15.434L8.768 6.782L15.5 0.599999ZM31.0057 0.599999V8.3C31.0057 11.028 28.7837 13.25 26.0557 13.25C23.3277 13.25 21.1057 11.028 21.1057 8.3V0.599999H18.3557V8.3C18.3557 12.546 21.8097 16 26.0557 16C30.3017 16 33.7557 12.546 33.7557 8.3V0.599999H31.0057ZM46.8414 8.894C47.2594 8.85 47.6554 8.74 48.0294 8.564C49.4594 7.904 50.4494 6.452 50.4494 4.78C50.4494 3.636 49.9874 2.602 49.2394 1.854C48.4914 1.106 47.4574 0.644 46.3134 0.644H36.5894V16.044H39.3394V8.96H42.0894C43.0794 8.96 43.9374 9.488 44.4214 10.28L44.4874 10.412L45.9614 13.294L47.3694 16.044H50.4494L49.0414 13.294L46.8414 8.894ZM39.3394 6.232V3.394H46.3134C46.7974 3.394 47.1274 3.614 47.3034 3.79C47.4574 3.944 47.7214 4.296 47.7214 4.802C47.7214 5.352 47.3914 5.858 46.8854 6.078C46.7094 6.166 46.5114 6.21 46.3134 6.21L39.3394 6.232ZM68.7417 0.599999H64.6717L60.3817 4.538L58.3357 6.408L56.0697 8.476V0.599999H53.3197V16H56.0697V12.194L59.9637 8.652L65.2877 16H68.6757L62.0097 6.782L68.7417 0.599999ZM74.3474 16V0.599999H71.5974V16H74.3474ZM89.8488 0.599999V10.412L79.9488 2.778L77.1988 0.665999V16.022H79.9488V6.276L89.8488 13.91L92.5988 16.022V0.621999L89.8488 0.599999ZM98.2045 16.154V13.404H95.4545V16.154H98.2045Z"
											fill="white"/>
									</svg>
								</Link>
							</div>
							<div className='error-page__year'>
								<span className='error-page__year-light'>
									© 2022
								</span>
								{sizeWindow.width >= 1024 &&
									<div className='error-page__website'>
										<div className='error-page__website-about'>
											<a href="https://github.com/timofeiKurkin/kurkin"
											   target={'_blank'}
											   rel="noreferrer"
											   className='error-page__website-link'
											>
												<p>
													My WebSite on GitHub
												</p>
											</a>
										</div>
									</div>
								}
							</div>
						</div>

						<div className='error-page__content'>

							<div className='error-page__title'>
								<svg width="471" height="111" viewBox="0 0 471 111" fill="none"
									 xmlns="http://www.w3.org/2000/svg">
									<path
										d="M89.875 0.499993V45.14H32.68C25.705 45.14 19.97 39.405 19.97 32.43V0.499993H0.595V32.43C0.595 44.83 7.57 55.525 17.955 60.795C22.295 63.12 27.255 64.36 32.525 64.36H89.72V109H109.095V0.499993H89.875ZM221.13 19.875C229.81 19.875 236.94 27.005 236.94 35.685V73.97C236.94 82.65 229.81 89.78 221.13 89.78H187.65C178.97 89.78 171.84 82.65 171.84 73.97V35.685C171.84 27.005 178.97 19.875 187.65 19.875H221.13ZM187.65 0.499993C168.275 0.499993 152.62 16.155 152.62 35.53V73.815C152.62 93.19 168.275 108.845 187.65 108.845H221.13C240.505 108.845 256.16 93.19 256.16 73.815V35.53C256.16 16.155 240.505 0.499993 221.13 0.499993H187.65ZM388.771 0.499993V45.14H331.576C324.601 45.14 318.866 39.405 318.866 32.43V0.499993H299.491V32.43C299.491 44.83 306.466 55.525 316.851 60.795C321.191 63.12 326.151 64.36 331.421 64.36H388.616V109H407.991V0.499993H388.771ZM470.89 110.085V90.71H451.515V110.085H470.89Z"
										fill="white"/>
								</svg>
							</div>

							<div className='error-page__body'>
								<div className='error-page__text'>I think you landed on a page that doesn&apos;t
									exist.
								</div>
								<div className='error-page__body-btn'>
									<Link href={'/'}>
										<div className='error-page__btn'>
											Home Page
										</div>
									</Link>
								</div>
							</div>

						</div>

					</div>
				</div>
			</div>
		</div>
	);
};

export default Custom404;