import React from 'react'
import styles from "./RestaurantCard.module.css";
import { shortRestaurant } from '../../types';
import Link from 'next/link';

type Props = {
	restaurant: shortRestaurant
}

export default function RestaurantCard({ restaurant }: Props) {
	return (
		<div className={styles.wrapper}>
			<Link href={`/restaurant/${restaurant.slug}`}>
			<div className={styles.imgContainer}>
				<img src={restaurant.img} />
			</div>
			<div className={styles.textContainer}>
				<h3>{restaurant.name}</h3>
				<div>
					{restaurant.rating.star} ({restaurant.rating.qut})
				</div>
			</div>
			</Link>
		</div>
	)
}