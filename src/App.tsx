import './App.css';
import { useState } from 'react';
import LandingMobile from './pages/LandingMobile/LandingMobile';
import LandingWeb from './pages/LandingWeb/LandingWeb';

function App() {
	const [isDesktop] = useState(window.innerWidth > 800);
	
	console.log(isDesktop)

  return (
    <main className='main_container'>
     { isDesktop ? <LandingWeb/> : <LandingMobile/>}
    </main>
  );
}

export default App;

