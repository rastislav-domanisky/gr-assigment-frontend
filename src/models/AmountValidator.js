const amountValidator = (value) => {
    value= value.trim()
    if(!isNaN(value) && !isNaN(parseFloat(value))) {
        return true;
    } else {
        return false;
    }
}

export default amountValidator;