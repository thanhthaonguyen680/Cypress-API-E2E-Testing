import LoginPage from "../pages/login";

const login = require("../../fixtures/login")
describe("Login Test",()=> {
    before("",()=>{
        cy.visit("/login")
        cy.wait(2000) //implicit wait
        cy.get(LoginPage.userForm).should("be.visible")
    })

    it("TC_01_Login_Successfully",()=>{
        cy.get(LoginPage.newUser).clear().type(login.username)
        cy.get(LoginPage.passWord).clear().type(login.password)
        cy.get(LoginPage.loginBtn).click()
    })
    
})



