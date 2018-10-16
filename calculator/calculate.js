import {check} from "../utils/check";

export default class Calculate {
    static sum (a, b) {
        check(a, b);
        return a + b;
    }
    static sub (a, b) {
        check(a, b);
        return a - b;
    }
    static div (a, b) {
        check(a, b);
        if (b === 0) {
            throw 'division by zero';
        }
        return a / b;
    }
    static mul (a, b) {
        check(a, b);
        return a * b;
    }

}
