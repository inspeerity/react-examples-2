export const openEnquiryTab = (recordId) => ({
    type: 'OPEN_ENQUIRY_TAB', recordId
});

export const selectEnquiryTab = (id) => ({
    type: 'SELECT_ENQUIRY_TAB', id
});

export const changeEnquiryLeftTab = (mainTabId, leftTabId) => ({
    type: 'CHANGE_ENQUIRY_LEFT_TAB', mainTabId, leftTabId
});

export const changeEnquiriesTablePage = (page) => ({
    type: 'CHANGE_ENQUIRIES_TABLE_PAGE', page
});

export const changeEnquiriesTableRowsPerPage = (rowsPerPage) => ({
    type: 'CHANGE_ENQUIRIES_TABLE_ROWS_PER_PAGE', rowsPerPage
});

export const changeEnquiriesTableSort = (property) => ({
    type: 'CHANGE_ENQUIRIES_TABLE_SORT', property
});

export const hideEnquiryRecord = (recordId) => ({
    type: 'HIDE_ENQUIRY_RECORD', recordId
});

export const addEnquiryRecordToFavourites = (recordId) => ({
    type: 'ADD_ENQUIRY_RECORD_TO_FAVOURITES', recordId
});

export const addEnquiryRecordNote = (recordId) => ({
    type: 'ADD_ENQUIRY_RECORD_NOTE', recordId
});

export const requestEnquiryQuote = (recordId) => ({
    type: 'REQUEST_ENQUIRY_QUOTE', recordId
});

export const contactEnquiry = (recordId) => ({
    type: 'CONTACT_ENQUIRY', recordId
});

export const toggleEnquiriesFilter = (index, filterKey) => ({
    type: 'TOGGLE_ENQUIRIES_FILTER', index, filterKey
});

export const searchEnquiries = (searchText) => ({
    type: 'SEARCH_ENQUIRIES', searchText
});

export const toggleEnquiriesShowHidden = () => ({
    type: 'TOGGLE_ENQUIRIES_SHOW_HIDDEN'
});

export const setLeftTabForm  = (mainTabIndex, leftTabIndex, show) => ({
    type: 'SET_LEFT_TAB_FORM', mainTabIndex, leftTabIndex, show
});

export const newEnquiry = () => ({
    type: 'NEW_ENQUIRY'
});

export const setEnquiryDirty = () => ({
    type: 'SET_ENQUIRY_DIRTY'
});

export const changeCloseDialogOpen = (value, id) => ({
    type: 'CHANGE_CLOSE_DIALOG_OPEN', value, id
});
