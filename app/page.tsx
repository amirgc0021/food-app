import styles from './page.module.css';
import db from "@/services/db";

export default async function Home() {
	const amir= await getData()
  return (
    <main className={styles.main}>
			<h1>amir</h1>
    </main>
  )
}

const getData = async () => {
	db("categories")
	.then(async data => {
		const list = await data.find({}).limit(1).toArray()
		console.log(list)
	})
	.catch(console.error)
}