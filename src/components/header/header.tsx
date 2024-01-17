import Image from "next/image"
import logo_small from '../../../public/SKOweb-Logo_small.webp'

export default function Header() {
	return (
		<header className="absolute z-10 h-20 w-full bg-cover bg-no-repeat bg-[url('../../public/assets/components/Header_movile.png')] md:bg-[url('../../public/HEADER.webp')] pl-8 pt-3">
			<Image src={logo_small} width={200} height={200} alt='logo de sugarkingdom'/>
		</header>
	)
}