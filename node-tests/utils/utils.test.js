const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
		// average test examples
	it('should add two numbers', () => {
		var res = utils.add(33, 11); 
		expect(res).toBe(44);
		expect(res).toBeA('number');
	});

	it('should square a number', () => {
		var res = utils.square(5);
		expect(res).toBe(25);
		expect(res).toBeA('number');
	});

	// playing around with specific assertions
	// it('should expect some values', () => {
	// 	//expect(12).toNotBe(11);
	// 	//expect({name: 'Andrew'}).toNotEqual({name: 'andrew'});
	// 	//expect([2,3,4]).toInclude(3);
	// 	expect({
	// 		name: 'Jane',
	// 		age: 25,
	// 		location: 'Minnesota'
	// 	}).toExclude({
	// 		age: 24
	// 	})
	// });

	// Testing objects
	it('should verify first and last names are set', () => {
		var user = { 
			age: 25,
			location: "Minnesota"
		}

		utils.setName(user, "Jane Kagan");

		expect(user.firstName).toEqual("Jane");
		expect(user.lastName).toEqual("Kagan");
		expect(user).toInclude({
			firstName: 'Jane',
			lastName: 'Kagan'
		})
	})

	// async tests: need done and done();
	it('should async add two numbers', (done) => {
		utils.asyncAdd(4, 3, (sum) => {
			expect(sum).toBe(7).toBeA('number');
			done();
		})
	});

	it('should async square a number', (done) => {
		utils.asyncSquare(4, (square) => {
			expect(square).toBe(16).toBeA('number');
			done();
		});
	});
});