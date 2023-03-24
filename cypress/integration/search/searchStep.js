/// <reference types= "cypress"/>

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import searchPage from './searchPage';

Given('I open homepage', () => {
    searchPage.visit()
})

When('Enter text dana in the searchbox', () => {
    searchPage.searchbox('dana{enter}')
}) 

Then('I should see search result', () => {
    searchPage.result('contain.text','Search Results:')
})