enum element{

    SPAN_TOTAL_AMOUNT=".device-price-once",   
    SPAN_HOME_TAX=".thuisheffing"   
   
   }
   export class ShoppingCartPage{
   
   
   public verifyTotalCostPresent() {
           
       cy.get(element.SPAN_TOTAL_AMOUNT).should("be.visible") 
       
   }

   public verifyHomeTaxPresent(){

    cy.get(element.SPAN_HOME_TAX).should("be.visible")

   }

   public verifyTotalCost(){
    cy.get(element.SPAN_TOTAL_AMOUNT).then(($totalcost)=>{

        cy.get(element.SPAN_HOME_TAX).then(($hometax)=>{

            var totalpayment = parseFloat($totalcost.text().split(" ")[1].replace(",","."));
            var tax = parseFloat($hometax.text().split(" ")[1].replace(",","."));
            cy.log((totalpayment+tax).toString())
        
        cy.get("#price_once").then(($data)=>{
            var priceonce = parseFloat($data.text().replace(",","."));
            cy.log(priceonce.toString());
            assert.equal(priceonce,(totalpayment+tax),"The one off price does not matches with the sum of prices present in now to meet column")
        })    
        
        
        })

    })

   }

   public verifyPricePerMonthPresent(){

       
        cy.get(".device-price-per-month").should("be.visible")


   }

   public verifyDiscountPresent(){

    cy.get(".js-benefits-list--price-discount-amount").last().should("be.visible");
   }

   public verifyBillDiscountPresent(){

    cy.get(".amount").first().should("be.visible")

   }

   public verifyBillingSummaryPresent(){

        cy.get("#sticky-item-container").should("be.visible")

   }

   public verifyMonthlyCostPresent(){

        cy.get("#price_per_month").should("be.visible")
   }

   public verifyTotalConnectionCost(){

    cy.get("#total_connection_price").should("be.visible")
   }
   public clickOnNextButton(){

    cy.get("a[data-testid='sticky-proceed--acquisition-next-step']").click();
   }




   
   
   }
   