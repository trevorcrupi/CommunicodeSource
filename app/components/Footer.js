import React from 'react';
import {Link} from 'react-router';
import FooterStore from '../stores/FooterStore';
import FooterActions from '../actions/FooterActions';

class Footer extends React.Component {

	constructor(props) {
		super(props);
		this.state = FooterStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		FooterStore.listen(this.onChange);
		FooterActions.getUserLoggedIn();
	}

	componentWillUnmount() {
		FooterStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	render() {
		return (
	        <footer>
	            <div className="container"><div className="row">
	                
	                <div className="col-xs-4 col-sm-2">
	                    <img id="icon" src="/img/Logo/C.svg"></img>
	                </div>
	                
	                <div className="col-xs-12 col-sm-6 hidden-xs">
	                    <h6 className="copyright">©2015 Communicode</h6>
	                </div>
	                
	                <div className="col-xs-4 col-sm-2">
	                    <ul>
	                        <li><h6><a href="#">Log In</a></h6></li>
	                        <li><h6><a href="#">Register</a></h6></li>
	                        <li><h6><a href="#">About Us</a></h6></li>
	                        <li><h6><a href="#">FAQs</a></h6></li>
	                    </ul>
	                </div>
	                <div className="col-xs-4 col-sm-2">
	                    <ul>
	                        <li><h6><a href="#">Contact</a></h6></li>
	                        <li><h6><a href="#">Sitemap</a></h6></li>
	                        <li><h6><a href="#">Terms of Use</a></h6></li>
	                        <li><h6><a href="#">Privacy Policy</a></h6></li>
	                    </ul>
	                </div>
	                
	            </div></div>
	        </footer>
		);
	}
}

export default Footer;