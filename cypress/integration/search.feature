Feature: Do a data search in the searchbox 

    As a user 
    I want do sarch in the website 

    Scenario: Search result
        Given I open homepage
        When Enter text dana in the searchbox
        Then I should see search result 

