"use client";

import React from 'react'
import styles from "./CartBtn.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import type { AppState } from "@/services/redux/store";
import { useSelector } from 'react-redux';

type Props = {}

export default function CartBtn({ }: Props) {
	const cartLength = useSelector((state: AppState) => state.cartSlice.cart.length);

	return (
		<button className={styles.btn}>
			<FontAwesomeIcon icon={faBasketShopping} />
			<span>{cartLength}</span>
		</button>
	)
}