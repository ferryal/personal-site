import React, { Component } from 'react';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = { };
	}
	render() {
		const { isNotifHidden, handleHideNotif } = this.props;
		return (
			<div className={`wrapper-notif ${isNotifHidden !== false ? 'disapear-notif-animation' : ''}`}>
				<div className="center-notif">
					<div className="container-notif">
						<div className="text-notif">
							By accessing and using this website, you acknowledge that you have
							read and understand our <a className="link-notif" href="https://www.cermati.com/pages/privacy-policy">Cookie Policy, </a>
							<a className="link-notif" href="https://www.cermati.com/pages/privacy-policy">Privacy Policy,</a> and our
							<a className="link-notif" href="https://www.cermati.com/pages/privacy-policy"> Terms of Service</a>.
						</div>
						<div className="btn-notif" onClick={handleHideNotif}>
							<div className="btn-text-notif">
								Got it
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default index;