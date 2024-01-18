import { images } from "../../utils/images";
import './header.css';

export default function HeaderM() {
	return (
		<header className="header_container" style={{backgroundImage:`url(${images.components.headerMobile})`}}>
			<img src={images.components.logo} alt='logo de sugarkingdom'/>
		</header>
	)
}