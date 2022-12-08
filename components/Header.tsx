import styles from '../styles/Header.module.scss'
import nav from '../data/navigation.json'
import Link from "next/link";
import {useRouter} from "next/router";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import useWindowSize from "../hooks/useWindowSize";
import BurgerMenu from "./BurgerMenu";
import {createRef, FC, ReactNode} from "react";

const Header: FC<{ children: ReactNode }> = ({children}) => {
    const sizeWindow = useWindowSize()
    const {
        asPath,
        pathname
    } = useRouter()

    const newObj = nav.navigation.map((nav) => ({...nav, nodeRef: createRef<HTMLDivElement>()}))
    const {nodeRef} = newObj.find((route) => route.path === pathname) ?? {}

    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <div className={styles.header__top}>
                    <div className={styles.header__logoWrapper}>
                        <div className={styles.header__logo}>
                            <Link href='/'>
                                <svg width="99" height="17" viewBox="0 0 99 17" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.5 0.599999H11.43L7.14 4.538L5.094 6.408L2.828 8.476V0.599999H0.0780001V16H2.828V12.194L6.722 8.652L12.046 16H15.434L8.768 6.782L15.5 0.599999ZM31.0057 0.599999V8.3C31.0057 11.028 28.7837 13.25 26.0557 13.25C23.3277 13.25 21.1057 11.028 21.1057 8.3V0.599999H18.3557V8.3C18.3557 12.546 21.8097 16 26.0557 16C30.3017 16 33.7557 12.546 33.7557 8.3V0.599999H31.0057ZM46.8414 8.894C47.2594 8.85 47.6554 8.74 48.0294 8.564C49.4594 7.904 50.4494 6.452 50.4494 4.78C50.4494 3.636 49.9874 2.602 49.2394 1.854C48.4914 1.106 47.4574 0.644 46.3134 0.644H36.5894V16.044H39.3394V8.96H42.0894C43.0794 8.96 43.9374 9.488 44.4214 10.28L44.4874 10.412L45.9614 13.294L47.3694 16.044H50.4494L49.0414 13.294L46.8414 8.894ZM39.3394 6.232V3.394H46.3134C46.7974 3.394 47.1274 3.614 47.3034 3.79C47.4574 3.944 47.7214 4.296 47.7214 4.802C47.7214 5.352 47.3914 5.858 46.8854 6.078C46.7094 6.166 46.5114 6.21 46.3134 6.21L39.3394 6.232ZM68.7417 0.599999H64.6717L60.3817 4.538L58.3357 6.408L56.0697 8.476V0.599999H53.3197V16H56.0697V12.194L59.9637 8.652L65.2877 16H68.6757L62.0097 6.782L68.7417 0.599999ZM74.3474 16V0.599999H71.5974V16H74.3474ZM89.8488 0.599999V10.412L79.9488 2.778L77.1988 0.665999V16.022H79.9488V6.276L89.8488 13.91L92.5988 16.022V0.621999L89.8488 0.599999ZM98.2045 16.154V13.404H95.4545V16.154H98.2045Z"
                                        fill="white"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.year}>
						<span className={pathname === '/' ? styles.year__light : undefined}>
							© 2022
						</span>
                        {sizeWindow.width >= 1024 &&
							<div className={styles.website}>
								<div className={styles.website__about}>
									<a href="https://github.com/timofeiKurkin/kurkin-timofey"
									   target={'_blank'}
									   rel="noreferrer"
									   className={styles.website__link}
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
                <div className={styles.header__content}>
                    <SwitchTransition>
                        <CSSTransition
                            key={pathname}
                            timeout={800}
                            classNames="page"
                            unmountOnExit
                            nodeRef={nodeRef}
                        >
                            <div
                                ref={nodeRef}
                                className={pathname === '/' ? styles.header__contentMain : styles.header__contentOther}>
                                {children}
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                </div>
                <div className={styles.header__nav}>
                    <div className={styles.header__navigation}>
                        <div className={styles.navigation}>
                            {sizeWindow.width >= 1024 ?
                                <nav className={styles.navigation__list}>
                                    {nav.navigation.map(({id, title, path}) => (
                                        <div key={id} className={styles.navigation__link}>
                                            <div className={"navigation"}>
                                                <Link href={path}>
                                                    <div className={`${(pathname === path) ? "is-active" : ""}`}>
                                                        {title}
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </nav>
                                :
                                <BurgerMenu navigation={nav.navigation} pathname={pathname}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;