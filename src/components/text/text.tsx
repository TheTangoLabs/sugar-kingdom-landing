import './text.css';
import { images } from '../../utils/images';

export default function Text() {
	return <div className="text" style={{backgroundImage:`url(${images.text.web})`}}/>
}