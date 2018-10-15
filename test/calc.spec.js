import Calculate from '../calculator/calculate';
import chai from 'chai';


describe('Testing sum', () => {

	it('should return sum of "a" and "b"', () => {
		const result = Calculate.sum(10, 23);
		chai.expect(result).to.equal(33);
	});

    it('should return sum of "a" and "b" with negative number', () => {
        const result = Calculate.sum(10, -20);
        chai.expect(result).to.equal(-10);
    });

    it('should be thrown exception (first arg = Infinity)', () => {
        chai.expect(() => Calculate.sum(Infinity, -20)).to.throw(/\.*\s/);
    });

    it('should be thrown exception (second arg = Infinity)', () => {
        chai.expect(() => Calculate.sum(20, Infinity)).to.throw(/\.*\s/);
    });

    it('should be thrown exception (first arg is string)', () => {
        chai.expect(() => Calculate.sum('aaa', -20)).to.throw(/\.*\s/);
    });

    it('should be thrown exception (second arg is string)', () => {
        chai.expect(() => Calculate.sum(20, 'b')).to.throw(/\.*\s/);
    });
});



describe('Testing sub', () => {
    it('should return sub of "a" and "b"', () => {
        const result = Calculate.sub(123, 200);
        chai.expect(result).to.equal(-77);
    });

    it('should return sub of "a" and "b" with negative number', () => {
        const result = Calculate.sub(100, -130);
        chai.expect(result).to.equal(230);
    });

    it('should be thrown exception (first arg = Infinity)', () => {
        chai.expect(() => Calculate.sub(Infinity, -20)).to.throw(/\.*\s/);
    });

    it('should be thrown exception (second arg = Infinity)', () => {
        chai.expect(() => Calculate.sub(20, Infinity)).to.throw(/\.*\s/);
    });

    it('should be thrown exception (first arg is string)', () => {
        chai.expect(() => Calculate.sub('aaa', -20)).to.throw(/\.*\s/);
    });

    it('should be thrown exception (second arg is string)', () => {
        chai.expect(() => Calculate.sub(20, 'b')).to.throw(/\.*\s/);
    });
});


describe('Testing mul', () => {
    it('should return mul of "a" and "b"', () => {
        const result = Calculate.mul(12, 12);
        chai.expect(result).to.equal(144);
    });

    it('should return mul of "a" and "b" with negative number', () => {
        const result = Calculate.mul(13, -3);
        chai.expect(result).to.equal(-39);
    });

    it('should be thrown exception (first arg = Infinity)', () => {
        chai.expect(() => Calculate.mul(Infinity, -20)).to.throw(/\.*\s/);
    });

    it('should be thrown exception (second arg = Infinity)', () => {
        chai.expect(() => Calculate.mul(20, Infinity)).to.throw(/\.*\s/);
    });

    it('should be thrown exception (first arg is string)', () => {
        chai.expect(() => Calculate.mul('aaa', -20)).to.throw(/\.*\s/);
    });

    it('should be thrown exception (second arg is string)', () => {
        chai.expect(() => Calculate.mul(20, 'b')).to.throw(/\.*\s/);
    });
});


describe('Testing div', () => {
    it('should return div of "a" and "b"', () => {
        const result = Calculate.div(121, 11);
        chai.expect(result).to.equal(11);
    });

    it('should return div of "a" and "b" with negative number', () => {
        const result = Calculate.div(-56, -8);
        chai.expect(result).to.equal(7);
    });

    it('should return Infinity', () => {
        const result = Calculate.div(121, 0);
        chai.expect(result).to.equal(Infinity);
    });

    it('should return NaN (0 / 0)', () => {
        const result = Calculate.div(0, 0);
        chai.expect(result).to.be.NaN;
    });

    it('should return 0', () => {
        const result = Calculate.div(0, 123);
        chai.expect(result).to.equal(0);
    });


    it('should be thrown exception (first arg = Infinity)', () => {
        chai.expect(() => Calculate.div(Infinity, -20)).to.throw(/\.*\s/);
    });

    it('should be thrown exception (second arg = Infinity)', () => {
        chai.expect(() => Calculate.div(20, Infinity)).to.throw(/\.*\s/);
    });

    it('should be thrown exception (first arg is string)', () => {
        chai.expect(() => Calculate.div('aaa', -20)).to.throw(/\.*\s/);
    });

    it('should be thrown exception (second arg is string)', () => {
        chai.expect(() => Calculate.div(20, 'b')).to.throw(/\.*\s/);
    });
});

