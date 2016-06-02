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
      }

    }); //view extend close
}())  //big function close
