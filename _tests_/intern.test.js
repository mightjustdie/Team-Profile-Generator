// jest test for ../lib/intern.js   intern class

const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('getSchool', () => {
        it('should return school from the obj', () => {
            const obj = new Intern('Steve', 3141, 'test@testmail.com', 'GT Fullstack Flex')
            expect(obj.getSchool()).toEqual('GT Fullstack Flex')
        })
    });

    describe('getRole', () => {
        it('should return the role Intern', () => {
            const obj = new Intern('Steve', 3141, 'test@testmail.com', 'GT Fullstack Flex')
            expect(obj.getRole()).toEqual('Intern')
        })
    });





})