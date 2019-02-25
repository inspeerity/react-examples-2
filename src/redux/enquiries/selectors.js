export const getCurrentEnquiryTab = state => {
    const { selectedTab, tabs } = state.enquiries;
    return tabs.find(tab => tab.id === selectedTab);
};

export const getEnquiryTab = (state, id) => {
    const { tabs } = state.enquiries;
    return tabs.find(tab => tab.id === id);
};
