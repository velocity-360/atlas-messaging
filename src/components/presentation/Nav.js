import React, { Component } from 'react'

export default (props) => {

	return (
		<div id="page-menu" className="sticky-page-menu">
			<div id="page-menu-wrap">
				<div className="container clearfix" style={{width:98+'%', marginTop:10}}>
					<div className="btn-group">
						<button style={{border:'none',fontSize:30,padding:0,margin:0}} className="btn btn-default btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="true">
							Atlas
						</button>
						<ul className="dropdown-menu" role="menu">
							<li><a href="/team">Team</a></li>
							<li><a href="/terms">Terms of Use</a></li>
							<li><a href="/privacy">Privacy Policy</a></li>
						</ul>
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