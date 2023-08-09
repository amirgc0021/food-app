"use client";
import React from 'react';
import { M_Category } from '@/services/db/models/category';

type Props = {
	category: M_Category
}

export default function Category({ category}: Props) {
	return (
		<div>
			<img src={category.img} />
			<h2>{category.name}</h2>
		</div>
	)
}