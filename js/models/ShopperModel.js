var app = app || {};

(function(){
  app.ShopperModel = Backbone.Firebase.Model.extend({
    initialize:function(){
      this.cart = new app.CartCards();
    },
    url:function(){
        return "https://my-bb-shop.firebaseio.com/" + app.firebase.getAuth().uid
      },
 });

}()) //ends the big function
