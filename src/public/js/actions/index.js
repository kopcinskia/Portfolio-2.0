export const selectSection = (section) => {
    console.log('no to Kliknięte', section)
    return {
        type: "SECTION_SELECTED",
        payload: section,
    }
};

export const hideAllSections = (sections) => {
    return {
        type: "HIDE_ALL_SECTIONS",
        payload: sections,
    }
};