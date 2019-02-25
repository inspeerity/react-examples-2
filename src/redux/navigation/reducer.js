const initialState = {
    navigationItems: [
        {id: 0, label: 'Dashboard', link: '/'},
        {id: 1, label: 'Enquiries', link: '/enquiries'}
    ]
};

const navigation = (state = initialState, action) => {
    switch (action.type) {
    default:
        return state;
    }
};

export default navigation;
