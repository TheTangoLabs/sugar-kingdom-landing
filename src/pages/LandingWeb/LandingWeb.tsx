import Characters from "../../components/characters/characters";
import HeaderM from "../../components/header/header";
import SideBar from "../../components/sideBar/sideBar";
import Text from "../../components/text/text";
import { images } from "../../utils/images";
import './landingWeb.css';

export function LandingWeb() {
	return (
		<main className="landing_web_container" style={{ backgroundImage: `url(${images.background.web})` }}>
			<HeaderM/>
			<div style={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection:'column' }}>
				<Text/>
				<Characters />
			</div>
			<SideBar/>
		</main>
	)
}

export default LandingWeb;