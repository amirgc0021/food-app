"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from "./MealGrid.module.css";

import { M_Meal, M_MenuCategories } from '@/services/db/models/category';
import { MenuCategoryRow } from '../..';
import ChoicesPopup from '@/features/choicesSelector/components/choicesPopup/ChoicesPopup';
import useModal from '@/components/modal/useModal';
import Modal from '@/components/modal/Modal';

type Props = {
	menuItems: M_MenuCategories[]
}

export default function MealGrid({ menuItems }: Props) {
	const [popupData, setPopupData] = useState<M_Meal | null>(null);
	const dialogRef = useRef<HTMLDialogElement>(null);

	// const { Modal, openModal, closeModal } = useModal(ChoicesPopup, { popupData });

	const setItem = (item: M_Meal) => {
		openModal()
		setPopupData(item);
	}

	const openModal = () => {
		if (dialogRef.current) {
			dialogRef.current.showModal();
			document.documentElement.style.overflow = "hidden";
		}
	}

	const closeModal = () => {
		if (dialogRef.current) {
			dialogRef.current.classList.add(styles.hide);
			setTimeout(() => {
				if (dialogRef.current) {
					dialogRef.current.classList.remove(styles.hide)
					dialogRef.current.close();
					document.documentElement.style.overflow = "initial";
				}
			}, 300);
		}
	}

	return (
		<div className={styles.content}>
			{/* {Modal} */}
			{menuItems.map(item => <MenuCategoryRow key={item.name} menuItem={item} setItem={setItem} />)}

			<Modal ref={dialogRef} closeModal={closeModal}>
				{!!popupData && <ChoicesPopup popupData={popupData} closeModal={closeModal} />}
			</Modal>
			{/* <dialog >
			</dialog> */}

			{/* {popupData !== null &&} */}
		</div>
	)
}