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
      app.userPanelView = new app.UserPanelView();
      app.userPanelView.render();
      if(app.firebase.getAuth()){
        app.userPanelView.renderEmail(app.firebase.getAuth().auth.token.email);
        app.shopperModel = new app.ShopperModel();
      };

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

      app.userPanelView = new app.UserPanelView();
      app.userPanelView.render();
      if(app.firebase.getAuth()){
        app.userPanelView.renderEmail(app.firebase.getAuth().auth.token.email);
        app.shopperModel = new app.ShopperModel();
      };

      $.get("https://api.deckbrew.com/mtg/cards/" + name).then(function(card){
        var validEdition = _.find(card.editions,function(edition){
          return edition.multiverse_id !==0;
        });

        cardModel.set({
          cardID:card.id,
          cardName:card.name,
          imgLink:validEdition.image_url,
          cardText:card.text,
          flavorText:validEdition.flavor,
          edition:validEdition.set
        });
        // cardModel.set({
        //   cardID:cardInfo.id,
        //   cardName:cardInfo.name,
        //   imgLink:cardInfo.editions[0].image_url,
        //   cardText:cardInfo.text,
        //   flavorText:cardInfo.editions[0].flavor,
        //   edition:cardInfo.editions[0].set
        // });
      },function(err){
        console.log("404 error: ",err);
      });
    }


  })
}()) //big function end
