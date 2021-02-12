const nameValidator = (val) => {
    val = val.trim();
    if (val.length === 0) {
        return true;
    }
    const specialChars = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    const numberChars = /\d+/g;
    val = val.trim();
    for(let i=0; i<val.length; i++) {
        if(specialChars.test(val.charAt(i))) {
            return false;
        }
        if(numberChars.test(val.charAt(i))) {
            return false;
        }
    }
    if (!/[A-Z]/.test(val.charAt(0))) {
        return false;
    }
    for (let i = 1; i < val.length; i++) {
        if (!/[a-z]/.test(val.charAt(i))) {
            return false;
        }
    }
    if (val.length < 2 || val.length > 20) {
        return false;
    }
    return true;
}

export default nameValidator;