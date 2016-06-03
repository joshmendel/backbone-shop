//this renders each card in the catalog view
var app = app || {};

(function(){
  //on render, create a brand new card image
  app.CardItemView = Backbone.View.extend({
    initialize:function(){
      this.listenTo(this.model,"change",this.render);
    },
    tagName:"img",
    attributes:{
      class:"card-item"
    },
    events:{
      "click":"renderCardPage"
    },
    renderCardPage:function(){
      if(app.cardPage){
        app.cardPage.close();
        $("body").append("<div class='container store-display'></div>");
      };

      app.cardPage = new app.CardPageView({
        model:this.model
      });
      app.cardPage.render();
      app.router.navigate('card-page/' + this.model.get("cardID"));
    },
    render:function(){
      this.$el.attr("src", this.model.get("imgLink"));
      return this;  //why??
    }

  });


}()) //ends the big function
