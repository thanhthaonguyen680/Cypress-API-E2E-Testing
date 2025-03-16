const { describe } = require("mocha");

describe('test GET request',()=>{
    it ('shoule be able to send GET request',()=>{
        cy.request({
            url : 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET'
        }).then (response=>{
            // cy.log(JSON.stringify(response));
            let{status,body} = response
            expect(status).to.eq(200);
            expect(body.length).to.equal(100);
            // get a random element from array object
            let randomIndex = Math.random() * body.length;
            let roundedRandomIndex = Math.floor(randomIndex);
            let randomObject = body[roundedRandomIndex];
            // verification
            verifyNotEmply('userID',randomObject.userId )
            verifyNotEmply('id',randomObject.id )
            verifyNotEmply('title',randomObject.title )
            verifyNotEmply('userID',randomObject.userId )
        })
    })
})
let verifyNotEmply = (name, data)=>{
    if(!data){
        expect(true).to.equal(false,`${name} data is empty`)
    }

}