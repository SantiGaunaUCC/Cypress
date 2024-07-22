describe('Prueba de búsqueda', () => {
    it('Realizar búsqueda', () => {
      // Visitar la página principal
      cy.visit('https://www.ucc.edu.ar'); 
      
      // Hacer clic en el primer enlace con la clase 'nav-link' que abre el buscador
      cy.get('a.nav-link').first().invoke('removeAttr', 'target').click();
      
      // Validar que la URL incluya '/buscador/'
      cy.url().should('include', '/buscador/');
      
      // Esperar a que el campo de búsqueda esté visible en la nueva página
      cy.get('input[type="text"]').should('be.visible').first().type('arquitectura');
      
      // Verificar que los resultados contengan el texto esperado
      cy.contains('Facultad de Arquitectura y Diseño').should('be.visible');
    });
});
