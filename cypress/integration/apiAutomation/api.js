/// <reference types="Cypress" />
const baseURL = Cypress.env('baseUrl');
import { Given,When,Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('create dummy user', () =>{
    cy.request({
        method: 'POST',
        url: baseURL
    }).then(response =>{
        cy.log(response.body);
    })
})

