export const selectSection = (section) => {
    return {
        type: "DISPLAY_SELECTED_SECTION",
        payload: section
    }
};

export const activeNavbar = (bool) => {
    return {
        type: "ACTIVE_NAV",
        bool: bool
    }
};