import {isNumeric} from "./isNumeric";

export const check = (a, b) => {
    if (!isNumeric(a)) {
        throw 'first arg is not number';
    } else if (!isNumeric(b)) {
        throw 'second arg is not number';
    }
};
