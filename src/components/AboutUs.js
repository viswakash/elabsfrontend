import React, { Component } from 'react';
import About from '../assets/AboutUs.jpg';
import './AboutUs.css';
class AboutUs extends Component {
	render() {
		return(
			<section id="aboutus">
				<div className = "container">
					<div className="row">
						<div className = "d-sm-none d-md-block col-md-5 col-lg-5">
							<img src={About}></img>
						</div>
						<div className = "col-12 col-md-7">
							<div className ="about-content">
								<h3>About Us</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default AboutUs;