import { CHANGE_TEXT, FETCH_RESULTS } from '../actions/types';

const initialState = {
  text: '',
  results: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEXT:
      console.log(action.payload);

      return {
        ...state,
        text: action.payload
      };
    case FETCH_RESULTS:
      console.log(action.payload);
      return {
        ...state,
        results: [...action.payload]
      };
    default:
      return state;
  }
}
