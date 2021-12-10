import { Given,When,Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('Customer navigate to shopping application', () =>{
    cy.visit('http://automationpractice.com/index.php');
    cy.get('a[title="My Store"]').should('be.visible');
})

When('Customer click on sign-in button', () =>{
    cy.get('.login').click();
    cy.url().should('contain','back=my-account');
})


And('Customer enters email and password',(datatable) =>{
    datatable.hashes().forEach(element => {
        cy.get('.page-subheading').contains('Already registered?').should('be.visible');
        cy.get('#email').type(element.email);
        cy.get('#passwd').type(element.password);
    });

Then('Click Sign-In Button',() =>{
    cy.get('#SubmitLogin').click();
    let error = cy.get('#create_account_error').should('be.visible');
    if(error!=true){
        cy.url().should('contain','controller=my-account');
    }
    else {
        //cy.get('.alert.alert-danger').should('be.visible');
        cy.get('#create_account_error').should('be.visible');
    }
})
})
