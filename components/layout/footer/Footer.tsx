import React from 'react'
import styles from "./Footer.module.css";

type Props = {}

export default function Footer({ }: Props) {
	return (
		<footer className={styles.footer}>
			<small>
				All rights reserved!
			</small>
		</footer>
	)
}