describe('Prueba de Navegación', () => {

    it('Navegar al Inicio de sesión', () =>{
        cy.visit('https://siuccweb.ucc.edu.ar/');
        cy.contains('INICIAR SESIÓN').click();
        cy.url().should('include', '/login');
    })

    it('Navegar a UCC', () => {
        cy.visit('https://siuccweb.ucc.edu.ar/');
        cy.contains('UCC').click();
        cy.url().should('eq', 'https://www.ucc.edu.ar/');
    });

    it('Navegar a Auogestión', () => {
        cy.visit('https://siuccweb.ucc.edu.ar/');
        cy.contains('AUTOGESTIÓN').click();
        cy.url().should('eq', 'https://age.ucc.edu.ar/web/siuccweb_php/login.php');
    })

    it('Navegar a ICDA', () => {
        cy.visit('https://siuccweb.ucc.edu.ar/');
        cy.contains('ICDA').click();
        cy.url().should('eq', 'https://icda.ucc.edu.ar/');
    })

    it('Navegar a FORMACIÓN CONTINUA', () => {
        cy.visit('https://siuccweb.ucc.edu.ar/');
        cy.contains('FORMACIÓN CONTINUA').click();
        cy.url().should('eq', 'https://fjs.ucc.edu.ar/');
    })



});
