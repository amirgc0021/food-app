import React from 'react'
import styles from "./NavBar.module.css";

type Props = {}

export default function NavBar({}: Props) {
	return (
		<header>
			<div className={styles.inner}>
				<div className={styles.imgContainer}>
					<img src="/assets/logo.png" />
				</div>
				<div>
					<input type='text' />
				</div>
			</div>
		</header>
	)
}