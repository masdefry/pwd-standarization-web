import LoginPage from '../page';
import './../../../../../app/globals.css';
import ReactQueryProvider from '~/providers/ReactQueryProvider';

describe('<LoginPage />', () => {
    beforeEach(() => {
        cy.mount(
            <ReactQueryProvider>
                <LoginPage />
            </ReactQueryProvider>
        );
    })

    it('should display all section.', () => {
        const sections = ['header-section', 'main-section'];
    
        sections.forEach((section) => {
          cy.get(`[data-test=${section}]`).should('exist');
        });
    });

    it('should disable submit button when login form incomplete', () => {
        cy.get('input[name="email"]').focus().blur();
        cy.get('input[name="password"]').focus().blur();
    
        cy.get('button[type="submit"]').should('be.disabled');
    });

    it('should disable submit button when login form not valid', () => {
        cy.get('input[name="email"]').type('ryangmail.com');
        cy.get('input[name="password"]').type('abc12345');
    
        cy.get('button[type="submit"]').should('be.disabled');
    });

    it('should enable submit button when login form incomplete', () => {
        cy.get('input[name="email"]').type('ryan@gmail.com');
        cy.get('input[name="password"]').type('abc12345');
    
        cy.get('button[type="submit"]').should('be.enabled');
    });
})