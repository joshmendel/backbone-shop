var app = app || {};

//immediately invoked function expression
(function(){
  app.CatalogView = Backbone.View.extend({
    el:".store-display",
    template:_.template('<h1>beach coders store</h1><input placeholder="look for cards..." class="card-search" type="text"><div class="product-display"></div>'),
    events:{
      "keydown .card-search":"cardSearch"
    },
    cardSearch:function(event){
        if(event.which === 13){
          //jquery ajax promise
          $.ajax({
            method:"GET",
            url:"https://api.deckbrew.com/mtg/cards/typeahead?q=" + $(".card-search").val()
          }).then(function(serverData){
            var cardContainer = $("<div>");

            app.cards = new app.Cards();

            serverData.forEach(function(card){

              var validEdition = _.find(card.editions,function(edition){
                return edition.multiverse_id !==0;
              });

              var cardModel = new app.CardModel({
                cardID:card.id,
                cardName:card.name,
                imgLink:validEdition.image_url,
                cardText:card.text,
                flavorText:validEdition.flavor,
                edition:validEdition.set
              });

              app.cards.add(cardModel);

              var cardItemView = new app.CardItemView({
                model:cardModel
              });

              cardContainer.append(cardItemView.render().$el);
            });
            for(var i=0; i < serverData.length;i++){
            }

            $(".product-display").html(cardContainer);
          },function(err){
            console.log(err)
          });
        }
    },
    renderSearchedCards:function(cards){
      var $cardContainer=$("<div>");
      cards.each(function(card){
        var cardItemView = new app.CardItemView({
          model:card
        });
        $cardContainer.append(cardItemView.render().$el);
      });

      this.$(".product-display").html($cardContainer);
    },
    render:function(){
      this.$el.html(this.template());
    }
  }); //ends the view extend

}())  //big function end
