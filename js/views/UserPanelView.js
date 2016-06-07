var app = app || {};

(function(){
  app.UserPanelView = Backbone.View.extend({
    el:".user-panel",
    template:_.template('<span class="user-info"><button class="btn btn-primary open-log-in">log in</button></span><span class="glyphicon glyphicon-shopping-cart shopping-cart"></span>'),
    events:{
      "click .open-log-in":"logIn",
      "click .shopping-cart":"renderShoppingCart"
    },
    logIn:function(){
      $(".log-in-modal").modal("show");
      var logInView = new app.LogInView();
      logInView.render();
    },
    renderEmail:function(email){
      this.$(".user-info").html(email);
    },
    render:function(){
      this.$el.html(this.template());
    },
    renderShoppingCart:function(){
      alert("you clicked the shopping cart!")
      // var $cardContainer=$("<div>");
      // cards.each(function(card){
      //   var cardItemView = new app.CardItemView({
      //     model:card
      //   });
      //   $cardContainer.append(cardItemView.render().$el);
      // });
      //
      // this.$(".product-display").html($cardContainer);
    }
  });
}()) //ends the big function
