const amountValidator = (value) => {
    if(typeof value != "string") {
        return true;
    }
    value= value.trim()
    if(!isNaN(value) && !isNaN(parseFloat(value))) {
        return true;
    } else {
        return false;
    }
}

export default amountValidator;