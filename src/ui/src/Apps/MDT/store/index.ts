const INITIAL_STATE = {
    visible: true,
    warrants: new Map(),
    reports: new Map(),
    page: 0,
};

function reducer(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case "SET_MDT_VISIBLE":
            return {
                ...state,
                visible: action.payload,
            };
        case "SET_MDT_DATA":
            return {
                ...state,
                data: action.data,
            };
        case "SET_MDT_PAGE":
            return {
                ...state,
                page: action.page,
            };
        default:
            return state;
    }
}

export default reducer;
