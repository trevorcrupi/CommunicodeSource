import alt from '../alt';
import NavbarActions from '../actions/NavbarActions';

class NavbarStore {
	constructor() {
		this.bindActions(NavbarActions);
		this.loggedIn = false; 
	}

	onGetUserLoggedInSuccess(data) {
		this.loggedIn = data;
	}

	onGetUserLoggedInFail(jqXhr) {
	    toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);	
	}	
}

export default alt.createStore(NavbarStore);
