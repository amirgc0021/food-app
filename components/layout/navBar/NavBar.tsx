import React from 'react'
import styles from "./NavBar.module.css";
import Link from 'next/link';
import {Search} from '../../../features/search';

type Props = {}

export default function NavBar({ }: Props) {
	return (
		<header>
			<div className={styles.inner}>
				<div className={styles.imgContainer}>
					<Link href="/">
						<img src="/assets/logo.png" />
					</Link>
				</div>
				<div>
					<Search />
				</div>
				<div />
			</div>
		</header>
	)
}