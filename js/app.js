var app = app || {};

//immediately invoked function expression
(function(){
  app.firebase = new Firebase("https://my-bb-shop.firebaseio.com/")
  app.router = new app.Router();
  Backbone.history.start();
    
}())
