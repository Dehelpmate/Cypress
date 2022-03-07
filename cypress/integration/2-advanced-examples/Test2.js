/// <reference types="cypress" />
describe("Test suiet-1",function(){
    
    it("Test Case-2",function(){
        //checkbox

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get("input[type='checkbox']").check(['option2','option3'])

        //Static Dropdown

        cy.get('select').select('option2').should('have.value','option2')

        //Dynamic Dropdowns

        cy.get('input#autocomplete').type('Ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            
           if($el.text()==='India')
           {
               cy.wrap($el).click()

           }
          })
          cy.get('input#autocomplete').should('have.value','India')

        //Visible and Invisible 

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })

})