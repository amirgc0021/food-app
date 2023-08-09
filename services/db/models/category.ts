// External dependencies
import { ObjectId } from "mongodb";

export interface M_Category {
	_id?: ObjectId,
	name: string,
	slug: string,
	img: string
}

export interface M_Restaurant {
	_id?: ObjectId,
	name: string,
	img: string,
	slug: string,
	adress: string[],
	category: ObjectId[],
	food_category: ObjectId[],
	rating: { star: number, qut: number }
}

export interface M_MenuCategories {
	_id?: ObjectId,
	name: string,
	description: string,
	active: boolean,
	meals: M_Meal[],
	discounts: string[]
}

export interface M_Meal {
	_id?: ObjectId,
	name: string,
	description: string,
	price: {
		delivery: number,
		pickup: number
	}
	active: boolean,
	img: string,
	choices_id?: ObjectId[]
}