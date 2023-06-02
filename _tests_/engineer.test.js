// jest test for ../lib/engineer.js   engineer class

const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('getGithub', () => {
        it('should return the github url of the obj', () => {
            const obj = new Engineer('Steve', 3141, 'testing@testemail.com', 'https://github.com/mightjustdie')
            expect(obj.getGithub()).toEqual('https://github.com/mightjustdie')
        }) 
    });

    describe('getRole', () => {
        it('should return the role of the obj', () => {
            const obj = new Engineer('Steve', 3141, 'testing@testemail.com', 'https://github.com/mightjustdie')
            expect(obj.getRole()).toEqual('Engineer')
        })
    });
});