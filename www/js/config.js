angular.module('app')

.constant('Shop', {
  version                             : '2.1.4 beta',
  name                                : 'GoViral',
  URL                                 : 'http://goviral.site/store/',
  EMAIL                               : 'admin@goviral.site',
  ConsumerKey                         : 'ck_c1912f801704da270bc7858d7005eda51a0358fc', // Get this from your WooCommerce
  ConsumerSecret                      : 'cs_9ca40158294aa88ebae8e9d6a4a8c6a3bb74474c', // Get this from your WooCommerce

  homeSlider                          : true, // If you dont want to use home slider, set it to FALSE
  CurrencyFormat                      : true, // If you want to use currency format, set it to TRUE
  shipping                            : [
                                          {id: 'flat_rate:4', name: 'Local Pickup', cost: 0},
                                          {id: 'flat_rate:3', name: 'Flat Rate', cost: 5},
                                          {id: 'flat_rate:2', name: 'Worldwide Flat Rate', cost: 15}
                                        ],
  payment                             : [
                                          {id: 'cod', name: 'Cash on Delivery', icon: 'fa fa-money', desc: 'Pay with cash upon delivery.'},
                                          {id: 'bacs', name: 'Direct Bank Transfer', icon: 'fa fa-university', desc: 'You can pay using direct bank account'},
                                          {id: 'paypal', name: 'Paypal', icon: 'fa fa-cc-paypal', desc: 'You can pay via Paypal and Credit Card'},
                                          {id: 'razor', name: 'RazorPay', icon: 'fa fa-money', desc: 'Pay with RazorPay for Indian region only'} // Only for Indian currency (INR = Indian Rupee)
                                        ],

  GCM_SenderID                        : 'xxxxxxxxxxxx', // Get this from https://console.developers.google.com
  OneSignalAppID                      : 'xxxxxxxxxxxx', // Get this from https://onesignal.com

                                        // Change this Paypal Sandbox with yours
  payPalSandboxClientSecretBase64     : 'EDJg8WD2luGrYJBO4W5kAo-UZJX_Es0SmkQrjCrRFWC_xORPTUDgMFJD4I5n-XVIqJ5QMrdjv70a6ehP',
  payPalProductionClientSecretBase64  : 'EF97ZAGEU_98zqCAmPgkn41gBXLPxn2TivQmeFOAoIadQGraU3Az97baJcKXipfIe7XDUdwpSJqbUtnj', // Change this Paypal Production with yours

                                        //  You need to change this url to GO LIVE!
  payPalGetTokenURL                   : 'https://api.sandbox.paypal.com/v1/oauth2/token', // to go live, use this: https://api.paypal.com/v1/oauth2/token
  payPalMakePaymentURL                : 'https://api.sandbox.paypal.com/v1/payments/payment', // to go live, use this: https://api.paypal.com/v1/payments/payment

                                        // RazorPay only can be used for Indian currency (INR = Indian Rupee)
                                        // If you want use LIVE, get your LIVE key from RazorPay Dashboard and use it here                                        
  RazorKeyId                          : 'xxxxxxxxxxxx',  // Get this from https://dashboard.razorpay.com
  RazorSecretKey                      : 'xxxxxxxxxxxx', // Get this from https://dashboard.razorpay.com
  RazorYourLogoURL                    : 'https://goo.gl/ZwgRF9', // your logo image
  RazorThemeColor                     : '#F37254', // Theme color for RazorPay
  RazorYourShopDescription            : 'Ionic Premium WooCoommerce Full App for Android & iOS' // Your shop description
})

.constant('$ionicLoadingConfig', {
  template: '<ion-spinner icon="dots"></ion-spinner>',
})

.constant('listLang', [
    {code: 'en', text: 'English'},
    {code: 'ar', text: 'Arabic'},
    {code: 'pt', text: 'Portuguese'},
    {code: 'de', text: 'German'},
    {code: 'hi', text: 'Hindi'}
  ]
);