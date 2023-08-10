"use client";
import React from 'react'
import styles from "./MealItem.module.css";
import type { M_Meal } from '@/services/db/models/category';
import { ObjectId } from 'mongodb';

type Props = {
	meal: M_Meal,
	setItem: (meal: M_Meal) => void
}

export default function MealItem({ meal, setItem }: Props) {
	
	const selectMeal = () => {
		setItem(meal)
	}

	return (
		<button className={styles.item} onClick={selectMeal}>
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