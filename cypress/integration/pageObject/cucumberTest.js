class cucumberTest {
    openBankApplication () {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        cy.get('img[title="ParaBank"]').should('be.visible');
    }

    loginBankApplication () {
        cy.get('input[name="username"]').type('admin');
        cy.get('input[name="password"]').type('admin');
        cy.get('input[type="submit"]').click();
        cy.get('h1').contains('Accounts Overview');
    }
}

export default cucumberTest