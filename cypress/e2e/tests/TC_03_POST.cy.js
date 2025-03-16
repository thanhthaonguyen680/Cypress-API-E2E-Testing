const { describe } = require("mocha");

describe('Test post request',()=>{
    it('should be able to send post request',()=>{
        let url = 'https://jsonplaceholder.typicode.com/posts';
        let header = {
            'Content-type': 'application/json; charset=UTF-8',
        }
        let requestBody = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
        let requestObject = {
            method: 'POST',
            url: url,
            headers: header,
            body: requestBody
        }
        cy.request(requestObject).then(response=>{
            let {status, body} = response
            // cy.log(JSON.stringify(response))
            expect(status).to.equal(201)
            let {userId, id, title} = body;
            let responseBody = body.body;
            // verification
            expect(userId).to.eq(requestBody.userId);
            expect(id).to.eq(101,'id is not correct');
            expect(title).to.eq(requestBody.title,'title is not correct');
            expect(responseBody).to.eq(requestBody.body, 'body is not correct');



        })
    })
})