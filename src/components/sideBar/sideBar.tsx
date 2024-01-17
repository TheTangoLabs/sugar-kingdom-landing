import { images } from "../../utils/images";
import './sideBar.css'

export default function SideBar() {
	return (
		<div className="sideBar_container"
			style={{ backgroundImage: `url(${images.components.aSideWeb})` }}>
			{/* <a href='https://t.me/SugarKingdomOfficialChat' target='_blank' rel='noreferrer'>
				<div className={`h-20 w-20 bg-contain bg-[url('../../public/assets/button/DISCORD-BTN_OFF.png')] hover:bg-[url('../../public/assets/button/DISCORD-BTN_HOVER.png')]`} />
			</a>
			<a href='https://t.me/SugarKingdomOfficialChat' target='_blank' rel='noreferrer'>
				<div className={`h-20 w-20 bg-contain bg-[url('../../public/assets/button/X-BTN_OFF.png')] hover:bg-[url('../../public/X-BTN_HOVER.png')]`} />
			</a>
			<a href='https://t.me/SugarKingdomOfficialChat' target='_blank' rel='noreferrer'>
				<div className={`h-20 w-20 bg-contain bg-[url('../../public/assets/button/TELEGRAM_BTN_OFF.png')] hover:bg-[url('../../public/assets/button/TELEGRAM-BTN_HOVER.png')]`} />
			</a> */}
		</div>
	)	
}