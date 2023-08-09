"use client";
import React from 'react';
import styles from "./Category.module.css";
import { M_Category } from '@/services/db/models/category';
import Link from 'next/link';

type Props = {
	category: M_Category
}

export default function Category({ category }: Props) {
	return (
		<div className={styles.wrapper}>
			<Link href={`/category/${category.slug}`}>
				<div className={styles.imgContainer}>
					<img src={category.img} />
				</div>
				<div className={styles.textContainer}>
					<h3>{category.name}</h3>
				</div>
			</Link>
		</div>
	)
}