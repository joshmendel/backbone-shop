var app = app || {};

(function(){
  app.Router = Backbone.Router.extend({
    routes:{
      "":"home",
      "card-page/:name":"displayCardPage"
    },
    home:function(){
      app.catalogView = new app.CatalogView();
      app.catalogView.render();

      if(app.cards){
        app.catalogView.renderSearchedCards(app.cards);
      }

    },
    displayCardPage:function(name){
      var cardModel = new app.CardModel();
      var cardPageView = new app.CardPageView({
        model:cardModel
      });
      cardPageView.render();

      $.get("https://api.deckbrew.com/mtg/cards/" + name).then(function(cardInfo){
        cardModel.set({
          cardID:cardInfo.id,
          cardName:cardInfo.name,
          imgLink:cardInfo.editions[0].image_url,
          cardText:cardInfo.text,
          flavorText:cardInfo.editions[0].flavor,
          edition:cardInfo.editions[0].set
        });
      },function(err){
        console.log("404 error: ",err);
      });
    }


  })
}()) //big function end
