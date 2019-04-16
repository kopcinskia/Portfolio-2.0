import { combineReducers } from 'redux';
import DisplayContentReducer from './reducer_sections_data';
import ActiveUserReducer from './reducer_active_section';

const allReducers = combineReducers({
    sections: DisplayContentReducer,
    activeSection: ActiveUserReducer
});

export default allReducers;