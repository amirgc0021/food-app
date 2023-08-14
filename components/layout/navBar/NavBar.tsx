import React from 'react'
import styles from "./NavBar.module.css";
import Link from 'next/link';
import { Search } from '../../../features/search';
import { CartBtn } from '@/features/cart';

type Props = {}

export default function NavBar({ }: Props) {
	return (
		<header>
			<div className={styles.inner}>

				<div>
					<div className={styles.imgContainer}>
						<Link href="/">
							<img src="/assets/logo.png" alt="Feed me logo" />
						</Link>
					</div>
				</div>

				<div>
					<Search />
				</div>

				<div className={styles.cartArea}>
					<CartBtn />
				</div>

			</div>
		</header>
	)
}