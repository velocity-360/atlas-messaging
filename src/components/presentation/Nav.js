import React, { Component } from 'react'

export default (props) => {

	return (
		<div id="page-menu" className="sticky-page-menu">
			<div id="page-menu-wrap" style={{background: '#35D9C3'}}>
				<div className="container clearfix" style={{width:98+'%', marginTop:10}}>
					<div className="btn-group">
						<button style={localStyle.button} className="btn btn-default btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="true">
							<img src="dist/images/logo.png" />
						</button>
						<ul className="dropdown-menu" role="menu">
							<li><a href="/team">Team</a></li>
							<li><a href="http://www.atlasmessaging.com/terms.html">Terms of Use</a></li>
							<li><a href="http://www.atlasmessaging.com/privacy.html">Privacy Policy</a></li>
						</ul>
					</div>

					<nav className="one-page-menu">
						<ul className="hidden-xs">
							<li><a href="mailto:info@atlasmessaging.com"><div style={{color:'#fff'}}>Contact</div></a></li>
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

const localStyle = {
	button: {
		background: '#35D9C3',
		border: 'none',
		fontSize: 30,
		padding: 0,
		margin: 0
	}
}
