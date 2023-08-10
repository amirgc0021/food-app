"use client";
import { useRef } from 'react'
import WithPortal from './WithPortal';

export default function useModal(Component: any, compProps: any) {
	const dialogRef = useRef<HTMLDialogElement>(null);

	const openModal = () => {
		if (dialogRef.current)
			dialogRef.current.showModal();
	}

	const closeModal = () => {
		if (dialogRef.current)
			dialogRef.current.close();
	}
	
	const Popup = WithPortal(Component, closeModal);

	return {
		Modal: <Popup ref={dialogRef} {...compProps} closeModal={closeModal} />,
		openModal,
		closeModal
	}
}