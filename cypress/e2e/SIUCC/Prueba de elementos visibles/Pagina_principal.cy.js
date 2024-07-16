describe('Prueba de elementos visibles', () => {
    it('Verificar elementos visibles', () => {
      cy.visit('https://ejemplo.com');  // Reemplaza con la URL de tu página
      cy.get('button').should('be.visible');  // Verifica que haya botones visibles
      cy.get('.formulario').find('input[type="text"]').should('be.visible');  // Verifica que haya un campo de texto visible dentro de un formulario
    });
  });
  