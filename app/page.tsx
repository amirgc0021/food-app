import { Category } from '@/features/categories';
import styles from './page.module.css';
import db from "@/services/db";
import type { M_Category } from '@/services/db/models/category';

export default async function Home() {
	const categories = await getCategories();

	return (
		<main className={styles.main}>
			<h1>amir</h1>

			<div className={styles.catList}>
				{categories.map(category => <Category key={category.id?.toString() || category.slug} category={category} />)}
			</div>
		</main>
	)
}

const getCategories = async () => {
	const collectionRef = await db("categories");
	return collectionRef.find({}).toArray() as unknown as M_Category[];
}