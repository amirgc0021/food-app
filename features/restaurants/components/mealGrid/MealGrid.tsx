"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from "./MealGrid.module.css";

import { M_Meal, M_MenuCategories } from '@/services/db/models/category';
import { MenuCategoryRow } from '../..';
import ChoicesPopup from '@/features/choicesSelector/components/choicesPopup/ChoicesPopup';
import useModal from '@/components/modal/useModal';

type Props = {
	menuItems: M_MenuCategories[]
}

export default function MealGrid({ menuItems }: Props) {
	const [popupData, setPopupData] = useState<M_Meal | null>(null);

	const { Modal, openModal, closeModal } = useModal(ChoicesPopup, { popupData });

	const setItem = (item: M_Meal) => {
		setPopupData(item);
	}

	useEffect(() => {
		if(!popupData) closeModal()
		else openModal()
	
		return () => {
			closeModal()
		}
	}, [popupData])
	

	return (
		<div className={styles.content}>
			{Modal}
			<button onClick={openModal}>click</button>
			{menuItems.map(item => <MenuCategoryRow key={item.name} menuItem={item} setItem={setItem} />)}

			{/* {popupData !== null &&} */}
		</div>
	)
}

function Dialog(){
	// open
	// close
	// click outside
	return (
		<dialog>
			asdhashjk
		</dialog>
	)
}

<Dialog>
	<ChoicesPopup />
</Dialog>