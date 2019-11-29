import React from 'react';
import './Hero.css';
import screenMockUp from '../../images/screen-mockups.svg';

const Hero = () => {
	return (
		<section className="heroSection">
			<div className="heroContainer">
				<h1 className="heroHeading">Build The Community Your Fans Will Love</h1>
				<p className="heroText">
					Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
					connections with your users as you engage in genuine discussion.
				</p>
				<button className="heroBtn">Get Started For Free</button>
				<div className="imgBox">
                <img className="heroImg" src={screenMockUp} alt="screenMockup" />
                </div>
			</div>
		</section>
	);
};

export default Hero;
