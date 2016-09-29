import alt from '../alt';

class NavbarActions {
	constructor() {
		this.generateActions(
			'getUserLoggedInSuccess',
			'getUserLoggedInFail'		
		);
	}

	getUserLoggedIn() {
		return this.getUserLoggedInSuccess(false);
	}
}

export default alt.createActions(NavbarActions);