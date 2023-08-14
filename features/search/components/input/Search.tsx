"use client";

import React, { useEffect, useState, useMemo } from 'react'
import styles from "./Search.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import { ResultCard } from '../..';
import { shortRestaurant } from '@/features/restaurants/types';
import { Debounce } from '@/utils/utils';


export default function Search() {
	const [text, setText] = useState<string>("");
	const [restaurantsList, setRestaurantsList] = useState<shortRestaurant[]>([])

	useEffect(() => {
		if (text === "") {
			return setRestaurantsList([]);
		} else {
			debounce(text)
		}

	}, [text]);

	const onSerach = (text: string) => {

		fetch(`/search?q=${text}`)
			.then(res => res.json())
			.then(res => {
				setRestaurantsList(res.data)
			})
	}

	const debounce = useMemo(() => Debounce(onSerach, 500), []);


	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.currentTarget.value);
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.inputWrapper}>

				<div className={styles.searchIcon}>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</div>
				<input className={styles.input} type='text' value={text} placeholder='Search for food, alcohol...' onChange={handleChange} />

				<span className={styles.clearInput}>
					<button onClick={() => setText("")} className={styles.clearBtn}>
						<FontAwesomeIcon icon={faX} size='sm' />
						</button>
				</span>
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