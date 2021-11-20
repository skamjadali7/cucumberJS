//import { Given,When } from 'cypress-cucumber-preprocessor';
import cucumberTest from '../pageObject/cucumberTest'
const banklogin = new cucumberTest();

/* Given('Customer navigate to bank application', () =>{
    banklogin.openBankApplication();
})

When('Customer successfully logged in to bank application', () => {
    banklogin.loginBankApplication();
}) */

describe('Login Bank Application',()=>{
    it('Open Bank Application',()=>{
        banklogin.openBankApplication();
    })
    it('Login Bank Application',()=>{
        banklogin.loginBankApplication();
    })
})