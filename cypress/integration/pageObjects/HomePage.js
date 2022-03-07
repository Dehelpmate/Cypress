class HomePage{

    getEditBox()
    {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getGender()
    {
       return cy.get('#exampleFormControlSelect1')
    }

    getTwowayDataBinding()
    {
        return cy.get('input[name="name"]:nth-child(1)')
    }

    getEntrepreneaur()
    {
        return cy.get('#inlineRadio3')
    }
}

export default HomePage;