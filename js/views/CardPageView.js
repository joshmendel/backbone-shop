var app = app || {};

//immediately invoked function expression
(function(){
    app.CardPageView = Backbone.View.extend({
      el:".store-display",
      initialize:function(){
        this.listenTo(this.model,"change",this.render);
      },
      template:_.template($(".card-page-template").html()),
      render:function(){
        this.$el.html(this.template(this.model.toJSON()));
      },
      events:{
        "click .add-to-cart":"addToCart"
      },
      addToCart:function(){
        alert("Added " + this.model.get("cardName") + " to cart!");
        app.shopperModel.cart.create(this.model.attributes);
      },
      close:function(){
        this.remove();
        this.unbind();
        this.model.unbind("change",this.modelChanged);
      }

    }); //view extend close
}())  //big function close
