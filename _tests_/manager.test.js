// jest test for ../lib/manager.js   manager class

const Manager = require('../lib/manager'); 

describe('Manager', () => {
    describe('getOfficeNumber', () => {
        it('should return objs officeNumber', () => {
            const obj = new Manager('Steve', 3141, 'manager@testmail.com', '(678) 988 - 9977')
            expect(obj.getOfficeNumber()).toEqual('(678) 988 - 9977')
        })
    });

    describe('getRole', () => {
        it('should return string Manager', () => {
            const obj = new Manager('Steve', 3141, 'manager@testmail.com', '(678) 988 - 9977')
            expect(obj.getRole()).toEqual('Manager')
        })
    });




})