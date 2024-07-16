/// <reference types="cypress" />

describe('Iphone X', () => {
    it('Debe ser responsive', () =>{
        cy.viewport('iphone-x');
        cy.visit('https://siuccweb.ucc.edu.ar/');
      })
})

describe('Macbook', () => {
  it('Debe ser responsive', () =>{
      cy.viewport('macbook-11');
      cy.visit('https://siuccweb.ucc.edu.ar/');
    })
})

describe('Ipad', () => {
  it('Debe ser responsive', () =>{
      cy.viewport('ipad-2');
      cy.visit('https://siuccweb.ucc.edu.ar/');
    })
})