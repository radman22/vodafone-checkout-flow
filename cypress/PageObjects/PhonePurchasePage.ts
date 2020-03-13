enum element{

 LABEL_YELLOW_COLOR="#radio-2_3",   
 BUTTON_ORDER_PHONE="#customLink2"   

}
export class PhonePurchasePage{


public selectPhoneMemory(memory:string) {
        
    cy.get(".custom-radio-button input[value='"+memory+"']").click({ force: true }) 
    
}

public selectPhoneColor(){

    cy.get(element.LABEL_YELLOW_COLOR).click({ force: true });
}

public ClickPhonePurchaseButton(){

    cy.get(element.BUTTON_ORDER_PHONE).click({ force: true });
}


}
