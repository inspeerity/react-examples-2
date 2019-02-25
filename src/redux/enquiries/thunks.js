import { destroy } from 'redux-form';

import { changeCloseDialogOpen } from './actions';
import { getEnquiryTab } from './selectors';

export const removeEnquiryTab = (id, force = false) => {
    return (dispatch, getState) => {
        const enquiriesTab = getEnquiryTab(getState(), id);

        if (force) {
            const id = getState().enquiries.tabToClose;
            dispatch(destroy(`OverviewForm_${id}`));
            dispatch(changeCloseDialogOpen(false, id));
            return dispatch({
                type: 'REMOVE_ENQUIRY_TAB',
                id
            });
        }

        if (!enquiriesTab.dirty) {
            dispatch(destroy(`OverviewForm_${id}`));
            return dispatch({
                type: 'REMOVE_ENQUIRY_TAB',
                id
            });
        }

        dispatch(changeCloseDialogOpen(true, id));
    };
};
