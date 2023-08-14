"use client";

import React, { useEffect, useState } from 'react'
import styles from "./CartModal.module.css";
import { useSelector } from 'react-redux';
import { AppState } from '@/services/redux/store';
import MealItem from '../mealItem/MealItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

type Props = {};

export default function CartModal({ }: Props) {
	const [display, setDisplay] = useState<boolean>(false);
	const cartItems = useSelector((state: AppState) => state.cartSlice.cart);

	useEffect(() => {
		const dialogOpen = () => setDisplay(true);

		document.addEventListener("cartDialogOpen", dialogOpen)

		return () => {
			document.removeEventListener("cartDialogOpen", dialogOpen)
		}
	}, []);

	useEffect(() => {
		const html = document.documentElement;

		html.style.overflow = display ? "hidden" : "initial"
	}, [display])

	// if (display === false) return null;

	return (
		<div className={`${styles.wrapper} ${display ? styles.open : ""}`}>
			<button className={styles.exitBtn} onClick={() => setDisplay(false)}><FontAwesomeIcon icon={faX} /></button>

			<div className={styles.content}>
				<h2>Your order</h2>

				<div className={styles.itemsList}>
					<ul>
						{cartItems.map(item => <li><MealItem meal={item} /></li>)}
					</ul>
				</div>
			</div>
		</div>
	)
}