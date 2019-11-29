import React, { Fragment } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import StatSection from './components/StatSection/StatSection';
import GrowTogether from './components/GrowTogether/GrowTogether';
import FlowingConvo from './components/FlowingConvo/FlowingConvo';
import UserSection from './components/UserSection/UserSection';
import Prefooter from './components/PreFooter/PreFooter';
import Footer from './components/Footer/Footer';
function App() {
	return (
		<Fragment>
			<NavBar />
			<main>
				<Hero />
				<StatSection />
				<GrowTogether />
				<FlowingConvo />
				<UserSection />
				<Prefooter />
				<Footer />
			</main>
		</Fragment>
	);
}

export default App;
