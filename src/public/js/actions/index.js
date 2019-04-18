export const selectSection = (section) => {
    return {
        type: "DISPLAY_SELECTED_SECTION",
        payload: section
    }
};