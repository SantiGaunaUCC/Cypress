describe('Prueba de elementos visibles', () => {
    it('Verificar elementos visibles', () => {
      cy.visit('https://siuccweb.ucc.edu.ar/');  // Reemplaza con la URL de tu página
      cy.get('button').should('be.visible');  // Verifica que haya botones visibles
    });
  });
  