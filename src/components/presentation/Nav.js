import React, { Component } from 'react'

export default (props) => {

	return (
		<div id="page-menu" className="sticky-page-menu">
			<div id="page-menu-wrap">
				<div className="container clearfix" style={{width:98+'%', marginTop:10}}>
					<div style={{fontFamily:'Pathway Gothic One',fontSize:30,fontWeight:100}} className="menu-title">
						<a style={{color:'#333'}} href="/">Atlas</a>
					</div>

					<nav className="one-page-menu">
						<ul className="hidden-xs">
							<li><a href="http://turbo.velocity360.io/landing"><div>Home</div></a></li>
							<li><a href="http://www.atlasmessaging.com"><div>About</div></a></li>
							<li><a href="/"><div>Join</div></a></li>							
						</ul>

						<ul className="visible-xs" style={{background:'#000'}}>
							<li><a href="#" data-href="#header"><div>Test</div></a></li>
						</ul>
					</nav>

					<div id="page-submenu-trigger"><i className="icon-reorder"></i></div>
				</div>
			</div>
		</div>
	)
}