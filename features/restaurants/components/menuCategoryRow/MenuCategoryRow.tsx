import React from 'react'
import styles from "./MenuCategoryRow.module.css";
import { M_MenuCategories } from '@/services/db/models/category';
import { MealItem } from '../..';

type Props = {
	menuItem: M_MenuCategories
}

export default function MenuCategoryRow({ menuItem }: Props) {
	return (
		<details className={styles.details} open>
			<summary>
				<h2 className={styles.title}>{menuItem.name}</h2>
				<p className={styles.desc}>{menuItem.description}</p>
			</summary>

			<div className={styles.mealsContainer}>
				{menuItem.meals.map(meal => <MealItem meal={meal} />)}
			</div>
		</details>
	)
}