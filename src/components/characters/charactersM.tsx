import './characters.css'
import { images } from '../../utils/images'

export default function CharactersM() {

	return (
		<div className="characters" style={{backgroundImage: `url(${images.characters.off})`}} />
	)
}