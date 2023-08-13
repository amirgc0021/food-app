import React from 'react'
import styles from "./ResultCard.module.css";
import Rating from '@/components/rating/Rating';
import type { shortRestaurant } from '@/features/restaurants/types';
import Link from 'next/link';

type Props = {
	restaurant: shortRestaurant
}

export default function ResultCard({ restaurant }: Props) {
	return (
		<li>
			<Link href={`/restaurant/${restaurant.slug}`}>
				<div className={styles.cardWrapper}>
					<div className={styles.imgContainer}>
						<img className={styles.img} src={restaurant.img} />
					</div>

					<div className={styles.infoContainer}>
						<h2>
							{restaurant.name}
						</h2>
						<Rating rating={restaurant.rating} />
						{/* <span className={styles.address}>{restaurant.address[0]}</span> */}
					</div>
				</div>
			</Link>
		</li>
	)
}