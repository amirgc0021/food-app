import React from 'react'
import styles from "./Styles.module.css";
type Props = {
	children: React.ReactElement | false,
	closeModal: () => void
}

function Modal({ children, closeModal }: Props, ref: any) {

	const onModalClicked = (event: React.MouseEvent<HTMLDialogElement>) => {
		if(event.target === ref.current) closeModal()
	}

	return (
		<dialog className={styles.dialog} ref={ref} onClick={onModalClicked}>
			<div className={styles.dialogInner}>
				{children}
			</div>
		</dialog>
	)
}

export default React.forwardRef(Modal)