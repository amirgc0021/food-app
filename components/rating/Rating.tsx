import { M_Restaurant } from '@/services/db/models/category'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {
	rating: M_Restaurant["rating"],
	displayText?: boolean
}

export default function Rating({ rating, displayText = true }: Props) {
	return (
		<div>
			<span style={{ marginInlineEnd: "3px" }}><FontAwesomeIcon icon={faStar} size='sm' /></span>
			{rating.star} ({rating.qut}{displayText && " ratings"})
		</div>
	)
}