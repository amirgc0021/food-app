import React from 'react'
import styles from "./MenuCategoryRow.module.css";
import { M_Meal, M_MenuCategories } from '@/services/db/models/category';
import { MealItem } from '../..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

type Props = {
	menuItem: M_MenuCategories,
	setItem: (m: M_Meal) => void
}

export default function MenuCategoryRow({ menuItem, setItem }: Props) {
	return (
		<details className={styles.details} id={menuItem.name} open>
			<summary className={styles.summary}>
				<div>
					<h2 className={styles.title}>{menuItem.name}</h2>
					<p className={styles.desc}>{menuItem.description}</p>
				</div>
				<div>
					<button className={styles.angleBtn}>
						<FontAwesomeIcon icon={faAngleDown} />
					</button>
				</div>
			</summary>

			<div className={styles.mealsContainer}>
				{menuItem.meals.map(meal => <MealItem key={meal.name} meal={meal} setItem={setItem} />)}
			</div>
		</details>
	)
}