import apiLoginPage from "../pages/API_Login_Page";
const apidata = require("../../fixtures/apidata")
describe("Test_API",()=>{
    const randomText = new Date().getTime();
    const username = apidata.userName + randomText
    it("get bookstore",()=>{
        cy.request({
            method: "GET",
            url: apiLoginPage.getBook,
        }).then((Response)=>{
            expect(Response.status).to.eq(200)
        })
    })
    it("create user account",()=>{
        cy.request({
            method: "POST",
            url: apiLoginPage.createAccountUser,
            body: {
                userName: username,
                password: apidata.password
            }
        }).then((response)=>{
            expect(response.status).to.eq(201)
        })
    })
})