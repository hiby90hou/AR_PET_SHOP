import { ADD_APPLE, REMOVE_APPLE } from '../constants/action-types';
const initialState = {
	apples: 0,
	banana: 0
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_APPLE:
			return { ...state,
				apples: state.apples + 1
			};
			break;
		case REMOVE_APPLE:
			if (state.apples > 0) {
				return { ...state,
					apples: state.apples - 1
				}
			} else {
				return state;
			}
			break;

		default:
			return state;
	}
};

export default rootReducer;