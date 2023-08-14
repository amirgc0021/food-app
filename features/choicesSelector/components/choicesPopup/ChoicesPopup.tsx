"use client";

import React from 'react'
import styles from "./ChoicesPopup.module.css";
import { M_Meal } from '@/services/db/models/category';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/services/redux/slices/CartSlice';

type Props = {
	closeModal: () => void,
	popupData: M_Meal
}

export default function ChoicesPopup({ closeModal, popupData }: Props) {
	const dispatch = useDispatch()
	const price = Intl.NumberFormat("es-us", { style: "currency", currency: "USD" }).format(popupData.price.delivery);

	const addItem = () => {
		dispatch(addToCart(popupData))
		closeModal()
	}

	return (
		<div className={styles.popupWrapper}>
			<div className={styles.imageContainer}>
				<img src={popupData.img} />
			</div>

			<div className={styles.mealData}>
				<h2 className={styles.title}>
					{popupData.name}
				</h2>

				<div className={styles.price}>
					<span>{price}</span>
				</div>
			</div>

			<p className={styles.description}>{popupData.description}</p>

			<div>
				<button className={styles.selectBtn} onClick={addItem}>Select Item</button>
			</div>
		</div>
	)
}