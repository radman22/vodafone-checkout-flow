enum elemnt {

    IMAGES_PRODUCT_BENEFITS =".vf-product-benefits__images",
    TABLE_HEADER_INFO=".head.row",
    TABLE_CELL_INFO=".cel.row.ng-binding",
    RADIO_BUTTON_SUBSCRIPTION_PLAN= "#RedUnlimited .subscription-row-selection-col",
    DIV_RECEIPT_SUBSCRIPTION_NAME ="div[data-testid='vf-product-receipt--subscription-name']",
    H2_ONEOFF_PRICE ="h2[ng-bind='oneTimeCosts.total | formatPrice']",
    LIST_ITEM_ONEOFF_DEPOSITE ="li[data-testid='vf-product-receipt--price-once--device-title']>span",
    LIST_ITEM_ZIGGO_DISCOUNT =".converged-information.ng-scope",
    LIST_ITEM_STATUORY_COST=".product-receipt__onetime .product-receipt__summary >ul>li:nth-child(2)",
    INPUT_DEVICE_PAYMENT_SLIDER="input[type=range]",
    SLIDER_PER_MONTH_DEPOSITE =".js-recurring-device.ng-binding",
    LIST_ITEM_TOTAL_PRODUCTCOST=".product-receipt__onetime .product-receipt__summary >ul>li:nth-child(1)>span",
    SLIDER_TOTAL_DEPOSITE ="span[class='js-once-device ng-binding']",
    LIST_ITEM_PAYMENT_SUMMARY =".product-receipt__monthly .product-receipt__summary>ul>li:nth-child(3)>span",
    BUTTON_PROCEED=".btn.btn-cta"

}

export class DeviceSubscriptionPage{

   
    public selectZiggoCustomerOption(option:string){

        if(option == "yes"){

            cy.get("#ziggo-customer-popup-button-yes").click();   

        }

    }

    public verifySeletcedSubscriptionPresent(){

        cy.get(elemnt.IMAGES_PRODUCT_BENEFITS).first().should("be.visible");

    }

    public selectDuration(duration:string){
        cy.get("button[data-testid='vf-subscription-duration-selector--"+duration+"-jaar']").click();

    }

    public verifySubscriptionDuration(selectedDuration:string){
       
                cy.get(elemnt.TABLE_HEADER_INFO).then(($headData)=>{
        
                    cy.get(elemnt.TABLE_CELL_INFO).then(($coldata)=>{
              
                    var  headings = $headData.text();
                      cy.wrap(headings).as("tableheaders")
                    var values = $coldata.text();
                      cy.wrap(values).as("tableValues");
                        
                      switch (selectedDuration){
                          case "1":
                              expect(headings).contain("Duur overeenkomst");
                              expect(values).contain("12 maanden");
                              break;
                         
                           case "2":
                               expect(headings).contain("Duur overeenkomst");
                               expect(values).contain("24 maanden");
                               break;                        
                    }
                    
                    }) 
                  })

        }

    public selectPlan(plan :string){

        switch(plan){

            case "Red Unlimited":
                cy.get(elemnt.RADIO_BUTTON_SUBSCRIPTION_PLAN).click();
                cy.wait(5000);
                break;
            case "Red":
                break;

        }

    }

    public verifyPlanAddedToCart(plan :string , duration:string){

        cy.get(elemnt.DIV_RECEIPT_SUBSCRIPTION_NAME).invoke('text').then((text)=>{

            expect(text).contain(plan)
            expect(text).contain(duration)
          })

    }

    public verifyOneOffCostPresentInCart(){

        cy.get(elemnt.H2_ONEOFF_PRICE).should("be.visible");
    }

    public verifyDepositeMatches(){

        cy.get(elemnt.TABLE_CELL_INFO).then(($coldata)=>{

            cy.get(elemnt.LIST_ITEM_ONEOFF_DEPOSITE).invoke("text").then((text)=>{
            
              var values = $coldata.text();  
              expect(values).contain(text);
      
            })
            
      
          })
    }

    public verifyZiggoDiscountPresentInCart(){

        cy.get(elemnt.LIST_ITEM_ZIGGO_DISCOUNT).should("be.visible");
    }

    public verifyStatouryCostPresent(){

        cy.get(elemnt.LIST_ITEM_STATUORY_COST).should("be.visible");
    }


    public changeDevicePayment(amount:string){

        cy.get(elemnt.INPUT_DEVICE_PAYMENT_SLIDER).as('range')
        .invoke('val', amount)
        .trigger('change')

    }

    public verifyPerMonthPaymentChanged(){

        cy.get(elemnt.LIST_ITEM_PAYMENT_SUMMARY).invoke("text").then((carttext)=>{

            cy.get(elemnt.SLIDER_PER_MONTH_DEPOSITE).invoke("text").then((slidertext)=>{
        
              assert.equal(carttext,slidertext,"The per month device payments in the cart does not matches with payment under slider");
        
            })
           })

  

    }

    public verifyTotalPaymentChanged(){

        cy.get(elemnt.LIST_ITEM_TOTAL_PRODUCTCOST).invoke("text").then((text)=>{

            cy.get(elemnt.SLIDER_TOTAL_DEPOSITE).invoke("text").then((text2)=>{
        
              assert.equal(text,text2,"The total cost of the slider does not match with shopping cart")
        
        
        
            })
           })
        
    }

    public verifyPaymentsChangedInTable(){

        cy.get(elemnt.TABLE_HEADER_INFO).then(($headData)=>{
        
            cy.get(elemnt.TABLE_CELL_INFO).then(($coldata)=>{
        
            var headings = $headData.text();
            var values = $coldata.text();  
            cy.get(elemnt.LIST_ITEM_PAYMENT_SUMMARY).invoke("text").then((text)=>{
        
                expect(values).contain(text);
          
              })
               
             
          })
        
          
        })
        


    }

    public clickOnProceedButton(){

        cy.get(elemnt.BUTTON_PROCEED).last().click({force:true})
    }



}