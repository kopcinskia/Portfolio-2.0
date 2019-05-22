
export default function (state={bool: false}, action) {
    switch(action.type) {
        case "ACTIVE_NAV":
            return {
                bool: action.bool,
                className: 'active'
            };
            break;

    }
    return state;
}