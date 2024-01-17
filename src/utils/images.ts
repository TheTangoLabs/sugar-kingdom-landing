import character_off from '../assets/characters/CHARACTERS_OFF.webp';
import character_hover from '../assets/characters/CHARACTERS_HOVER.webp';
import logo_header from '../assets/SKOweb-Logo_small.webp';
import background_web from '../assets/background/SKOweb-Homepage_construction_bg.webp';
import background_mobile from '../assets/background/SKOweb-Homepage_construction_mobile_bg.webp';
import header_web from '../assets/components/HEADER.webp';
import header_mobile from '../assets/components/Header_movile.png';
import a_side_web from '../assets/components/SKOweb-Sidebar_bg.webp';
import a_side_mobile from '../assets/components/SKOweb-Sidebar_bg_movile.png';
import discord_off from '../assets/button/DISCORD-BTN_OFF.png';
import discord_hover from '../assets/button/DISCORD-BTN_HOVER.png';
import telegram_off from '../assets/button/TELEGRAM_BTN_OFF.png';
import telegram_hover from '../assets/button/TELEGRAM-BTN_HOVER.png';
import twitter_off from '../assets/button/X-BTN_OFF.png';
import twitter_hover from '../assets/button/X-BTN_HOVER.png';
import text_web from '../assets/text/SKOweb-Homepage_construction_text.webp';
import text_mobile from '../assets/text/SKOweb-Homepage_construction_text_mobile.webp';

const characterOffImg = new Image();
characterOffImg.src = character_off

const characterHoverImg = new Image();
characterHoverImg.src = character_hover

const logo_header_img = new Image();

const backgroundWebImg = new Image();
backgroundWebImg.src = background_web

const backgroundMobileImg = new Image();
backgroundMobileImg.src = background_mobile

const header_web_img = new Image();

const header_mobile_img = new Image();

const aSideWebImg = new Image();
aSideWebImg.src = a_side_web

const a_side_mobile_img = new Image();

const discord_off_img = new Image();

const discord_hover_img = new Image();

const telegram_off_img = new Image();

const telegram_hover_img = new Image();

const twitter_off_img = new Image();

const twitter_hover_img = new Image();

const textWebImg = new Image();
textWebImg.src = text_web

const text_mobile_img = new Image();

export const images = {
	background: {
		web: backgroundWebImg.src,
		mobile: backgroundMobileImg.src,
	},
	characters: {
		off: characterOffImg.src,
		hover: characterHoverImg.src
	},
	icons: {

	},
	components: {
		aSideWeb: aSideWebImg.src
	},
	text: {
		web: textWebImg.src
	}
}
