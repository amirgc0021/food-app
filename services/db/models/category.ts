// External dependencies
import { ObjectId } from "mongodb";

export interface M_Category {
	name: string,
	slug: string,
	img: string
}

export interface M_Restaurant {
	name: string,
	img: string,
	slug: string,
	adress: string[],
	category: string[],
	food_category: ObjectId[],
	rating: { star: number, qut: number }
}

export interface M_MenuCategories {
	name: string,
	description: string,
	active: boolean,
	meals: M_Meal[],
	discounts: string[]
}

export interface M_Meal {
	name: string,
	description: string,
	price: {
		delivery: number,
		pickup: number
	}
	active: boolean,
	img: string
}