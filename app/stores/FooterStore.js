import alt from '../alt';
import FooterActions from '../actions/FooterActions';

class FooterStore {
	constructor() {
		this.bindActions(FooterActions);
		this.loggedIn = ""; 
	}

	onGetUserLoggedInSuccess(data) {
		this.loggedIn = data;
	}

	onGetUserLoggedInFail(jqXhr) {
	    toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);	
	}
}

export default alt.createStore(FooterStore);