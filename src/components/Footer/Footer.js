import React from 'react';
import './Footer.css';
import phone from '../../images/icon-phone.svg';
import messages from '../../images/icon-messages.svg';
import email from '../../images/icon-email.svg';
import logo from '../../images/logo.svg';


const Footer = () => {
	return (
		<footer>
			<div className="footerSvg" />
			<div className="footerContainer">
				<div className="footerGrid">
					<h3 className="newsLetter">Newsletter</h3>
					<p className="newsletterDesc">
						Newsletter To recieve tips on how to grow your community, sign up to our weekly newsletter
					</p>
					<form>
						<input type="text" className="newsletterInput" />
						<button className="newsletterSubmit">subscribe</button>
					</form>
				</div>
				<div className="footerGrid">
                    <img src={logo} alt="logo"/>
					<p>
						Get Started For Free Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam,
						hendrerit lacinia vestibulum a, ultrices quis sem.
					</p>
					<div className="contacts">
						<img src={phone} alt="phone" />Phone: +1-543-123-4567
					</div>
					<div className="contacts">
						<img src={email} alt="email" /> example@huddle.com
					</div>
					<div className="socials">
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                    </div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
