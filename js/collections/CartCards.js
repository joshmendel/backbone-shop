var app = app || {};

(function(){
  app.CartCards = Backbone.Firebase.Collection.extend({
    url:function(){
        return "https://my-bb-shop.firebaseio.com/" + app.firebase.getAuth().uid + "/cart"
      }
  });

}());  //big function close
