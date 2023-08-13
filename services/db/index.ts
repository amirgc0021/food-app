import { MongoClient, Document } from 'mongodb';

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(process.env.MONGO_PASSWORD_CONNECTION as string);
let connection: MongoClient | null = null;

export default async function main<T extends Document>(collection: string) {
	if (!connection) {
		console.log('Connected successfully to server');
		connection = await client.connect();
	}
	// Use connect method to connect to the server
	const db = connection.db('feed-me');
	return db.collection<T>(collection);
};