import React, { Component } from 'react';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	render() {
		return (
			<div className="wrapper-personal">
				<img className="img-logo" src="/assets/img/y-logo.png" alt="Y-Logo" />
				<div className="container-personal">
					<div className="name-personal">Hello! I'm Ferryal</div>
					<div className="skill-personal">Consult, Design, and Develop Websites</div>
					<div className="text-personal">
						<div>Have something great in mind? Feel free to contact me.</div>
						<div>I'll help you to make it happen.</div>
					</div>
					<span className="btn-personal">LET`S MAKE CONTACT</span>
				</div>
			</div>
		);
	}
}

export default index;