import { combineReducers } from 'redux';
import SectionsReducer from './reducer_active_section';

const allReducers = combineReducers({
    sections: SectionsReducer
});

export default allReducers;