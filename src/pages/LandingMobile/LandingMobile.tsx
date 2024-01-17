import { images } from "../../utils/images";

export function LandingMobile() {
	return (
		<main style={{
			backgroundImage: `url(${images.background.mobile})`,
			backgroundSize: '100% 100%',
			height: '100vh',
			width: '100vw'}}>
		</main>
	)
}

export default LandingMobile;