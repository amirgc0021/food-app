import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantPage from "@/app/restaurant/[id]/page";
import CategoryCard from "../components/Category";

const category = {
	name: 'Asian',
	img: 'https://imageproxy.wolt.com/wolt-frontpage-images/categories/3188aa02-181c-11eb-8dc0-6e2275755fbc_8b140e11_cbed_4f92_bfa2_a85fc92d1249.jpg-md?w=600',
	slug: 'asian'
}

describe("Category card", () => {
	it("Should have a title", () => {
		render(<CategoryCard category={category} />);
		const header = screen.getByRole("heading")

		expect(header).toHaveTextContent(category.name)
	});

	it("Should have a valid link", () => {
		render(<CategoryCard category={category} />);
		const link = screen.getByRole("link")

		expect(link).toHaveAttribute('href', `/category/${category.slug}`)
	})
})