/// <reference types="cypress" />
describe('My Test Suite',function(){

    it('Test Case-1',function(){

        //Handling Alerts

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')

        })
        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')

        })

        //Handling child windows

        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','rahulshettyacademy')
        cy.go('back')
    })
})