var app = app || {};

(function(){
  app.LogInView = Backbone.View.extend({
    el:".log-in-modal .modal-content",
    template:_.template('<h2>email</h2><input type="text" class="email"><h2>password</h2><input type="password" class="password"><button class="btn btn-primary log-in">Log In</button>'),
    events:{
      "click .log-in":"logIn"
    },
    logIn: function(){
      app.firebase.authWithPassword({
        email:$(".email").val(),
        password:$(".password").val()
      }, function(error,authData){
          if(error){
            if(error.code === "INVALID_USER"){
              app.firebase.createUser({
                email:$(".email").val(),
                password:$(".password").val()},function(error,authData){
                  if(error){
                    console.log(error);
                  } else {
                    $(".log-in-modal").modal("hide");
                    app.userPanelView.renderEmail($(".email").val());
                    app.shopperModel = new app.shopperModel();
                  }
                })
            }
          } else {
            console.log("authenticated!", authData);
            $(".log-in-modal").modal("hide");
            app.userPanelView.renderEmail($(".email").val());
            app.shopperModel = new app.shopperModel();
          }
      });
    },
    render:function(){
      this.$el.html(this.template());
    }
  })

}()) //ends the big function
