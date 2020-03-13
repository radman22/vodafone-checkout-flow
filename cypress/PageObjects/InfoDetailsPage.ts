enum element{

    FILED_EMAIL="#contracting_party_email",   
    RADIO_SALUTATION="#male",
    FIELD_INTIALS="#contracting_party_initials",
    FIELD_LAST_NAME="#contracting_party_last_name",
    FIELD_BIRTHDATE ="#contracting_party_birthdate",
    FIELD_PHONE_NUMBER ="#contracting_party_phone_1"   
   
   }
   export class InfoDetailsPage{
   
   
   public enterPersonalData() {
           
       cy.get(element.FILED_EMAIL).type(Cypress.env("contracting_email"));
       cy.get(element.RADIO_SALUTATION).click({force: true});
       cy.get(element.FIELD_INTIALS).type(Cypress.env("initials"));
       cy.get(element.FIELD_LAST_NAME).type(Cypress.env("contracting_lastname"));
       cy.get(element.FIELD_BIRTHDATE).type(Cypress.env("contracting_birthday"));
       cy.get(element.FIELD_PHONE_NUMBER).type(Cypress.env("contracting_party_phonenumber")) 
       
   }

   public enterAddressData(){

    cy.get("#contracting_party_invoice_address_postal_code").type(Cypress.env("postal_code"));
    cy.get("#contracting_party_invoice_address_house_number").type(Cypress.env("house_no"));
    cy.get("#delivery_address_checkbox_wrapper .radio.inline").first().click();

}


public enterIdentification(){

    cy.get("#identity_nationality").select("Pakistan");
    cy.get("#identity_identity_number").type(Cypress.env("Passport_Number"));
    cy.get("#identity_identity_expiry_date").type(Cypress.env("PASSPORT_EXPIRY"));
    cy.get("#payment_details_account_nr").type(Cypress.env("IBAN_NUMBER"))
}

public pressNextStepButton(){

    cy.get("li.step.visible-state.step-number-3 > a").click({force:true});
}

     
   
   }
   