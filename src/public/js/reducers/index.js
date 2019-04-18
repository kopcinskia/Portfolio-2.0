import { combineReducers } from 'redux';
import SectionsReducer from './reducer_default_sections_list';
import ActiveSection from './reducer_active_section'

const allReducers = combineReducers({
    allSections: SectionsReducer,
    activeSection : ActiveSection,
});

export default allReducers;
