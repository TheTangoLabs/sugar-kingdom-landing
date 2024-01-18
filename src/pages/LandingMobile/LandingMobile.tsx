import TextM from "../../components/text/textM";
import Characters from "../../components/characters/characters";
import { images } from "../../utils/images";
import './landingMobile.css'
import HeaderM from "../../components/header/headerM";
import SideBarM from "../../components/sideBar/sideBarM";

export function LandingMobile() {
	return (
		<main className='landing_mobile_container' style={{ backgroundImage: `url(${images.background.mobile})` }}>
			<HeaderM />
			<div className='main_landing_container'>
				<TextM />
				<Characters />
			</div>
			<SideBarM/>
		</main>
	)
}

export default LandingMobile;