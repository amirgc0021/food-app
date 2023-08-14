import React from 'react'
import styles from "./MealItem.module.css";
import { M_Meal } from '@/services/db/models/category';

type Props = { meal: M_Meal }

export default function MealItem({ meal }: Props) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.imgContainer}>
				<img src={meal.img} />
			</div>

			<div className={styles.infoContainer}>
				<h2 className={styles.title}>
					{meal.name}
				</h2>
			</div>
		</div>
	)
}