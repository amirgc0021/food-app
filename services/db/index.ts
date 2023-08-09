import { MongoClient, Document } from 'mongodb';

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
let connection: MongoClient | null = null;

export default async function main<T extends Document>(collection: string) {
	if (!connection) {
		console.log('Connected successfully to server');
		connection = await client.connect();
	}
	// Use connect method to connect to the server
	const db = connection.db('food-app');
	return db.collection<T>(collection);
};