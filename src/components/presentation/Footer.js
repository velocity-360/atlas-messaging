import React, { Component } from 'react'

export default (props) => {

	return (
		<footer id="footer" className="dark">
			<div className="container">
				<div className="footer-widgets-wrap clearfix">
					<div className="row">
					<div className="col-md-6">
						<div className="widget widget_links clearfix">
						<h2 className="bottommargin-sm" style={{fontFamily:'Pathway Gothic One', fontWeight:100}}>Atlas</h2>
							<ul className="bottommargin-sm">
								<li><a style={localStyle.link} href="/team">Team</a></li>
								<li><a style={localStyle.link} href="/docs">Documentation</a></li>
								<li><a style={localStyle.link} href="/terms">Terms of Use</a></li>
								<li><a style={localStyle.link} href="/privacy">Privacy Policy</a></li>
							</ul>

							<form method="post" className="bottommargin-sm">
								<h5 style={{fontWeight:100}}>Subscribe to Our Newsletter</h5>
								<div className="input-group divcenter">
									<span className="input-group-addon"><i className="icon-email2"></i></span>
									<input type="text" name="email" className="form-control required email" placeholder="Email" />
									<span className="input-group-btn">
										<button className="btn btn-success" type="submit">Subscribe</button>
									</span>
								</div>
							</form>
							<div className="widget-subscribe-form-result"></div>
						</div>
					</div>

					<div className="col-md-6">
						<div className="widget clearfix">
							<h4>Recent Activity</h4>

							<div id="post-list-footer">
								<div className="spost clearfix">
									<div className="entry-c">
										<div className="entry-title">
											<h4><a href="/sample">Sample Project Tutorial - Part 1</a></h4>
										</div>
										<ul className="entry-meta">
											<li>May 15th 2017</li>
										</ul>
									</div>
								</div>

								<div className="spost clearfix">
									<div className="entry-c">
										<div className="entry-title">
											<h4><a href="/sample-2">Sample Project Tutorial - Part 2</a></h4>
										</div>
										<ul className="entry-meta">
											<li>May 17th 2017</li>
										</ul>
									</div>
								</div>

								<div className="spost clearfix">
									<div className="entry-c">
										<div className="entry-title">
											<h4><a href="/sample-3">Sample Project Tutorial - Part 3</a></h4>
										</div>
										<ul className="entry-meta">
											<li>May 19th 2017</li>
										</ul>
									</div>
								</div>

							</div>
						</div>
					</div>

					</div>
				</div>
			</div>

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