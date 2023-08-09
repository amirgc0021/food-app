import React from 'react';
import styles from "./page.module.css";

import db from "@/services/db";
import type { M_MenuCategories, M_Restaurant } from '@/services/db/models/category';
import { MenuCategoryRow } from '@/features/restaurants';

type Props = {
	params: { id: string }
}

export default async function RestaurantPage({ params }: Props) {
	const { data, menuItems } = await getRestaurantData(params.id);

	return (
		<div className={styles.page}>
			<img src={data.img} alt={data.name} />
			<h1 className={styles.title}>{data.name}</h1>
			<div className={styles.rating}>
				{data.rating.star} ({data.rating.qut} ratings)
			</div>

			<div className={styles.pageRow}>
				<aside className={styles.listContainer}>
					<ul className={styles.menuItemsList}>
						{menuItems.map(item => <li>{item.name}</li>)}
					</ul>
				</aside>

				<div className={styles.content}>
					{menuItems.map(item => <MenuCategoryRow menuItem={item} />)}
				</div>
			</div>


		</div>
	)
}

const getRestaurantData = async (restaurantID: string) => {
	const [restaurantsCollection, menuCategoriesCollection] = await Promise.all([db<M_Restaurant>("restaurants"), db<M_MenuCategories>("menuCategories")]);

	const data = await restaurantsCollection.findOne({ slug: restaurantID });
	if (!data) throw new Error("Restaurant not found");

	const menuItems = await menuCategoriesCollection.find({ _id: { $in: data.food_category }, active: true }).toArray()
	return { data, menuItems };
}
