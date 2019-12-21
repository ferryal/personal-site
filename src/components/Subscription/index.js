import React, { Component } from 'react'
import { TEN_MINUTES_IN_MILISEC } from "../../constants";

class index extends Component {
    constructor(props) {
        super(props);
				this.state = { isHidden: null };
				
				this.handleHideSubscription = this.handleHideSubscription.bind(this);
				this.handleScrollListener = this.handleScrollListener.bind(this);
				this.handleShowSubscription = this.handleShowSubscription.bind(this);
				this.handleTimeout = this.handleTimeout.bind(this);
		}
		
		handleHideSubscription() {
			const currDate = new Date().getTime();
			const panelShowTime = currDate + TEN_MINUTES_IN_MILISEC;

			localStorage.setItem("panelShowTime", panelShowTime);
			this.handleTimeout();

			this.setState({
				isHidden: true
			});
		}

		handleShowSubscription() {
			this.setState({ isHidden: false });
		}

		handleTimeout() {
			const panelShowTimeString = localStorage.getItem("panelShowTime");
			const panelShowTimeInt = Number(panelShowTimeString);
			const currDate = new Date().getTime();
			const cuntdownDuration = panelShowTimeInt - currDate;

			if (panelShowTimeInt && cuntdownDuration > 0) {
				setTimeout(() => {
					this.handleShowSubscription();
				}, cuntdownDuration);
			} else {
				localStorage.removeItem("panelShowTime");
			}
		}

		componentDidMount() {
			this.handleTimeout();
			this.handleScrollListener()
		}

		handleScrollListener() {
			window.addEventListener("scroll", e => {
				const scrollPosition = window.scrollY;

				if (
					scrollPosition >= (1 / 3) * window.screen.height &&
					!localStorage.getItem("panelShowTime")
				) {
					this.handleShowSubscription();
				}
			});
		};

    render() {
			console.log(this.state.isHidden)
			return (
				<div className="wrapper-subscription">
					<div className="center-subscription">
						<div className={`card-subscription ${this.state.isHidden !== true ? 'slide-up-animation' : 'disapear-animation' }`}>
							<div className="btn-close" onClick={this.handleHideSubscription}>X</div>
							<div className="head-title">Get latest updates in web technologies</div>
							<div className="desc-title">Get latest updates in web technologies I write articles related to
								web technologies, such as design trends, development tools, UI/UX
								case studies and reviews, and more. Sign up to my newsletter to
								get them all.
							</div>
							<div className="wrapper-form">
								<input className="input-email" type="text" name="email" placeholder="Email address" />
								<div className="btn-subs">Count Me In</div>
							</div>
						</div>
					</div>
				</div>
			);
    }
}

export default index;