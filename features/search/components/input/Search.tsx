"use client";

import React, { useEffect, useState } from 'react'
import styles from "./Search.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Throttle } from '@/utils/utils';
import type { M_Restaurant } from '@/services/db/models/category';
import { ResultCard } from '../..';
import { shortRestaurant } from '@/features/restaurants/types';


export default function Search() {
	const [text, setText] = useState<string>("");
	const [restaurantsList, setRestaurantsList] = useState<shortRestaurant[]>([])

	useEffect(() => {
		if(text === "") {
			return setRestaurantsList([])
		}
		fetch(`/search?q=${text}`)
			.then(res => res.json())
			.then(res => {
				setRestaurantsList(res.data)
				console.log(res)
			})
	}, [text])


	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.currentTarget.value);
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.inputWrapper}>
				<div>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</div>
				<input className={styles.input} type='text' value={text} placeholder='Search for food, alcohol...' onChange={handleChange} />

				<button onClick={() => setText("")} className={`${styles.clearBtn} ${text !== "" ? styles.empty : ""}`}><FontAwesomeIcon icon={faCircleXmark} /></button>
			</div>

			{restaurantsList.length > 0 && <div className={styles.restaurantsList}>
				{restaurantsList.map(item => (
					<ul>
						<ResultCard key={item.name} restaurant={item} />
					</ul>
				))}
			</div>}
		</div >
	)
}