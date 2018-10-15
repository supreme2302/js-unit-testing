import {isNumeric} from '../utils/isNumeric.js';

export default class Calculate {
    static sum (a, b) {
        if (!isNumeric(a)) {
            throw 'first arg is not number';
        } else if (!isNumeric(b)) {
            throw 'first arg is not number';
        }
        return a + b;
    }
    static sub (a, b) {
        if (!isNumeric(a)) {
            throw 'first arg is not number';
        } else if (!isNumeric(b)) {
            throw 'first arg is not number';
        }
        return a - b;
    }
    static div (a, b) {
        if (!isNumeric(a)) {
            throw 'first arg is not number';
        } else if (!isNumeric(b)) {
            throw 'first arg is not number';
        }
        return a / b;
    }
    static mul (a, b) {
        if (!isNumeric(a)) {
            throw 'first arg is not number';
        } else if (!isNumeric(b)) {
            throw 'first arg is not number';
        }
        return a * b;
    }

}
