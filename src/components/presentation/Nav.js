import React, { Component } from 'react'

export default (props) => {

	return (
		<header id="header" className="full-header static-sticky sticky-header">
			<div id="header-wrap">
				<div className="container clearfix">
					<div id="primary-menu-trigger"><i className="icon-reorder"></i></div>
					<div id="logo" style={{paddingRight:0}}>
						<a href="/" className="standard-logo" data-dark-logo="/images/canvasone-dark.png"><img src="/images/canvasone.png" alt="Atlas" /></a>
						<a href="/" className="retina-logo" data-dark-logo="/images/canvasone-dark@2x.png"><img src="/images/canvasone@2x.png" alt="Atlas" /></a>
					</div>
					<div style={{width:260, display:'inline-block', padding:18, paddingLeft:0}}>
						<input className="form-control" type="text" placeholder="Food, Coffee, Gyms..." />
					</div>


					<nav id="primary-menu">
						<ul className="one-page-menu sf-js-enabled" data-easing="easeInOutExpo" data-speed="1250" data-offset="65" style={{touchAction: 'pan-y'}}>
							<li><a href="/"><div>Home</div></a></li>
							<li><a href="/"><div>About</div></a></li>
							<li><a href="/"><div>Works</div></a></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}