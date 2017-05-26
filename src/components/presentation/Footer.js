import React, { Component } from 'react'

export default (props) => {

	return (
		<footer id="footer" className="dark">
			<div id="copyrights">
				<div className="container clearfix">

					<div className="col_half">
						Copyright &copy; 2017. Atlas
					</div>

					<div className="col_half col_last tright">
						<div className="fright clearfix">
							<a target="_blank" href="https://www.facebook.com/Velocity-360-1631852427085987" className="social-icon si-small si-borderless si-facebook">
								<i className="icon-facebook"></i>
								<i className="icon-facebook"></i>
							</a>

							<a target="_blank" href="https://twitter.com/Velocity360_io" className="social-icon si-small si-borderless si-twitter">
								<i className="icon-twitter"></i>
								<i className="icon-twitter"></i>
							</a>

							<a target="_blank" href="#" className="social-icon si-small si-borderless si-instagram">
								<i className="icon-instagram"></i>
								<i className="icon-instagram"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>

	)
}

const localStyle = {
	link: {
		paddingLeft:0,
		fontWeight:100		
	}
}