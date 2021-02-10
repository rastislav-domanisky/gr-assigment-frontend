const initialState = {
    currentPage: 0,
    currentOption: "SPECIFIC",
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
    return state;
}

export default reducer;