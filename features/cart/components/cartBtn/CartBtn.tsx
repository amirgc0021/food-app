import React from 'react'
import styles from "./CartBtn.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

type Props = {}

export default function CartBtn({}: Props) {
	return (
		<button className={styles.btn}>
			<FontAwesomeIcon icon={faBasketShopping} />
		</button>
	)
}