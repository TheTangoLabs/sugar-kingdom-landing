import { useState } from "react";
import { images } from "../../utils/images";
import './sideBar.css'

export default function SideBarM() {
	const [hoverD, setHoverD] = useState(true)
	const [hoverT, setHoverT] = useState(true)
	const [hoverX, setHoverX] = useState(true)

	const discordImage = hoverD ? `${images.icons.discordOff}` : `${images.icons.discrodHover}`;
	const telegramImage = hoverT ? `${images.icons.telegramOff}` : `${images.icons.telegramHover}`;
	const xImage = hoverX ? `${images.icons.xOff}` : `${images.icons.xHover}`

	return (
		<div className="sideBar_mobile_container" style={{ backgroundImage: `url(${images.components.aSideMobile})` }}>
			<a href='https://t.me/SugarKingdomOfficialChat' target='_blank' rel='noreferrer'>
				<div className='social_button'
					style={{ backgroundImage: `url(${discordImage})` }}
					onMouseEnter={() => setHoverD(false)}
					onMouseLeave={() => setHoverD(true)}
				/>
			</a>
			<a href='https://t.me/SugarKingdomOfficialChat' target='_blank' rel='noreferrer'>
				<div className='social_button'
					style={{ backgroundImage: `url(${telegramImage})` }}
					onMouseEnter={() => setHoverT(false)}
					onMouseLeave={() => setHoverT(true)}
				/>
			</a>
			<a href='https://t.me/SugarKingdomOfficialChat' target='_blank' rel='noreferrer'>
				<div className='social_button'
					style={{ backgroundImage: `url(${xImage})` }}
					onMouseEnter={() => setHoverX(false)}
					onMouseLeave={() => setHoverX(true)}
				/>
			</a>
		</div>
	)	
}