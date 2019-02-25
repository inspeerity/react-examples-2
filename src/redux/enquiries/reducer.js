const initialState = {
    table: {
        order: 'asc',
        orderBy: '',
        page: 0,
        rowsPerPage: 5,
        headers: [
            { key: 'created', label: 'Created', numeric: false },
            { key: 'company', label: 'Company', numeric: false },
            { key: 'industry', label: 'Industry', numeric: false },
            { key: 'annualRevenue', label: 'Annual revenue', numeric: true },
            { key: 'territory', label: 'Territory', numeric: false },
            { key: 'coverage', label: 'Coverage', numeric: true },
            { key: 'status', label: 'Status', numeric: false }
        ],
        filters: [
            {
                key: 'territory',
                expandedLabel: 'Hide Territories',
                collapsedLabel: 'Show Territories',
                filterElements: [
                    { label: 'US', key: 'us', active: true },
                    { label: 'Europe', key: 'europe', active: true },
                    { label: 'Asia', key: 'asia', active: true }
                ]
            },
            {
                key: 'productLines',
                expandedLabel: 'Hide Product Lines',
                collapsedLabel: 'Show Product Lines',
                filterElements: [
                    { label: 'Cyber', key: 'cyber', active: true },
                    { label: 'PI', key: 'PI', active: true },
                    { label: 'D&O', key: 'd&o', active: true },
                    { label: 'Mgt Liability', key: 'mgtLiability', active: true },
                    { label: 'Public Liability', key: 'publicLiability', active: true }
                ]
            }
        ],
        showHidden: false,
        searchBox: ''
    },
    tabs: [],
    selectedTab: 0,
    closeDialogOpen: false,
    tabToClose: null,
    data: [
        {
            id: 0,
            created: 'Gaming',
            company: 'Freight Haul Co.',
            industry: 'Gaming',
            annualRevenue: 'USD 10,000',
            territory: 'Europe',
            coverage: 'USD 10,000',
            status: 'Direct',
            attachments: [
                {
                    id: 0,
                    name: 'Policy Document.pdf',
                    link: '#',
                    sharing: 'Private',
                    created: 'Jun 12, 2018 at 10:00 AM',
                    removeLink: '#'
                },
                {
                    id: 1,
                    name: 'Incorporation Cert.pdf',
                    link: '#',
                    sharing: 'Private',
                    created: 'Jul 6, 2018 at 11:00 AM',
                    removeLink: '#'
                },
                {
                    id: 2,
                    name: 'CV Founder.pdf',
                    link: '#',
                    sharing: 'Shared',
                    created: 'Jul 12, 2018 at 3:00 PM',
                    removeLink: '#'
                }
            ],
            notes: [
                {
                    id: 0,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    id: 1,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            ' - Sed ut perspiciatis unde omnis iste natus errors' +
            ' - At vero eos et accusamus et iusto odio dignissimos' +
            ' - Lorem ipsum dolor sit amet'
                },
                {
                    id: 2,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    id: 3,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            ' - Sed ut perspiciatis unde omnis iste natus errors' +
            ' - At vero eos et accusamus et iusto odio dignissimos' +
            ' - Lorem ipsum dolor sit amet'
                }
            ]
        },
        {
            id: 1,
            created: 'Freight',
            company: 'Shiny Diamond Co.',
            industry: 'Freight',
            annualRevenue: 'USD 50,000',
            territory: 'Europe',
            coverage: 'USD 50,000',
            status: 'Direct',
            attachments: [
                {
                    id: 0,
                    name: 'Policy Document.pdf',
                    link: '#',
                    sharing: 'Private',
                    created: 'Jun 12, 2018 at 10:00 AM',
                    removeLink: '#'
                },
                {
                    id: 1,
                    name: 'Incorporation Cert.pdf',
                    link: '#',
                    sharing: 'Private',
                    created: 'Jul 6, 2018 at 11:00 AM',
                    removeLink: '#'
                },
                {
                    id: 2,
                    name: 'CV Founder.pdf',
                    link: '#',
                    sharing: 'Shared',
                    created: 'Jul 12, 2018 at 3:00 PM',
                    removeLink: '#'
                }
            ],
            notes: [
                {
                    id: 0,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    id: 1,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            ' - Sed ut perspiciatis unde omnis iste natus errors' +
            ' - At vero eos et accusamus et iusto odio dignissimos' +
            ' - Lorem ipsum dolor sit amet'
                },
                {
                    id: 2,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    id: 3,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            ' - Sed ut perspiciatis unde omnis iste natus errors' +
            ' - At vero eos et accusamus et iusto odio dignissimos' +
            ' - Lorem ipsum dolor sit amet'
                }
            ]
        },
        {
            id: 2,
            created: 'Retail',
            company: 'Fit Gyms',
            industry: 'Retail',
            annualRevenue: 'USD 26,000',
            territory: 'Europe',
            coverage: 'USD 26,000',
            status: 'Direct',
            attachments: [
                {
                    id: 0,
                    name: 'Policy Document.pdf',
                    link: '#',
                    sharing: 'Private',
                    created: 'Jun 12, 2018 at 10:00 AM',
                    removeLink: '#'
                },
                {
                    id: 1,
                    name: 'Incorporation Cert.pdf',
                    link: '#',
                    sharing: 'Private',
                    created: 'Jul 6, 2018 at 11:00 AM',
                    removeLink: '#'
                },
                {
                    id: 2,
                    name: 'CV Founder.pdf',
                    link: '#',
                    sharing: 'Shared',
                    created: 'Jul 12, 2018 at 3:00 PM',
                    removeLink: '#'
                }
            ],
            notes: [
                {
                    id: 0,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    id: 1,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            ' - Sed ut perspiciatis unde omnis iste natus errors' +
            ' - At vero eos et accusamus et iusto odio dignissimos' +
            ' - Lorem ipsum dolor sit amet'
                },
                {
                    id: 2,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    id: 3,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            ' - Sed ut perspiciatis unde omnis iste natus errors' +
            ' - At vero eos et accusamus et iusto odio dignissimos' +
            ' - Lorem ipsum dolor sit amet'
                }
            ]
        },
        {
            id: 3,
            created: 'Retail',
            company: 'Fit Gyms',
            industry: 'Retail',
            annualRevenue: 'USD 26,000',
            territory: 'Europe',
            coverage: 'USD 26,000',
            status: 'Direct',
            attachments: [
                {
                    id: 0,
                    name: 'Policy Document.pdf',
                    link: '#',
                    sharing: 'Private',
                    created: 'Jun 12, 2018 at 10:00 AM',
                    removeLink: '#'
                },
                {
                    id: 1,
                    name: 'Incorporation Cert.pdf',
                    link: '#',
                    sharing: 'Private',
                    created: 'Jul 6, 2018 at 11:00 AM',
                    removeLink: '#'
                },
                {
                    id: 2,
                    name: 'CV Founder.pdf',
                    link: '#',
                    sharing: 'Shared',
                    created: 'Jul 12, 2018 at 3:00 PM',
                    removeLink: '#'
                }
            ],
            notes: [
                {
                    id: 0,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    id: 1,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            ' - Sed ut perspiciatis unde omnis iste natus errors' +
            ' - At vero eos et accusamus et iusto odio dignissimos' +
            ' - Lorem ipsum dolor sit amet'
                },
                {
                    id: 2,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    id: 3,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            ' - Sed ut perspiciatis unde omnis iste natus errors' +
            ' - At vero eos et accusamus et iusto odio dignissimos' +
            ' - Lorem ipsum dolor sit amet'
                }
            ]
        },
        {
            id: 4,
            created: 'Retail',
            company: 'Fit Gyms',
            industry: 'Retail',
            annualRevenue: 'USD 26,000',
            territory: 'Europe',
            coverage: 'USD 26,000',
            status: 'Direct',
            attachments: [
                {
                    id: 0,
                    name: 'Policy Document.pdf',
                    link: '#',
                    sharing: 'Private',
                    created: 'Jun 12, 2018 at 10:00 AM',
                    removeLink: '#'
                },
                {
                    id: 1,
                    name: 'Incorporation Cert.pdf',
                    link: '#',
                    sharing: 'Private',
                    created: 'Jul 6, 2018 at 11:00 AM',
                    removeLink: '#'
                },
                {
                    id: 2,
                    name: 'CV Founder.pdf',
                    link: '#',
                    sharing: 'Shared',
                    created: 'Jul 12, 2018 at 3:00 PM',
                    removeLink: '#'
                }
            ],
            notes: [
                {
                    id: 0,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    id: 1,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            ' - Sed ut perspiciatis unde omnis iste natus errors' +
            ' - At vero eos et accusamus et iusto odio dignissimos' +
            ' - Lorem ipsum dolor sit amet'
                },
                {
                    id: 2,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    id: 3,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            ' - Sed ut perspiciatis unde omnis iste natus errors' +
            ' - At vero eos et accusamus et iusto odio dignissimos' +
            ' - Lorem ipsum dolor sit amet'
                }
            ]
        },
        {
            id: 5,
            created: 'Retail',
            company: 'Fit Gyms',
            industry: 'Retail',
            annualRevenue: 'USD 26,000',
            territory: 'Europe',
            coverage: 'USD 26,000',
            status: 'Direct',
            attachments: [
                {
                    id: 0,
                    name: 'Policy Document.pdf',
                    link: '#',
                    sharing: 'Private',
                    created: 'Jun 12, 2018 at 10:00 AM',
                    removeLink: '#'
                },
                {
                    id: 1,
                    name: 'Incorporation Cert.pdf',
                    link: '#',
                    sharing: 'Private',
                    created: 'Jul 6, 2018 at 11:00 AM',
                    removeLink: '#'
                },
                {
                    id: 2,
                    name: 'CV Founder.pdf',
                    link: '#',
                    sharing: 'Shared',
                    created: 'Jul 12, 2018 at 3:00 PM',
                    removeLink: '#'
                }
            ],
            notes: [
                {
                    id: 0,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    id: 1,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            ' - Sed ut perspiciatis unde omnis iste natus errors' +
            ' - At vero eos et accusamus et iusto odio dignissimos' +
            ' - Lorem ipsum dolor sit amet'
                },
                {
                    id: 2,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    id: 3,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            ' - Sed ut perspiciatis unde omnis iste natus errors' +
            ' - At vero eos et accusamus et iusto odio dignissimos' +
            ' - Lorem ipsum dolor sit amet'
                }
            ]
        },
        {
            id: 6,
            created: 'Retail',
            company: 'Fit Gyms',
            industry: 'Retail',
            annualRevenue: 'USD 26,000',
            territory: 'Europe',
            coverage: 'USD 26,000',
            status: 'Direct',
            attachments: [
                {
                    id: 0,
                    name: 'Policy Document.pdf',
                    link: '#',
                    sharing: 'Private',
                    created: 'Jun 12, 2018 at 10:00 AM',
                    removeLink: '#'
                },
                {
                    id: 1,
                    name: 'Incorporation Cert.pdf',
                    link: '#',
                    sharing: 'Private',
                    created: 'Jul 6, 2018 at 11:00 AM',
                    removeLink: '#'
                },
                {
                    id: 2,
                    name: 'CV Founder.pdf',
                    link: '#',
                    sharing: 'Shared',
                    created: 'Jul 12, 2018 at 3:00 PM',
                    removeLink: '#'
                }
            ],
            notes: [
                {
                    id: 0,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    id: 1,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            ' - Sed ut perspiciatis unde omnis iste natus errors' +
            ' - At vero eos et accusamus et iusto odio dignissimos' +
            ' - Lorem ipsum dolor sit amet'
                },
                {
                    id: 2,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    id: 3,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            ' - Sed ut perspiciatis unde omnis iste natus errors' +
            ' - At vero eos et accusamus et iusto odio dignissimos' +
            ' - Lorem ipsum dolor sit amet'
                }
            ]
        },
        {
            id: 7,
            created: 'Retail',
            company: 'Fit Gyms',
            industry: 'Retail',
            annualRevenue: 'USD 26,000',
            territory: 'Europe',
            coverage: 'USD 26,000',
            status: 'Direct',
            attachments: [
                {
                    id: 0,
                    name: 'Policy Document.pdf',
                    link: '#',
                    sharing: 'Private',
                    created: 'Jun 12, 2018 at 10:00 AM',
                    removeLink: '#'
                },
                {
                    id: 1,
                    name: 'Incorporation Cert.pdf',
                    link: '#',
                    sharing: 'Private',
                    created: 'Jul 6, 2018 at 11:00 AM',
                    removeLink: '#'
                },
                {
                    id: 2,
                    name: 'CV Founder.pdf',
                    link: '#',
                    sharing: 'Shared',
                    created: 'Jul 12, 2018 at 3:00 PM',
                    removeLink: '#'
                }
            ],
            notes: [
                {
                    id: 0,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    id: 1,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            ' - Sed ut perspiciatis unde omnis iste natus errors' +
            ' - At vero eos et accusamus et iusto odio dignissimos' +
            ' - Lorem ipsum dolor sit amet'
                },
                {
                    id: 2,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                },
                {
                    id: 3,
                    title: 'Notes from meeting with Alex',
                    lastModified: 'Jul 7, 2018 at 3:00 PM',
                    content:
            ' - Sed ut perspiciatis unde omnis iste natus errors' +
            ' - At vero eos et accusamus et iusto odio dignissimos' +
            ' - Lorem ipsum dolor sit amet'
                }
            ]
        }
    ]
};

