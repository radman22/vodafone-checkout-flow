enum element{

    
   
}
export class OrderOverviewPage{

public checkPerMonthPrice(){

cy.get(".js-total-price-per-month").should("be.visible");

    
}

public checkOneOffPrice(){


    cy.get(".js-total-price-once").should("be.visible");
}

public checkUserCredentials(){

    cy.get("#js-credentials").should("be.visible");
}
  
public checkOrderOverviewForm(){

    cy.get("#bestelling_overzicht").should("be.visible");
}

public clickPrivacyTerms(){

    cy.get("#privacy_terms").click();
}

}
