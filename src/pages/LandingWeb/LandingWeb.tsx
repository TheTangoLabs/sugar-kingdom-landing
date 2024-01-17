import Characters from "../../components/characters/characters";
import SideBar from "../../components/sideBar/sideBar";
import Text from "../../components/text/text";
import { images } from "../../utils/images";
import './landingWeb.css'
export function LandingWeb() {
	return (
		<main className="landing_container" style={{ backgroundImage: `url(${images.background.web})` }}>
			<div style={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection:'column' }}>
				<Text/>
				<Characters />
			</div>
			<SideBar/>
		</main>
	)
}

export default LandingWeb;