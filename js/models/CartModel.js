var app = app || {};

(function(){
  app.CartModel = Backbone.Firebase.Model.extend({
    url:"https://my-bb-shop.firebaseio.com/"
  });

}()) //ends the big function
