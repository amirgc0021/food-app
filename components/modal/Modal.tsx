import React from 'react'
import styles from "./Styles.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
type Props = {
	children: React.ReactElement | false,
	closeModal: () => void
}

function Modal({ children, closeModal }: Props, ref: any) {

	const onModalClicked = (event: React.MouseEvent<HTMLDialogElement>) => {
		if(event.target === ref.current) closeModal();
	}

	return (
		<dialog className={styles.dialog} ref={ref} onClick={onModalClicked}>
			<button className={styles.exitBtn} onClick={closeModal}>
				<FontAwesomeIcon icon={faX} />
			</button>
			<div className={styles.dialogInner}>
				{children}
			</div>
		</dialog>
	)
}

export default React.forwardRef(Modal);