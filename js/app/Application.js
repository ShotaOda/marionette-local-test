var App = {};

// hash と コントローラーの マッピング
var routeMap = {
  'welcome'           : ''
  ,'tweets'            : 'tweets'
  ,'follow'            : 'follow'
  ,'follower'          : 'follower'
  ,'userTweets'        : ':user/tweets'
  ,'userFollow'        : ':user/follow'
  ,'userFollower'      : ':user/follower'
};

// 呼び出しに便利なように、key value 逆で保持しているので入れ替え
var reverseMap = {}
for(var key in routeMap){
  reverseMap[routeMap[key]] = key;
}
var router = Backbone.Marionette.AppRouter.extend({
  appRoutes: reverseMap
})

// model と view の結びつけを行う
var controller = Backbone.Marionette.Object.extend({

  /* *********************************************************************************************
  * 共通処理
  ********************************************************************************************* */
  _validate: function () {

  }

  ,_showMain: function (view) {
    App.RootLayout.showChildView('main', view)
  }

  /* *********************************************************************************************
  * ルーティング
  ********************************************************************************************* */
  ,welcome: function () {
    var col = new tweetCollection()
    App.RootLayout.showChildView('main', new tweetCompositeView({
      collection: col
    }));
    for (var i =0; i < 100; i++ ){
      col.add({title: "author", content: `text No.${i}`})
    }
  }

  ,tweets: function () {
    var col = new tweetCollection()
    App.RootLayout.showChildView('main', new tweetCompositeView({
      collection: col
    }));
    for (var i =0; i < 100; i++ ){
      col.add({title: "ubuntu", content: `this is my tweet.${i}`})
    }
  }

  ,follow: function () {
    var users = new Backbone.Collection()
    App.RootLayout.showChildView('main', new userCompositeView({
      collection: users
    }));
    for (var i =0; i < 100; i++ ){
      users.add({username: `follow's ${i}`})
    }
  }

  ,follower: function () {
    var users = new Backbone.Collection()
    App.RootLayout.showChildView('main', new userCompositeView({
      collection: users
    }));
    for (var i =0; i < 100; i++ ){
      users.add({username: `follower ${i}`})
    }
  }

  ,userTweets: function (user) {

  }

  ,userFollow: function (user) {

  }

  ,userFollower: function (user) {

  }
})

$(function(){

  App = new Backbone.Marionette.Application()

  App.on('application: before:start', function () {
    console.log('before:start');
    App.RootLayout = new IMPL.RootLayoutView();

    // ルーティング生成
    App.Router = new router({
      controller: new controller()
    })

    // イベントハンドラー生成
    // message pattern (implementing by Wreqr.RequestResponse)
    App.wreqr = new Backbone.Wreqr.RequestResponse();
    App.wreqr.setHandlers({
       navigate: function (to) {
        Backbone.history.navigate(to, true)
      }
    })

    App.RootLayout.showChildView('left', new userStaticItemView())
  });

  App.on('application: start', function () {
    console.log('start');

    Backbone.history.start();
    Backbone.history.navigate(routeMap.welcome, true)
  });

  App.start()
});