const enquiries = (state = initialState, action) => {
    switch (action.type) {
    case 'SEARCH_ENQUIRIES':
        return {
            ...state,
            table: {
                ...state.table,
                searchBox: action.searchText
            }
        };
    case 'TOGGLE_ENQUIRIES_SHOW_HIDDEN':
        return {
            ...state,
            table: {
                ...state.table,
                showHidden: !state.table.showHidden
            }
        };
    case 'TOGGLE_ENQUIRIES_FILTER':
        return {
            ...state,
            table: {
                ...state.table,
                filters: state.table.filters.map((filter, i) => {
                    if (i === action.index) {
                        return {
                            ...filter,
                            filterElements: filter.filterElements.map(filterElement => {
                                if (filterElement.key === action.filterKey) {
                                    return {
                                        ...filterElement,
                                        active: !filterElement.active
                                    };
                                } else {
                                    return filterElement;
                                }
                            })
                        };
                    } else {
                        return filter;
                    }
                })
            }
        };
    case 'CHANGE_ENQUIRIES_TABLE_PAGE':
        return {
            ...state,
            table: { ...state.table, page: action.page }
        };
    case 'CHANGE_ENQUIRIES_TABLE_ROWS_PER_PAGE':
        return {
            ...state,
            table: { ...state.table, rowsPerPage: action.rowsPerPage }
        };
    case 'CHANGE_ENQUIRIES_TABLE_SORT':
        const newOrderBy = action.property;
        let newOrder = 'desc';

        if (
            state.table.orderBy === action.property &&
        state.table.order === 'desc'
        ) {
            newOrder = 'asc';
        }
        return {
            ...state,
            table: {
                ...state.table,
                orderBy: newOrderBy,
                order: newOrder
            }
        };
    case 'OPEN_ENQUIRY_TAB':
        const openedTab = state.tabs.find(tab => {
            if (tab.recordId === action.recordId) {
                return tab;
            }
            return null;
        });
        if (openedTab) {
            return {
                ...state,
                selectedTab: openedTab.id
            };
        }

        const dataRecord = state.data.find(record => {
            if (record.id === action.recordId) {
                return record;
            }
            return null;
        });
        let nextTabId = 1;
        if (state.tabs.length > 0) {
            nextTabId = state.tabs[state.tabs.length - 1].id + 1;
        }
        return {
            ...state,
            tabs: [
                ...state.tabs,
                {
                    id: nextTabId,
                    selectedLeftTab: 0,
                    leftTabForms: { 0: false },
                    label: dataRecord.company,
                    recordId: action.recordId,
                    data: dataRecord
                }
            ],
            selectedTab: nextTabId
        };
    case 'SELECT_ENQUIRY_TAB':
        return { ...state, selectedTab: action.id };
    case 'CHANGE_CLOSE_DIALOG_OPEN':
        return { ...state, closeDialogOpen: action.value, tabToClose: action.id };
    case 'REMOVE_ENQUIRY_TAB':
        return {
            ...state,
            tabs: state.tabs.filter(tab => tab.id !== action.id),
            selectedTab: state.selectedTab === action.id ? 0 : state.selectedTab
        };
    case 'HIDE_ENQUIRY_RECORD':
        console.log('HIDE_ENQUIRY_RECORD action ' + action.recordId);
        return state;
    case 'ADD_ENQUIRY_RECORD_TO_FAVOURITES':
        console.log('ADD_ENQUIRY_RECORD_TO_FAVOURITES action ' + action.recordId);
        return state;
    case 'ADD_ENQUIRY_RECORD_NOTE':
        console.log('ADD_ENQUIRY_RECORD_NOTE action ' + action.recordId);
        return state;
    case 'REQUEST_ENQUIRY_QUOTE':
        console.log('REQUEST_ENQUIRY_QUOTE action ' + action.recordId);
        return state;
    case 'CONTACT_ENQUIRY':
        console.log('CONTACT_ENQUIRY action ' + action.recordId);
        return state;
    case 'SET_LEFT_TAB_FORM':
        return {
            ...state,
            tabs: state.tabs.map(tab => {
                if (tab.id !== action.mainTabIndex) {
                    return tab;
                } else {
                    return {
                        ...tab,
                        leftTabForms: {
                            ...tab.leftTabForms,
                            [action.leftTabIndex]: action.show
                        }
                    };
                }
            })
        };
    case 'CHANGE_ENQUIRY_LEFT_TAB':
        return {
            ...state,
            tabs: state.tabs.map(tab => {
                if (tab.id === action.mainTabId) {
                    return { ...tab, selectedLeftTab: action.leftTabId };
                } else {
                    return tab;
                }
            })
        };
    case 'NEW_ENQUIRY':
        nextTabId = 1;
        if (state.tabs.length > 0) {
            nextTabId = state.tabs[state.tabs.length - 1].id + 1;
        }

        return {
            ...state,
            tabs: [
                ...state.tabs,
                {
                    id: nextTabId,
                    selectedLeftTab: 0,
                    leftTabForms: { 0: true },
                    label: 'New enquiry',
                    recordId: null,
                    data: {
                        attachments: [],
                        notes: []
                    }
                }
            ],
            selectedTab: nextTabId
        };
    case 'SET_ENQUIRY_DIRTY':
        return {
            ...state,
            tabs: state.tabs.map(
                tab => (tab.id === state.selectedTab ? { ...tab, dirty: true } : tab)
            )
        };
    default:
        return state;
    }
};

export default enquiries;
