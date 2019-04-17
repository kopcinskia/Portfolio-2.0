const initialState = {
    sectionsList: [
        {
            id: 1,
            name: 'home',
            displayStatus: false,
        },
        {
            id: 2,
            name: 'portfolio',
            displayStatus: true,
        },
        {
            id: 3,
            name: 'contact',
            displayStatus: false,
        },
    ],
};

export default function (state=initialState, action) {
    switch(action.type) {
        case "DISPLAY_SELECTED_SECTION":
            state.sectionsList.map((section) => {
                section.id === action.sectionToDisplay.id ? section.displayStatus = true : section.displayStatus = false;
            });
            return state;
            break;
    }
    return state;
}