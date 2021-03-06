import React from "react";
//import "../assets/css/home.css";
import '../uikit.icons'
//import checkSvg from '../assets/img/check.svg'
//import extendSvg from '../assets/img/extend.svg'
//import uiSvg from '../assets/img/ui.svg'
//import dataBinding from '../assets/img/data-binding.svg'
//import docSvg from '../assets/img/doc.svg'
//import supportSvg from '../assets/img/support.svg'

export const Home = () => (
  <div>
		<div className="top-wrap uk-position-relative uk-section-primary tm-section-texture">
			
			<div className="nav" data-uk-sticky="cls-active: uk-background-primary uk-box-shadow-medium; top: 100vh; animation: uk-animation-slide-top">
				<div className="uk-container">
					<nav className="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-navbar>
						<div className="uk-navbar-left">
							<div className="uk-navbar-item uk-padding-remove-horizontal">
								<a className="uk-logo" title="Logo" href="">
                  OptimalUI
                </a>
							</div>
						</div>
						<div className="uk-navbar-right">
							<ul className="uk-navbar-nav uk-visible@s">
								<li><a href="#features">Features</a></li>
								<li><a href="#components">Components</a></li>
								<li><a href="/docs">Documentation</a></li>
							</ul>
							<a className="uk-navbar-toggle uk-navbar-item uk-hidden@s" data-uk-toggle data-uk-navbar-toggle-icon href="#offcanvas-nav"></a>
						</div>
					</nav>
				</div>
			</div>
			
			<div className="uk-cover-container uk-light uk-flex uk-flex-middle top-wrap-height">
				
				<div className="uk-container uk-flex-auto top-container uk-position-relative uk-margin-medium-top" data-uk-parallax="y: 0,50; easing:0; opacity:0.2">
					<div className="uk-width-1-2@s" data-uk-scrollspy="cls: uk-animation-slide-right-medium; target: > *; delay: 150">
						<h1 className="uk-margin-remove-top">Optimal UI React javascript library is a great solution to building your apps.</h1>
						<a href="#pricing" title="Learn More" className="uk-button uk-button-primary uk-border-pill" data-uk-scrollspy-class="uk-animation-fade">Get Now</a>
					</div>
				</div>
			</div>
			<div className="uk-position-bottom-center uk-position-medium uk-position-z-index uk-text-center">
				<a href="#content" data-uk-scroll="duration: 500" data-uk-icon="icon: arrow-down; ratio: 2"></a>
			</div>
		</div>

		<section class="uk-section uk-section-default" id="features">
			
			<div class="uk-container uk-container-xsmall uk-text-center uk-section uk-padding-remove-top">
				<h2 class="uk-text-primary">Features</h2>
				<h2 class="uk-margin-remove uk-h1">
					Optimal-UI  shortens development time with easily integrating the key functionality which is need in a UI, so you can  focus with other development processes.
				</h2>
			</div>
		</section> 

		<section class="uk-section uk-section-primary" id="components">
			
			<div class="uk-container uk-container-xsmall uk-text-center uk-section uk-padding-remove-top">
				<h2 class="uk-text-primary">Components</h2>
			</div>
			<div class="uk-container">
				<div class="uk-grid uk-grid-large uk-child-width-1-3@m" data-uk-grid="" data-uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium">
					<div class="uk-text-center uk-first-column uk-scrollspy-inview -bottom-medium" >
						<h4 class="">Button</h4>
					</div>
					<div class="uk-text-center uk-scrollspy-inview -bottom-medium" >
						<h4 class=" ">ButtonGroup</h4>
					</div>
					<div class="uk-text-center uk-scrollspy-inview -bottom-medium">
						<h4 class="">DropDownButton</h4>
					</div>
					<div class="uk-text-center  uk-first-column uk-scrollspy-inview -bottom-medium" >
						<h4 class="">Grid</h4>
					</div>
					<div class="uk-text-center  uk-first-column uk-scrollspy-inview -bottom-medium" >
						<h4 class="">GritItem</h4>
					</div>
					<div class="uk-text-center  uk-scrollspy-inview -bottom-medium" >
						<h4 class="">Menu</h4>
					</div>
					<div class="uk-text-center  uk-scrollspy-inview -bottom-medium" >
						<h4 class="">MenuItem</h4>
					</div>
					<div class="uk-text-center  uk-scrollspy-inview -bottom-medium" >
						<h4 class="">Toolbar</h4>
					</div>
					<div class="uk-text-center  uk-scrollspy-inview -bottom-medium" >
						<h4 class="">ToolbarItem</h4>
					</div>
					<div class="uk-text-center  uk-scrollspy-inview -bottom-medium" >
						<h4 class="">ToolbarContent</h4>
					</div>
					<div class="uk-text-center  uk-scrollspy-inview -bottom-medium" >
						<h4 class="">OffCanvas</h4>
					</div>
					<div class="uk-text-center  uk-scrollspy-inview -bottom-medium" >
						<h4 class="">OffCanvasBody</h4>
					</div>
					<div class="uk-text-center  uk-scrollspy-inview -bottom-medium" >
						<h4 class="">TabStrip</h4>
					</div>
					<div class="uk-text-center  uk-scrollspy-inview -bottom-medium" >
						<h4 class="">Tab</h4>
					</div>
					<div class="uk-text-center  uk-scrollspy-inview -bottom-medium" >
						<h4 class="">Margin</h4>
					</div>
					<div class="uk-text-center  uk-scrollspy-inview -bottom-medium" >
						<h4 class="">Input</h4>
					</div>
					<div class="uk-text-center  uk-scrollspy-inview -bottom-medium" >
						<h4 class="">Checkbox</h4>
					</div>
					<div class="uk-text-center  uk-scrollspy-inview -bottom-medium" >
						<h4 class="">Radio</h4>
					</div>
					<div class="uk-text-center  uk-scrollspy-inview -bottom-medium" >
						<h4 class="">Select</h4>
					</div>
					<div class="uk-text-center  uk-scrollspy-inview -bottom-medium" >
						<h4 class="">Icon</h4>
					</div>
					<div class="uk-text-center  uk-scrollspy-inview -bottom-medium" >
						<h4 class="">Card</h4>
					</div>
					<div class="uk-text-center  uk-scrollspy-inview -bottom-medium" >
						<h4 class="">Avatar</h4>
					</div>
				</div>
			</div>
		</section> 

		 

		<footer class="uk-section uk-section-secondary uk-padding-remove-bottom">
			<div class="uk-container">
				<div class="uk-grid uk-grid-large" data-uk-grid="">
					<div class="uk-width-1-2@m uk-first-column">
						<h5>OUR COMPANY</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud cillum dolore eu fugiat nulla contact to: <a href="#" title="">info@company.com</a></p>
						<div>
							<a href="" class="uk-icon-button uk-icon" data-uk-icon="twitter"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74"></path></svg></a>
							<a href="" class="uk-icon-button uk-icon" data-uk-icon="facebook"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"></path></svg></a>
							<a href="" class="uk-icon-button uk-icon" data-uk-icon="instagram"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"></path><circle cx="14.87" cy="5.26" r="1.09"></circle><path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"></path></svg></a>
						</div>
					</div>
					<div class="uk-width-1-6@m">
						<h5>PRODUCTS</h5>
						<ul class="uk-list">
							<li>Big Data</li>
							<li>Marketing</li>
							<li>Analytics</li>
							<li>AI Lab</li>
						</ul>
					</div>
					<div class="uk-width-1-6@m">
						<h5>OUR COMPANY</h5>
						<ul class="uk-list">
							<li>Team</li>
							<li>Work</li>
							<li>Culture</li>
							<li>Contact Us</li>
						</ul>
					</div>
					<div class="uk-width-1-6@m">
						<h5>OUR OFFICES</h5>
						<ul class="uk-list">
							<li>London</li>
							<li>Chicago</li>
							<li>Dubai</li>
							<li>Brussels</li>
						</ul>
					</div>
					
				</div>
			</div>
			
			<div class="uk-text-center uk-padding uk-padding-remove-horizontal">
				<span class="uk-text-small uk-text-muted">?? 2019 Marketing Layout - <a href="https://github.com/zzseba78/Kick-Off">Created by KickOff</a> | Built with <a href="http://getuikit.com" title="" target="_blank" data-uk-tooltip="" aria-expanded="false"><span data-uk-icon="uikit" class="uk-icon"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3"></polygon><polygon points="9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3"></polygon></svg></span></a></span>
			</div>
		</footer>


    </div>



  
  )