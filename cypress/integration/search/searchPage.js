const URL = 'http://zero.webappsecurity.com/index.html'
const SEARCHBOX = '#searchTerm'
const RESULT = 'h2'

class searchPage{
    static visit(){
        cy.visit(URL)
    }
    
    static searchbox(dana){
        cy.get(SEARCHBOX).type(dana)
    }

    static result(){
        cy.get(RESULT).should('contain.text','Search Results:')
    }

}

export default searchPage
