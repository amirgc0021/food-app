"use client";

import React, { forwardRef } from 'react';
import styles from "./Styles.module.css";
// ComponentType<T>
export default function WithPortal<T>(Component: any, closeModal: any) {

	const Comp = (props: T, dialogRef: any) => {

		const onModalClicked = (event: React.MouseEvent<HTMLDialogElement>) => {
			if(event.target === dialogRef.current) closeModal()
		}

		return (
			<dialog ref={dialogRef} className={styles.dialog} onClick={onModalClicked}>
				<div className={styles.dialogInner}>
					<Component {...props} />
				</div>
			</dialog>
		)
	};

	return forwardRef(Comp)
}