
export default function (state=null, action) {
    switch(action.type) {
        case "DISPLAY_SELECTED_SECTION":
            return action.payload;
            break;

    }
    return state;
}