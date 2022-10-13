import React, {useState} from 'react';
import styles from "../styles/BurgerMenu.module.scss";
import nav from "../data/navigation.json";
import Link from "next/link";

const BurgerMenu = ({pathname, navigation}) => {
	const [menuActive, setMenuActive] = useState(false)

	return (
		<div className={styles.menu} onClick={() => setMenuActive(!menuActive)}>
			<nav className={styles.burger} >
				<div className={menuActive ? styles.burger__btnActive : styles.burger__btn} >
					<span className={menuActive ? styles.burger__spanActive : styles.burger__span}/>
				</div>
			</nav>
			<div className={menuActive ? styles.navigationActive : styles.navigation} onClick={() => setMenuActive(false)}>
				<div className={styles.navigation__content}>
					{navigation.map(({id, title, path}) => (
							<div key={id} className={styles.navigation__item}>
								<div className={"navigation"}>
									<Link href={path}>
										<a className={`${(pathname === path) && styles.navigation__itemActive}`}>
											{title}
										</a>
									</Link>
								</div>
							</div>
					))}
				</div>
			</div>
			{pathname === '/' && <div className={menuActive ? styles.promptActive : styles.prompt}>
				click
			</div>}
		</div>


	);
};

export default BurgerMenu;