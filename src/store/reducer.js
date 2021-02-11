import * as actionTypes from './actions';

const initialState = {
    currentPage: 0,
    currentOption: "GENERAL",
    choosedShelter: null,
    amount: 50,
    name: "",
    lastName: "",
    email: "",
    tel: "",
    acceptedPersonalData: false,
    shelters: null,
    pages: [
        {
            heading: "Vyberte si možnosť, ako chcete pomôcť"
        },
        {
            heading: "Potrebujeme od Vás zopár informácií"
        },
        {
            heading: "Skontrolujte si zadané údaje"
        },
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_SHELTERS:
            return {
                ...state,
                shelters: action.payload,
            };
        case actionTypes.CHOOSE_SHELTER:
            return {
                ...state,
                choosedShelter: action.payload,
            };
        case actionTypes.UPDATE_AMOUNT:
            return {
                ...state,
                amount: action.payload,
            };
        case actionTypes.UPDATE_OPTION:
            return {
                ...state,
                currentOption: action.payload,
            };
        case actionTypes.PAGE_BACK:
            return {
                ...state,
                currentPage: state.currentPage - 1,
            };
        case actionTypes.PAGE_FORWARD:
            return {
                ...state,
                currentPage: state.currentPage + 1,
            };
    }
    return state;
}

export default reducer;