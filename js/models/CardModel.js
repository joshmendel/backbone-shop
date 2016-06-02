var app = app || {};

(function(){
  app.CardModel = Backbone.Model.extend({
    defaults:{
      imgLink:"img/card-back.jpg",
      cardName:"",
      cardText:"",
      flavorText:"",
      edition:""
    }
  })

}()) //ends the big function
