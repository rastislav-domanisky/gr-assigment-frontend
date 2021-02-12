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
        case actionTypes.UPDATE_NAME:
            return {
                ...state,
                name: action.payload,
            };
        case actionTypes.UPDATE_LAST_NAME:
            return {
                ...state,
                lastName: action.payload,
            };
        case actionTypes.UPDATE_EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        case actionTypes.UPDATE_TEL:
            return {
                ...state,
                tel: action.payload,
            };
        case actionTypes.UPDATE_PERSONAL_DATA:
            return {
                ...state,
                acceptedPersonalData: action.payload,
            };
    }
    return state;
}

export default reducer;