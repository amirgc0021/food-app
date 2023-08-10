import { Category } from '@/features/categories';
import styles from './page.module.css';
import db from "@/services/db";
import type { M_Category } from '@/services/db/models/category';

export default async function Home() {
	const categories = await getCategories();

	console.log(categories)

	return (
		<div>
			<div className={styles.catList}>
				{categories.map(category => <Category key={category.slug} category={category} />)}
			</div>
		</div>
	)
}

const getCategories = async () => {
	const collectionRef = await db<M_Category>("categories");

	return collectionRef.find({}, {projection: {_id: 0}}).toArray();
}