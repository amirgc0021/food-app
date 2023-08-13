"use client";

import React from 'react'
import styles from "./ChoicesPopup.module.css";
import { M_Meal } from '@/services/db/models/category';

type Props = {
	closeModal: () => void,
	popupData: M_Meal
}

export default function ChoicesPopup({ closeModal, popupData }: Props) {
	return (
		<div className={styles.popupWrapper}>
			<div className={styles.imageContainer}>
				<img src={popupData.img} />
			</div>
			<h2 className={styles.title}>
				{popupData.name}
			</h2>

			<div className={styles.price}>
				<span>{popupData.price.delivery}</span>
			</div>

			<p className={styles.description}>{popupData.description}</p>

			<div>
				<button className={styles.selectBtn} onClick={closeModal}>Select Item</button>
			</div>
		</div>
	)
}