import { INIT_SESSION } from '../actionType';
const initialState = {
	userId: '',
	userName: ''
};

export default function(state = initialState, action) {
	switch (action.type) {
	case INIT_SESSION: {
		return {
			...action.payload
		};
	}
	default:
		return state;
	}
}
