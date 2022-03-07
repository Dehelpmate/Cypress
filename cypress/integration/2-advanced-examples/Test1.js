/// <reference types="cypress" />
describe("Test Suite-1", function(){

    it("TestCase-1", function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('Ca')
        cy.wait(2000)
        //identifying element with parent child relationship
        cy.get('.products').find('.product').should('have.length',4)
        //identify only visible element
        cy.get('.product:visible').should('have.length',4)
        cy.get('.product:visible').eq(0).contains('ADD TO CART').click()
        //iterate throgh product and click specific product 
        cy.get('.products:visible').find('.product').each(($e1, index, $list) => {

            const vegitableName=$e1.find('h4.product-name').text()
            if(vegitableName.includes('Capsicum')){
                cy.wrap($e1).find('button').click()
            }
        })

        
        


    })


})