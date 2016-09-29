import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {

	constructor(props) {
		super(props);
		this.state = NavbarStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		NavbarStore.listen(this.onChange);
	}

	componentWillUnmount() {
		NavbarStore.unlisten(this.onChange);
		NavbarActions.getUserLoggedIn();
	}

	onChange(state) {
		this.setState(state);
	}

	handleSubmit(event) {
		event.preventDefault();

		var email = this.state.email;
		var password = this.state.password; 

		if(!email) {
			NavbarActions.invalidEmail();
			this.refs.nameTextField.getDOMNode().focus();
		}

		if(!password) {
			NavbarActions.invalidPassword();
		}

	}

	render() {

		return (
	        <nav>
	            <div className="container">
	                
	                <ul className="left">
	    	        	<li className="no-hover">
	    					<a href="#" className="pull-left logo">
	    						<img src="/img/Logo/CLight.svg" />
	    					</a> 
	    	        	</li>        	
	                </ul>

	                <ul className="nav navbar-nav navbar-left left">
	                	<li className="no-hover">
	    					<a href="#">Explore</a> 
	    	        	</li>	
	    	        </ul>

	                <div className="collapse navbar-collapse">
	                    <ul className="nav navbar-nav navbar-right right">
	                        <li>
	                            <a href="./login">Login</a>
	                        </li>
	                        <li>
	                            <a data-toggle="modal" data-target="#register" id="trigger-overlay" href="#">Sign Up</a>
	                        </li>
	                        <li>
	                            <a href="#">Create a Project</a>
	                        </li>
	                    </ul>
	                </div>
	            </div>

				<div className="modal fade" id="register" tabindex="-1" role="dialog" aria-labelledby="registerLabel">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				        <h4 className="modal-title" id="myModalLabel">Register</h4>
				      </div>
				      <div className="modal-body" id="form-container">
	                    <form onSubmit={this.handleSubmit.bind(this)} id="registerForm">
	                      <input type="email" id="email" name="email" placeholder="Email" />
	                      <input type="password" id="password" name="user_password" placeholder="Create Password" />
	                      <input type="password" name="confirmPassword" placeholder="Confirm Password" />
	                    </form> 
				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
				        <button type="button" className="btn btn-primary">Save changes</button>
				      </div>
				    </div>
				  </div>
				</div>
	        </nav>
		);
	}
}

export default Navbar;