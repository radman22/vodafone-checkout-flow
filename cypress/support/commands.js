
import {PhonePurchasePage} from '../PageObjects/PhonePurchasePage';
import { DeviceSubscriptionPage } from "../PageObjects/DeviceSubscriptionPage";
import { ShoppingCartPage} from "../PageObjects/ShoppingCartPage";
import {InfoDetailsPage} from '../PageObjects/InfoDetailsPage';
import{NumberPortingPage} from '../PageObjects/NumberPortingPage';
import{OrderOverviewPage} from "../PageObjects/OrderOverviewPage"

Cypress.Commands.add('selectPhone', (storage) => {
    let phone = new PhonePurchasePage();
    phone.selectPhoneMemory(storage);
    phone.selectPhoneColor();
    phone.ClickPhonePurchaseButton();
  })


  Cypress.Commands.add('selectDeviceSubscription',()=>{
    
    let deviceSubscription = new DeviceSubscriptionPage();
    
    deviceSubscription.selectZiggoCustomerOption("yes");
    deviceSubscription.verifySeletcedSubscriptionPresent();
    deviceSubscription.selectDuration("1");
    deviceSubscription.verifySubscriptionDuration("1");
    deviceSubscription.selectPlan("Red Unlimited");
    deviceSubscription.verifyPlanAddedToCart("Red Unlimited", "1 jaar");
    deviceSubscription.verifyOneOffCostPresentInCart();
    deviceSubscription.verifyDepositeMatches();
    deviceSubscription.verifyZiggoDiscountPresentInCart();
    deviceSubscription.verifyStatouryCostPresent();
    deviceSubscription.changeDevicePayment("14");
    deviceSubscription.verifyPerMonthPaymentChanged();
    deviceSubscription.verifyTotalPaymentChanged();
    deviceSubscription.verifyPaymentsChangedInTable();
    deviceSubscription.clickOnProceedButton();

  })


  Cypress.Commands.add('checkShoppingCart',()=>{

    let shoppingcart = new ShoppingCartPage();
    shoppingcart.verifyBillingSummaryPresent();
    shoppingcart.verifyTotalCostPresent();
    shoppingcart.verifyHomeTaxPresent();
    shoppingcart.verifyMonthlyCostPresent();
    shoppingcart.verifyDiscountPresent();
    shoppingcart.verifyBillDiscountPresent();
    shoppingcart.verifyTotalCost();
    shoppingcart.verifyTotalConnectionCost();
    shoppingcart.clickOnNextButton();
  })


  Cypress.Commands.add("enterPersonalandPaymentData",()=>{

    let info =new InfoDetailsPage();
    info.enterPersonalData();
    info.enterAddressData();
    info.enterIdentification();
    info.pressNextStepButton();

  })

  Cypress.Commands.add("selectNumberPorting",()=>{
    
    let number = new NumberPortingPage();
    
    number.selectNumberkeep("no");
    number.clickNextStepButton();

  })

  Cypress.Commands.add("viewOrder",()=>{

    let orderview = new OrderOverviewPage();
    orderview.checkPerMonthPrice();
    orderview.checkOneOffPrice();
    orderview.checkUserCredentials();
    orderview.checkOrderOverviewForm();
    orderview.clickPrivacyTerms(); 
  })