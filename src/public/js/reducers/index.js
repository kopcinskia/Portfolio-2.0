import { combineReducers } from 'redux';
import DisplayContentReducer from './reducer_content_display';

const allReducers = combineReducers({
    display_content: DisplayContentReducer
});

export default allReducers;