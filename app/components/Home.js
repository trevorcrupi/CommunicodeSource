import React from 'react';

class Home extends React.Component {
  render() {
		return (
			<div>
			    <div className="container-fluid hero"> 
			    	<center>
				    	<div className="hero-text">
					        <h1>Let's Create Together.</h1>
					        <h3>Help change the world through the power of technology</h3>
					        <a href="#" className="primary-btn btn">Developers</a>
					        <a href="#" className="dark-btn btn">Nonprofits</a>
				        </div>
			        </center>
			    </div>  
			    <div className="container-fluid">
			    	<div className="row">
			    		<div className="col-md-12 divider">

			    		</div>
			    	</div>
			    	<div className="row">
			    		<div className="col-md-6 developers info-panel">
			   				<div className="info-text">
				    			<h2>Developers</h2>
				    			<hr />
				    			<p>Communicode matches designers and developers to causes they care about.</p>
				    			<center>
				    				<a href="#" className="primary-btn btn-small dark no-transition">Learn More</a>
				    			</center>
			    			</div>
			    		</div>
			    		<div className="col-md-6 nonprofits info-panel">
			   				<div className="info-text">
				    			<h2>Nonprofits</h2>
				    			<hr />
				    			<p>Communicode helps usher your <br />nonprofit into the 21<sup>st</sup> Century</p>
				    			<center>
				    				<a href="#" className="primary-btn btn-small dark no-transition">Learn More</a>
				    			</center>
			    			</div>
			    		</div>
			    	</div>
			    	<div className="row unified-section">
			    		<div className="col-md-6">
			    			<img width="100%" src="/img/Homepage/TripleBrowsers.png" />
			    		</div>
			    		<div className="col-md-6 text">
			    			<h2>We're Creating a Revolution</h2>
			    			<p>Help do something that makes a real-world difference. Communicode will match you with causes you care about. Save job requests you are interested in and make a difference with the skills you have.</p>
			    			<a href="#" className="dark-btn btn no-transition">Join the Revolution</a>
			    		</div>
			    	</div>
			    	<div className="row features" >
			    		<div id="portfolio-panel" className="col-md-4 info-panel">
			    			<h3>Expand Your Portfolio</h3>
			    			<hr />
			    			<p>
			    				Need a few more projects to create a portfolio? Communicode 
			    				gives you the opportunity to expand your portfolio, completely free.
			    			</p>
			    		</div>
			    		<div id="work-panel" className="col-md-4 info-panel">
			    			<h3>Work on What You Love</h3>
			    			<hr />
			    			<p>
			    				Communicode allows you to work on causes you are interested in.
			    				You give us your interests, we give you matches. It's that simple.
			    			</p>
			    		</div>
			    		<div id="help-panel" className="col-md-4 info-panel">
			    			<h3>Get the Help You Deserve</h3>
			    			<hr />
			    			<p>
			    				Nonprofits need to be up to date with technology. 
			    				Communicode matches you with people who care about
			    				what you have to offer. 
			    			</p>
			    		</div>
			    	</div>
			    	<div className="col-md-12 create-account">
			    		<center>
			    			<div className="text">
				    			<h2>Let's Code Some Good</h2>
				    			<h4>Help change the world. Create your account now.</h4>
				    			<a href="#" className="btn dark-btn">Get Started</a>
			    			</div>
			    		</center>
			    	</div>
			    </div> 

			    <div className="overlay overlay-slidedown container-fluid">
			        <div className="row overlay-body">
			            <button type="button" className="overlay-close">Close</button>
			            <a href="register">
			                <div className="col-md-6 register-half" id="developers">
			                    <div className="register-text">
			                        <h4>ARE YOU A</h4>
			                        <h2>Developer?</h2>
			                    </div>
			                </div>
			            </a>

			            <a href="register">
			                <div className="col-md-6 register-half" id="nonprofits">
			                    <div className="register-text">
			                        <h4>ARE YOU A</h4>
			                        <h2>Nonprofit?</h2>
			                    </div>
			                </div>
			            </a>
			        </div>
			    </div> 
			</div>   
		);
  }
}

export default Home;