import { Given,When,Then } from 'cypress-cucumber-preprocessor/steps';
import cucumberTest from '../cucumber/cucumberTest'
const banklogin = new cucumberTest();

Given('Customer navigate to bank application', () =>{
    banklogin.openBankApplication();
})

When('Customer successfully logged in to bank application', () => {
    banklogin.loginBankApplication();
}) 
