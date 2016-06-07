var app = app || {};

(function(){
  app.CartView = Backbone.View.extend({
    el:".user-cart",
    template:_.template('<div>class="cart-display"></div>'),
    render:function(){
      this.$el.html(this.template());
    }
  });
}()) //ends the big function
