import React from 'react';
import styles from "./page.module.css";

import db from "@/services/db";
import type { M_MenuCategories, M_Restaurant } from '@/services/db/models/category';
import { MealGrid, MenuCategoryRow } from '@/features/restaurants';
import Link from 'next/link';

type Props = {
	params: { id: string }
}

export async function generateMetadata({ params }: Props) {
	return {
		title: `FEED ME | ${params.id}`,
		description: 'Generated by create next app',
	}
}

export default async function RestaurantPage({ params }: Props) {
	const { data, menuItems } = await getRestaurantData(params.id);

	return (
		<div className={styles.page}>
			<div>
				<img src={data.img} alt={data.name} />
				<h1 className={styles.title}>{data.name}</h1>
				<div className={styles.rating}>
					{data.rating.star} ({data.rating.qut} ratings)
				</div>
			</div>

			<div className={styles.pageRow}>
				<aside className={styles.listContainer}>
					<ul className={styles.menuItemsList}>
						{menuItems.map(item => (
							<li>
								<Link href={`#${item.name}`}>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</aside>

				<MealGrid menuItems={menuItems} />

			</div>
		</div>
	)
}

const getRestaurantData = async (restaurantID: string) => {
	const [restaurantsCollection, menuCategoriesCollection] = await Promise.all([db<M_Restaurant>("restaurants"), db<M_MenuCategories>("menuCategories")]);

	const data = await restaurantsCollection.findOne({ slug: restaurantID });
	if (!data) throw new Error("Restaurant not found");

	const menuItems = await menuCategoriesCollection.find({ _id: { $in: data.food_category }, active: true }).toArray();

	return { data, menuItems };
}
