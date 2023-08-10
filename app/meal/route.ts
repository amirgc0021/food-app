import db from '@/services/db'
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	const ids = new URL(request.url).searchParams.get("id");
	if (!ids) return "";

	const idsList = ids.split(",").map(item => new ObjectId(item));
	if (!idsList.length) return ""

	const choicesCollection = await db("mealChoices");

	const data = await choicesCollection.find({ _id: { $in: idsList } }).toArray();
	return NextResponse.json({ data })
}