import { MongoClient } from 'mongodb';
import type { Document } from 'mongodb';

type collections = "restaurants" | "categories" | "mealCategories" | "mealChoices";

const client = new MongoClient(process.env.MONGO_PASSWORD_CONNECTION as string);
let connection: MongoClient | null = null;

export default async function connect<T extends Document>(collection: collections) {
	if (!connection) {
		connection = await client.connect();
		// console.log('Connected successfully to server');
	}
	// Use connect method to connect to the server
	const db = connection.db('feed-me');
	return db.collection<T>(collection);
};