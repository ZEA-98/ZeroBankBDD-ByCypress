/// <reference types="cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginPage from './loginPage';

Given('I open login page', () => {
	loginPage.visit();
});

When('I submit login', () => {
	loginPage.fillUsername('username');
	loginPage.fillPassword('password');
	loginPage.signin();
});

Then('I should see homepage', () => {
	cy.get('#account_summary_tab').should('be.visible');
});
