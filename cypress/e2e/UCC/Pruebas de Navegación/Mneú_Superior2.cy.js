describe('Pruebas de Navegación', () => {
    beforeEach(() => {
        // Antes de cada prueba, visitamos la página de inicio
        cy.visit('https://www.ucc.edu.ar/'); 
    });

    it('Selector Universidad Jesuita', () => {

        cy.contains('a', 'Universidad Jesuita').click();
        cy.contains('a', 'La Católica en números')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000 }).should('include', 'catolica-numeros');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Universidad Jesuita').click();
        cy.contains('a', 'Reseña histórica')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'resena-historica');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Universidad Jesuita').click();
        cy.contains('a', 'Misión y objetivo fundacional')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'mision-objetivo');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Universidad Jesuita').click();
        cy.contains('a', 'Plan de Desarrollo Institucional')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'plan-desarrollo');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Universidad Jesuita').click();
        cy.contains('a', 'Paradigma educativo')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'paradigma-educativo');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Universidad Jesuita').click();
        cy.contains('a', 'Doctorados Honoris causa')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'doctorados-hc');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Universidad Jesuita').click();
        cy.contains('a', 'Compañía de Jesús')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'compania-jesus');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Universidad Jesuita').click();
        cy.contains('a', 'Reporte de Impacto')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'reporte-impacto');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Universidad Jesuita').click();
        cy.contains('a', 'Oración de la Universidad')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'oracion-universidad');

        
        

    });



});

