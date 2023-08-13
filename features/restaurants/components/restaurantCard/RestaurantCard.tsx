import React from 'react'
import styles from "./RestaurantCard.module.css";
import { shortRestaurant } from '../../types';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Rating from '@/components/rating/Rating';

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
				<Rating rating={restaurant.rating} displayText={false} />
			</div>
			</Link>
		</div>
	)
}