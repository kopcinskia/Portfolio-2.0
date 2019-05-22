import { combineReducers } from 'redux';
import SectionsReducer from './reducer_default_sections_list';
import ActiveSection from './reducer_active_section'
import ActiveNavBarBool from './reducer_active_navbar'

const allReducers = combineReducers({
    allSections: SectionsReducer,
    activeSection : ActiveSection,
    activeNavBarBool : ActiveNavBarBool,
});

export default allReducers;
