"use client";

import React from 'react'
import styles from "./ChoicesPopup.module.css";
import { M_Meal } from '@/services/db/models/category';

type Props = {
	closeModal: any,
	popupData: M_Meal
}

export default function ChoicesPopup({ closeModal, popupData }: Props) {
	if (!popupData) return null;

	return (
		<div className={styles.popupWrapper}>
			{popupData.name}
			<button onClick={closeModal}>exit</button>
		</div>
	)
}