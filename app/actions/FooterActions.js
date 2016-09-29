import alt from '../alt';

class FooterActions {
	constructor() {
		this.generateActions(
			'getUserLoggedInSuccess',
			'getUserLoggedInFail'
		);
	}

	getUserLoggedIn() {
		// Return a dummy procedure
		return this.actions.getUserLoggedInSuccess("Not Logged In."); 
	}
}

export default alt.createActions(FooterActions);