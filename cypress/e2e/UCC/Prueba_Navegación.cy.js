describe('Pruebas de Navegación', () => {
  beforeEach(() => {
      // Antes de cada prueba, visitamos la página de inicio
      cy.visit('https://www.ucc.edu.ar/'); 
  });

  it('Debería llevarnos a Contactos WSP y verificar el enlace de WhatsApp', () => {
    // Verificar que el enlace 'CONTACTANOS' tenga el atributo 'href' correcto
    cy.contains('a', 'CONTACTANOS')
      .should('have.attr', 'href')
      .and('include', 'wa.me/5493512012536')
     
  
    // Obtener el enlace y remover el atributo target para que abra en la misma pestaña
    cy.contains('a', 'CONTACTANOS')
      .invoke('removeAttr', 'target')
      .click();
  
    // Agregar un tiempo de espera para asegurar que la redirección haya ocurrido
    cy.wait(5000); // Espera 5 segundos, ajusta si es necesario
  
    // Verificar que la URL contenga la parte esperada
    cy.url({ timeout: 10000 }).should('include', 'wa.me/5493512012536')

  });
  
  


  it('Debería llevarnos al INGRESO', () => {
    // Verificar que el enlace 'INGRESO 2025' tenga el atributo 'href' correcto
    cy.contains('a', 'INGRESO 2025')
      .should('have.attr', 'href')
      .and('include', 'ingreso');
  
    // Obtener el enlace y remover el atributo target para que abra en la misma pestaña
    cy.contains('a', 'INGRESO 2025')
      .invoke('removeAttr', 'target')
      .click();
  
    // Verificar que la URL contenga la parte esperada
    cy.url({ timeout: 15000 }).should('include', 'ingreso');
  
    // Esperar un poco para asegurar que el contenido de la nueva página se cargue
    cy.wait(5000); // Espera 5 segundos, ajusta si es necesario
  
    // Verificar que el enlace 'Curso de Ingreso' esté presente y tenga los atributos específicos
    cy.get('a.nav-link.nav-link-text.text-uppercase.d-flex.flex-row', { timeout: 10000 })
      .should('have.attr', 'href', '/ingreso/curso')
      .should('be.visible')
      .and('contain.text', 'Curso de Ingreso');
  });
  
  
  it('Debería llevarnos al CAMPUS UCC RIO CUARTO', () => {
    cy.contains('a','CAMPUS UCC RÍO CUARTO').click();
    cy.url().should('include', '/campus-ucc-rio-cuarto');
  })

  it('Debería llevarnos a ALUMNI UCC', () => {
    cy.contains('a','ALUMNI UCC').click();
    cy.url().should('include', '/alumni');
  })


  it('Debería llevarnos a Autogestión y verificar el enlace', () => {
    // Hacer clic en el botón 'MI UCC'
    cy.contains('button', 'MI UCC').click();
    
    // Verificar que el enlace 'AUTOGESTIÓN' tenga el atributo 'href' correcto
    cy.contains('a', 'AUTOGESTIÓN')
      .should('have.attr', 'href')
      .and('include', 'web/siuccweb_php');

    // Obtener el enlace y remover el atributo target para que abra en la misma pestaña
    cy.contains('a', 'AUTOGESTIÓN')
      .invoke('removeAttr', 'target')
      .click();

    // Verificar que la URL contenga la parte esperada (ajusta el timeout si es necesario)
    cy.url({ timeout: 10000 }).should('include', 'web/siuccweb_php');

    // Verificar que el botón este visible
    cy.get('input.botonContinuar[type="button"][value="INGRESAR"]')
      .should('have.attr', 'onclick', 'javascript:ingresar_clave();')
      .should('be.visible');
  });

  it('Debería llevarnos al CAMPUS VIRTUAL y verificar los elementos', () => {
    // Hacer clic en el botón 'MI UCC'
    cy.contains('button', 'MI UCC').click();

    // Verificar que el enlace 'CAMPUS VIRTUAL' tenga el atributo 'href' correcto
    cy.contains('a', 'CAMPUS VIRTUAL')
      .should('have.attr', 'href')
      .and('include', 'campus-virtual');

    // Obtener el enlace y remover el atributo target para que abra en la misma pestaña
    cy.contains('a', 'CAMPUS VIRTUAL')
      .invoke('removeAttr', 'target')
      .click();

    // Verificar que la URL contenga la parte esperada (ajusta el timeout si es necesario)
    cy.url({ timeout: 10000 }).should('include', 'campus-virtual');


    // Verificar que el enlace con los atributos específicos esté presente
    cy.get('a#basic-nav-dropdown.dropdown-toggle.nav-link')
      .should('have.attr', 'aria-haspopup', 'true')
      .and('have.attr', 'aria-expanded', 'false')
      .and('have.attr', 'role', 'button')
      .should('be.visible')
      .and('contain.text', 'Modalidad');
  });


});
