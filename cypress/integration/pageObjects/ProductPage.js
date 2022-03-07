class ProductPage
{
    getCheckoutPage()
    {
        return cy.get('.nav-link.btn.btn-primary')
    }

    productCheckout()
    {
       return cy.get('.btn.btn-success')
    }

    getContryTextBox()
    {
       return cy.get('#country')
    }

    getAutoSuggetion()
    {
       return cy.get('.suggestions > ul > li > a')
    }




}
export default ProductPage