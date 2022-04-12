/// <reference types="Cypress" />
import { Given,When,Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('Open amazon india shopping application', () =>{
    cy.visit('https://www.amazon.in/');
    cy.get('#nav-logo-sprites').should('be.visible');
})

When('Click on the hamburger menu in the top left corner', () =>{
    cy.get('#nav-hamburger-menu').click();
    cy.get('#hmenu-content').should('be.visible');
})

Then('Scroll to {string} and click on the {string}',(menu,menu1) =>{
    cy.get('.hmenu-item.hmenu-title').contains(menu).scrollIntoView();
    cy.get(':nth-child(16) .hmenu-item').contains(menu1).scrollIntoView().click();
    });

Then('click on {string}',(list) =>{
        cy.get('.hmenu-visible :nth-child(3)').contains(list).scrollIntoView().click({force: true});
        });


Then('filter the result by Brand {string}',(brandName) =>{
    cy.get(':nth-child(17) div span').contains("Brands").scrollIntoView();
    cy.get(':nth-child(2) .a-list-item .a-link-normal .a-size-base').contains(brandName).click({force: true});
})

And('Sort the Samsung results with price {string}',(priceSort) => {
    cy.get('#a-autoid-0-announce').click();
    cy.get('.a-popover-inner ul li a').contains(priceSort).click({force: true});
})

Then('click on second higest priced item', () => {
    cy.get('div.a-row.a-size-base.a-color-base a').eq(1).invoke('removeAttr','target').click({force: true});
})

Then('verify about this item section',() => {
    cy.get('#feature-bullets').should('be.visible');
    cy.get('#feature-bullets ul li span').each(($ele,index,$list)=>{
        cy.wrap($ele.text());
    })
})
