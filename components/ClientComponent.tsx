"use client";
import React, { useEffect, useState } from 'react'

type Props = {
	children: React.ReactNode
}

export default function ClientComponent({children}: Props) {
	const [first, setFirst] = useState("1")

	useEffect(() => {
		
		document.addEventListener("test", (e) => {
			console.log(e.detail)
			setFirst("spair")
		})
		return () => {
			
		}
	}, [])


	return (
		<div>
			<button>{first}</button>
			{children}
		</div>
	)
}