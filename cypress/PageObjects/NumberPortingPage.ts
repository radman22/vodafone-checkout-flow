enum element{

    
   
   }
   export class NumberPortingPage{
   
   public selectNumberkeep(option:string){

    switch(option){

        case "no":
            cy.get('label.js-customer-requests-porting-false-label.radio').invoke('attr', 'class').should('contain', 'checked');
            break;
        case "yes":
            //flow for the yes option 
            break;
    }



   }
   
   public clickNextStepButton(){

    cy.get("#nextStepBtn").click({force:true});
        
}
     
   
   }
   