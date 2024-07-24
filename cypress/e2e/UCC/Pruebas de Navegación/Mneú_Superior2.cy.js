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

    it('Selector Institucional', () => {

        cy.contains('a', 'Institucional').click();
        cy.contains('a', 'Autoridades')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000 }).should('include', 'autoridades');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Institucional').click();
        cy.contains('a', 'Calendario Académico')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'calendario');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Institucional').click();
        cy.contains('a', 'Digesto')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'digesto');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Institucional').click();
        cy.contains('a', 'Institucional UCC')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'institucional-ucc');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Institucional').click();
        cy.contains('a', 'Identidad Visual')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'comunicacion-institucional/comunicacion-institucional-identidad');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Institucional').click();
        cy.contains('a', 'Comisión de Bienestar Universitario')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'bienestar-universitario');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Institucional').click();
        cy.contains('a', 'Plan de Economía Circular')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'proyeccion-responsabilidad-social/responsabilidad-social-ecologia-integral');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Institucional').click();
        cy.contains('a', 'Cómo llegar a la Católica')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'ingreso/como-venir');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Institucional').click();
        cy.contains('a', 'Contactos UCC')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'contactos');

    });


    it('Selector Secretarías y áreas', () => {

        cy.contains('a', 'Secretarías y áreas').click();
        cy.contains('a', 'Secretaría Académica')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000 }).should('include', 'academica');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Secretarías y áreas').click();
        cy.contains('a', 'Secretaría de Asuntos Económicos')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'asuntos-economicos');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Secretarías y áreas').click();
        cy.contains('a', 'Secretaría de Asuntos Internacionales')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'asuntos-internacionales');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Secretarías y áreas').click();
        cy.contains('a', 'Secretaría de Comunicación Institucional')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'comunicacion-institucional');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Secretarías y áreas').click();
        cy.contains('a', 'Secretaría de Investigación y Vinculación Tecnológica')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'investigacion-vinculacion');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Secretarías y áreas').click();
        cy.contains('a', 'Secretaría de Pedagogía Universitaria')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'pedagogia-universitaria');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Secretarías y áreas').click();
        cy.contains('a', 'Secretaría de Proyección y Responsabilidad Social Universitaria')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'proyeccion-responsabilidad-social');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Secretarías y áreas').click();
        cy.contains('a', 'Departamento de Formación Humanística')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'formacion-humanistica');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Secretarías y áreas').click();
        cy.contains('a', 'Coordinación de Desarrollo')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'desarrollo');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Secretarías y áreas').click();
        cy.contains('a', 'Sistema de Bibliotecas')
          .invoke('removeAttr', 'target')
          .click();
        cy.url({ timeout: 2000 }).should('eq', 'https://biblioteca.ucc.edu.ar/');
    
    });

    it('Selector Unidades Académicas', () => {

        cy.contains('a', 'Unidades Académicas').click();
        cy.contains('a', 'Facultad de Arquitectura y Diseño')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000 }).should('include', 'arquitectura');

        cy.get('a[href="/"]').click();

        cy.contains('a', 'Unidades Académicas').click();
        cy.contains('a', 'Facultad de Ciencia Política y Relaciones Internacionales')
        .invoke('removeAttr', 'target')
        .click();
        cy.url({ timeout: 2000}).should('include', 'ciencia-politica-relaciones-internacionales');

        cy.get('a[href="/"]').click();


    });



});

