import React, { Component } from 'react';
import { skills } from './../../constants';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
			return (
				<div className="wrapper-skills">
					<div className="container-header">
						<div className="font-large">How Can I Help You?</div>
						<div className="font-small">Our work then targeted, best practices outcomes social innovation
          synergy. Venture philanthropy, revolutionary inclusive policymaker
          relief. User-centered program areas scale.</div>
					</div>
					<div className="container-skills">
						{ skills.map((data, i) => (
							<div className="card-skills">
								<div className="card-header">
									{data.name}
									<div className="icon-wrapper"><i className={data.class}/></div>
								</div>
								<div className="desc-skills">{data.description}</div>
							</div>
						))}
					</div>
				</div>
			);
    }
}

export default index;