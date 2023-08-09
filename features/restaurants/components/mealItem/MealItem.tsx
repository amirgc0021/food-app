"use client"
import React from 'react'
import styles from "./MealItem.module.css";
import type { M_Meal } from '@/services/db/models/category';

type Props = {
	meal: M_Meal
}

export default function MealItem({ meal }: Props) {
	const test = () => {
		const event = new CustomEvent("test", {detail: {mealID: meal.choices_id}});
		document.dispatchEvent(event);
	}

	return (
		<button className={styles.item} onClick={test}>
			<div className={styles.inner}>
				
				<div className={styles.info}>
					<h3>{meal.name}</h3>
					<p className='cutLines'>{meal.description}</p>
					{/* <span>{meal.price.delivery}</span> */}
				</div>

				<img src={meal.img} alt={meal.name} width={150} height={130} />
			</div>
		</button>
	)
}		