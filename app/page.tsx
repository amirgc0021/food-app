import { CategoryCard } from '@/features/categories';
import styles from './page.module.css';
import db from "@/services/db";
import { M_Restaurant, type M_Category } from '@/services/db/models/category';
import { RestaurantCard } from '@/features/restaurants';

export default async function Home() {
	const { categories, restaurants } = await getCategories();

	return (
		<div>
			<div className={styles.catList}>
				{categories.map(category => <CategoryCard key={category.slug} category={category} />)}
			</div>

			<div className={styles.gridList}>
				{restaurants.map(item => <RestaurantCard key={item.name} restaurant={item} />)}
			</div>
		</div>
	)
}

const getCategories = async () => {
	const [collectionRef, restaurantRef] = await Promise.all([db<M_Category>("categories"), db<M_Restaurant>("restaurants")]);

	const categories = await collectionRef.find({}, { projection: { _id: 0 } }).toArray();
	const restaurants = await restaurantRef.find({}).limit(15).toArray();

	return {
		categories, restaurants
	}
}