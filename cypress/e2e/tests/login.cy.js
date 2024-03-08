import LoginPage from "../pages/login";

const login = require("../../fixtures/login")
describe("Login Test",()=> {
    before("hihi",()=>{
        cy.visit("/login")
        cy.wait(5000) //implicit wait
    })

    it("TC_01_Login_Successfully",()=>{
        cy.get(LoginPage.userName).clear().type(login.username)
        cy.get(LoginPage.passWord).clear().type(login.password)
        cy.get(LoginPage.loginBtn).click()
    })
    
})



