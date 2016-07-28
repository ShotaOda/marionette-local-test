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

  ,_stopLoadings: function () {
    this._loadingCollections.forEach(function (collection) {
      collection.stop()
    })
  }

  ,_showMainTweetList: function (tweetCollection) {
    var child = App.RootLayout.getChildView('main')
    if(child && child.id === LAYOUTID.TWEETLAYOUT){
      child.showChildView('tweetList', new tweetListCompositeView({
        collection: tweetCollection
      }));
    } else {
      App.RootLayout.showChildView('main', new tweetLayoutView({
        tweetCollection: tweetCollection
      }))
    }
    this._loadingCollections.push(tweetCollection)
    tweetCollection.load()
  }

  ,_loadingCollections: []

  /* *********************************************************************************************
  * ルーティング
  ********************************************************************************************* */
  ,welcome: function () {
    this._stopLoadings()

    App.Collection.tweet = App.Collection.tweet || new tweetCollection()

    this._showMainTweetList(App.Collection.tweet)
  }

  ,tweets: function () {
    this._stopLoadings()

    App.Collection.mytweet = App.Collection.mytweet || new tweetCollection()

    this._showMainTweetList(App.Collection.mytweet)
  }

  ,follow: function () {
    this._stopLoadings()

    var users = new Backbone.Collection()
    App.RootLayout.showChildView('main', new userCompositeView({
      collection: users
    }));
    for (var i =0; i < 100; i++ ){
      users.add({username: `follow's ${i}`})
    }
  }

  ,follower: function () {
    this._stopLoadings()

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
    App.Collection = {};

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
      ,postTweet: function ($form) {
        App.Collection.tweet.add({
           title: 'ubuntu'
          ,content: $form.find('#tweet-input').val()
          ,date: moment()
        })
      }
      ,actionToken: function() {
        return /*TODO 通信*/ "UUID:J3aojfa532el4akK"
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
