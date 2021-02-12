const telNumberValidator = (val) => {
    val = val.trim();
    if(val.length === 0) {
        return true;
    }
    if (val.charAt(0) !== "+") {
        return false;
    }
    for (let i = 1; i < val.length; i++) {
        if (!/^\d+$/.test(val.charAt(i))) {
            return false;
        }
    }
    if (val.length < 13 || val.length > 13) {
        return false;
    }
    const patternSK = "+421";
    const patternCZ = "+420";
    let result = true;
    for (let i = 1; i < patternSK.length; i++) {
        if(result == false) {
            return false;
        }
        if (val.charAt(i) === patternSK.charAt(i) || val.charAt(i) === patternCZ.charAt(i)) {
            result = true;
        } else {
            result = false;
        }
    }
    return result;
}

export default telNumberValidator;