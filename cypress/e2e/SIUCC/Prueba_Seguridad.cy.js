// describe('Pruebas de Seguridad', () => {
//     beforeEach(() => {
//       // Antes de cada prueba, visitamos la página de inicio
//       cy.visit('https://siuccweb.ucc.edu.ar/login'); // Ajusta la URL según tu aplicación
//     });
  
//     it('Debería permitir el inicio de sesión válido', () => {
//       // Simula un inicio de sesión válido
//       cy.get('input[name="cod_vie"]').type('usuario');
//       cy.get('input[name="password"]').type('contraseña');
//       cy.get('button[type="submit"]').click();
  
//       // Verifica que la página de inicio cambie después del inicio de sesión
//       cy.url().should('include', '/dashboard'); // Ajusta '/dashboard' según tu ruta de página protegida
//     });
  
//     it('Debería denegar el inicio de sesión inválido', () => {
//       // Simula un inicio de sesión inválido
//       cy.get('input[name="cod_vie"]').type('usuario_invalido');
//       cy.get('input[name="password"]').type('contraseña_invalida');
//       cy.get('button[type="submit"]').click();
  
//       // Verifica que se muestre un mensaje de error o que no se redireccione a la página protegida
//       cy.contains('Credenciales inválidas').should('exist'); // Ajusta el mensaje según tu implementación
//       cy.url().should('not.include', '/dashboard'); // Asegúrate de que no se haya redirigido a la página protegida
//     });
  
//     it('Debería proteger las rutas protegidas', () => {
//       // Intenta acceder directamente a una ruta protegida sin iniciar sesión
//       cy.visit('/dashboard'); // Ajusta '/dashboard' según tu ruta de página protegida
  
//       // Verifica que se redirija automáticamente al inicio de sesión
//       cy.url().should('include', '/login'); // Ajusta '/login' según tu ruta de inicio de sesión
//     });
  
//     it('Debería permitir el acceso a la página protegida después del inicio de sesión', () => {
//       // Inicia sesión primero
//       cy.get('input[name="cod_vie"]').type('usuario');
//       cy.get('input[name="password"]').type('contraseña');
//       cy.get('button[type="submit"]').click();
  
//       // Una vez iniciada la sesión, intenta acceder a la página protegida
//       cy.visit('/dashboard'); // Ajusta '/dashboard' según tu ruta de página protegida
  
//       // Verifica que se cargue correctamente la página protegida
//       cy.contains('Dashboard').should('exist'); // Ajusta según el contenido de tu página protegida
//       cy.url().should('include', '/dashboard'); // Asegúrate de que estás en la página protegida
//     });
//   });
  