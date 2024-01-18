import { images } from "../../utils/images";
import './header.css';

export default function Header() {
	return (
		<header className="header_container" style={{backgroundImage:`url(${images.components.headerWeb})`}}>
			<img src={images.components.logo} alt='logo de sugarkingdom' style={{ marginTop: '0.75rem', marginLeft: '1rem'}}/>
		</header>
	)
}