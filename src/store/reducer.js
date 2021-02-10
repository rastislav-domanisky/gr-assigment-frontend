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
};

const reducer = (state = initialState, action) => {
    return state;
}

export default reducer;