const { describe } = require("mocha");

describe('test GET request',()=>{
    it ('shoule be able to send GET request',()=>{
        cy.request({
            url : 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET'
        }).then (response=>{
            // cy.log(JSON.stringify(response));
            expect(response.status).to.eq(200);
            expect(response.body.length).to.equal(100);
        })
    })
})