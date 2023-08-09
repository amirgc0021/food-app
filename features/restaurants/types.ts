import { M_Restaurant } from "@/services/db/models/category"

export type shortRestaurant = Pick<M_Restaurant, "name" | "img" | "slug" | "rating">