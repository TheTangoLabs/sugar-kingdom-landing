import './characters.css'
import { images } from '../../utils/images'
import { useState } from 'react'

export default function Characters() {
	const [hover, setHover] = useState(true);

	const image = hover ? `${images.characters.off}` : `${images.characters.hover}`

	return (
		<div className="characters" style={{backgroundImage: `url(${image})`}} onMouseEnter={() => setHover(false)} onMouseLeave={() => setHover(true)}/>
	)
}