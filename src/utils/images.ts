// backgrounds
import background_web from '../assets/background/SKOweb-Homepage_construction_bg.webp';
import background_mobile from '../assets/background/SKOweb-Homepage_construction_mobile_bg.webp';

// characters
import character_off from '../assets/characters/Character_off.svg';
import character_hover from '../assets/characters/Character_hover.svg';
import character_mobile from '../assets/characters/Character_mobile.svg'

// icons
import discord_off from '../assets/social/DISCORD-BTN_OFF.png';
import discord_hover from '../assets/social/DISCORD-BTN_HOVER.png';
import telegram_off from '../assets/social/TELEGRAM_BTN_OFF.png';
import telegram_hover from '../assets/social/TELEGRAM-BTN_HOVER.png';
import twitter_off from '../assets/social/X-BTN_OFF.png';
import twitter_hover from '../assets/social/X-BTN_HOVER.png';

// components
import a_side_web from '../assets/components/SKOweb-Sidebar_bg.webp';
import a_side_mobile from '../assets/components/SKOweb-Sidebar_bg_movile.png';
import header_web from '../assets/components/HEADER.webp';
import header_mobile from '../assets/components/Header_mobile.svg';
import logo_header from '../assets/components/SKOweb-Logo_small.webp';

// text
import text_web from '../assets/text/SKOweb-Homepage_construction_text.webp';
import text_mobile from '../assets/text/SKOweb-Homepage_construction_text_mobile.webp';

// backgrounds
const backgroundWebImg = new Image();
backgroundWebImg.src = background_web;

const backgroundMobileImg = new Image();
backgroundMobileImg.src = background_mobile;

// characters
const characterOffImg = new Image();
characterOffImg.src = character_off;

const characterHoverImg = new Image();
characterHoverImg.src = character_hover;

const characterMobileImg = new Image();
characterMobileImg.src = character_mobile;

// icons
const discordOffImg = new Image();
discordOffImg.src = discord_off;

const discordHoverImg = new Image();
discordHoverImg.src = discord_hover;

const telegramOffImg = new Image();
telegramOffImg.src = telegram_off;

const telegramHoverImg = new Image();
telegramHoverImg.src = telegram_hover;

const twitterOffImg = new Image();
twitterOffImg.src = twitter_off;

const twitterHoverImg = new Image();
twitterHoverImg.src = twitter_hover;

// components
const aSideWebImg = new Image();
aSideWebImg.src = a_side_web;

const aSideMobileImg = new Image();
aSideMobileImg.src = a_side_mobile;

const headerWebImg = new Image();
headerWebImg.src = header_web;

const headerMobileImg = new Image();
headerMobileImg.src = header_mobile;

const logoHeaderImg = new Image();
logoHeaderImg.src = logo_header;

// text
const textWebImg = new Image();
textWebImg.src = text_web

const textMobileImg = new Image();
textMobileImg.src = text_mobile

export const images = {
	background: {
		web: backgroundWebImg.src,
		mobile: backgroundMobileImg.src,
	},
	characters: {
		off: characterOffImg.src,
		hover: characterHoverImg.src,
		mobile: characterMobileImg.src
	},
	icons: {
		discordOff: discordOffImg.src,
		discrodHover: discordHoverImg.src,
		telegramOff: telegramOffImg.src,
		telegramHover: telegramHoverImg.src,
		xOff: twitterOffImg.src,
		xHover: twitterHoverImg.src

	},
	components: {
		aSideWeb: aSideWebImg.src,
		aSideMobile: aSideMobileImg.src,
		headerWeb: headerWebImg.src,
		headerMobile: headerMobileImg.src,
		logo: logoHeaderImg.src
	},
	text: {
		web: textWebImg.src,
		mobile: textMobileImg.src
	}
}
