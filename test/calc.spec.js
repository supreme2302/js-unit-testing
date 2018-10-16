import Calculate from '../calculator/calculate';
import {check} from "../utils/check";
import chai from 'chai';


describe('Testing check', () => {
    it('should be thrown exception (first arg = Infinity)', () => {
        chai.expect(() => check(Infinity, -20)).to.throw(/\.*\s/);
    });

    it('should be thrown exception (second arg = Infinity)', () => {
        chai.expect(() => check(20, Infinity)).to.throw(/\.*\s/);
    });

    it('should be thrown exception (first arg is string)', () => {
        chai.expect(() => check('aaa', -20)).to.throw(/\.*\s/);
    });

    it('should be thrown exception (second arg is string)', () => {
        chai.expect(() => check(20, 'b')).to.throw(/\.*\s/);
    });
});

describe('Testing sum', () => {

    it('should return sum of "a" and "b"', () => {
		const result = Calculate.sum(10.34, 23.6);
		chai.expect(result).to.equal(33.94);
	});

    it('should return sum of "a" and "b" with negative number', () => {
        const result = Calculate.sum(10, -20);
        chai.expect(result).to.equal(-10);
    });
});



describe('Testing sub', () => {
    it('should return sub of "a" and "b"', () => {
        const result = Calculate.sub(123, 200);
        chai.expect(result).to.equal(-77);
    });

    it('should return sub of "a" and "b" with negative number', () => {
        const result = Calculate.sub(100.32, -130.76);
        chai.expect(result).to.equal(100.32 + 130.76);
    });
});


describe('Testing mul', () => {
    it('should return mul of "a" and "b"', () => {
        const result = Calculate.mul(12, 12);
        chai.expect(result).to.equal(144);
    });

    it('should return mul of "a" and "b" with negative number', () => {
        const result = Calculate.mul(13, -3.5);
        chai.expect(result).to.equal(-45.5);
    });
});


describe('Testing div', () => {
    it('should return div of "a" and "b"', () => {
        const result = Calculate.div(121, 11);
        chai.expect(result).to.equal(11);
    });

    it('should return div of "a" and "b" with negative number', () => {
        const result = Calculate.div(-56.7, -8.1);
        chai.expect(result).to.equal(-56.7 / -8.1);
    });

    it('should return 0', () => {
        const result = Calculate.div(0, 123);
        chai.expect(result).to.equal(0);
    });

    it('should be thrown exception, (121 / 0)', () => {
        chai.expect(() => Calculate.div(121, 0)).to.throw(/\.*\s/);
    });

    it('should be thrown exception, (0 / 0)', () => {
        chai.expect(() => Calculate.div(0, 0)).to.throw(/\.*\s/);
    });
});

