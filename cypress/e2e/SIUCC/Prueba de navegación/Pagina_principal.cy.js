describe('Prueba de Navegación', () => {

    it('Navegar al Inicio de sesión', () =>{
        cy.visit('https://siuccweb.ucc.edu.ar/');
        cy.contains('Iniciar Sesión').click();
        cy.url().should('include', '/login');
    })

    it('Navegar a UCC', () => {
        cy.visit('https://siuccweb.ucc.edu.ar/');
        cy.contains('ucc').click();
        cy.url().should('eq', 'https://www.ucc.edu.ar/');
    });

    it('Navegar a Auogestión', () => {
        cy.visit('https://siuccweb.ucc.edu.ar/');
        cy.contains('Autogestión').click();
        cy.url().should('eq', 'https://age.ucc.edu.ar/web/siuccweb_php/login.php');
    })

    it('Navegar a ICDA', () => {
        cy.visit('https://siuccweb.ucc.edu.ar/');
        cy.contains('icda').click();
        cy.url().should('eq', 'https://icda.ucc.edu.ar/');
    })

    it('Navegar a FORMACIÓN CONTINUA', () => {
        cy.visit('https://siuccweb.ucc.edu.ar/');
        cy.contains('Formación Continua').click();
        cy.url().should('eq', 'https://fjs.ucc.edu.ar/');
    })



});
