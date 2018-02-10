import axios from 'axios';
import { FETCH_RESULTS, CHANGE_TEXT } from './types';

export const fetch_results = search_tags => {
  // const tags = search_tags.split(' ').join(',');
  return async dispatch => {
    const response = await axios.get(
      `https://api.flickr.com/services/feeds/photos_public.gne/?tags=${search_tags}&format=json`
    );

    dispatch({ type: FETCH_RESULTS, payload: response.data });
  };
};

export const change_text = text => {
  return {
    type: CHANGE_TEXT,
    payload: text
  };
};
