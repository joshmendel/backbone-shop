var app = app || {};

//immediately invoked function expression
(function(){
  app.router = new app.Router();
  Backbone.history.start();
  // var catalogView = new app.CatalogView;
  // catalogView.render();
}())
