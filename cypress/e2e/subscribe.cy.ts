describe("Newsletter subscribe form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
        cy.viewport(1600, 800)
    })
    it("allows users to subscribe to the email list", () => {
        cy.getByData("email-input").type("tom@aol.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains("tom@aol.com")
    }) 
    it("does NOT allow an invalid email address", () => {
        cy.getByData("email-input").type("toma")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })
    it("does Not allow to use same email twice", () => {
        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist").contains("john@example.com already exists. Please use a different email address.")   
    })
})
