import db from '@/services/db'
import { M_Restaurant } from '@/services/db/models/category';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	const restaurantCollection = await db<M_Restaurant>("restaurants");
	const restaurantName = new URL(request.url).searchParams.get("q");

	if (!restaurantName) return "";



	const data = await restaurantCollection.find(
		{ name: { $regex: `${restaurantName}`, $options: 'i' } },
		{
			projection: {
				food_category: 0,
				category: 0,
				address: 0
			}
		}).limit(5).toArray();
		console.log(data)

	// const idsList = ids.split(",").map(item => new ObjectId(item));
	// if (!idsList.length) return ""


	return NextResponse.json({ data })
}