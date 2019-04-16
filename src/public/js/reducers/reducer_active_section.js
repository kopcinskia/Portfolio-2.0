export default function (state=null, action) {
    switch(action.type) {
        case "SECTION_SELECTED":
            action.payload.display_status = true;
            return action.payload;
            break;
    }
    return state;
}