import './App.css';
import { useState } from 'react';
import LandingMobile from './pages/landingMobile/landingMobile';
import LandingWeb from './pages/landingWeb/landingWeb';

function App() {
	const [isDesktop] = useState(window.innerWidth > 768);
	
	console.log(isDesktop)

  return (
    <main className='main_container'>
     { isDesktop ? <LandingWeb/> : <LandingMobile/>}
    </main>
  );
}

export default App;

