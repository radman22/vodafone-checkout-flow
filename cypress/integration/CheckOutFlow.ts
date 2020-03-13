/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />
import{testData} from '../fixtures/TestData'
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test if there is an exception 
  //in the application 
  return false
})

describe('CheckOut Suite', () => {
  
  before(()=>{

    cy.viewport(1280, 720)
    cy.clearCookies()

  })

  beforeEach(()=>{

    cy.visit("https://www.vodafone.nl/");
    cy.get("body > div.page > footer > div > div.container.hidden-sm.hidden-xs > div.row.margin-top10 > div:nth-child(1) > ul > li:nth-child(3) > a").click();
    cy.wait(3000);

  })
  
  testData.forEach(function(test) {
    it('Smooth Checkout Flow ', function() {

      cy.selectPhone(test.storage);
      
      cy.selectDeviceSubscription();

      cy.checkShoppingCart();

      cy.enterPersonalandPaymentData();
   
      cy.selectNumberPorting();
   
      cy.viewOrder();

      //cy.purchasePhone() ;) if you know what I mean 
       

  })

  })


})