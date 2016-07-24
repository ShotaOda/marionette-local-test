var userStaticItemView = Backbone.Marionette.ItemView.extend({
  template: TMPL['UserStaticItem.hbs']
  ,ui: {
     "navigatetweet": "#button-navigation-myTweet"
    ,"navigatefollow": "#button-navigation-myFollow"
    ,"navigatefollower": "#button-navigation-myFollower"
  }
  // ※ -(ハイフン)があると認識しないので注意
  ,events: {
     "click @ui.navigatetweet": "navMyTweet"
    ,"click @ui.navigatefollow": "navMyFollow"
    ,"click @ui.navigatefollower": "navMyFollower"
  }

  // event functions
  ,navMyTweet: function () {
    App.wreqr.request('navigate',routeMap.tweets)
    this._activeList(this.ui.navigatetweet)
  }

  ,navMyFollow: function () {
    App.wreqr.request('navigate',routeMap.follow)
    this._activeList(this.ui.navigatefollow)
  }

  ,navMyFollower: function () {
    App.wreqr.request('navigate',routeMap.follower)
    this._activeList(this.ui.navigatefollower)
  }

  ,_activeList: function (target) {
    var self = this
    Object.keys(self.ui).forEach(function(key){self.ui[key].removeClass("active")})

    target.addClass("active")
  }
})

var userItemView = Backbone.Marionette.ItemView.extend({
  template: TMPL['UserItem.hbs']
})

var tweetItemView = Backbone.Marionette.ItemView.extend({
  template: TMPL['TweetItem.hbs']
})

var tweetCompositeView = Backbone.Marionette.CompositeView.extend({
  template: TMPL['TweetComposite.hbs']
  ,childView: tweetItemView
  ,childViewContainer: '#tweetContainer'
  ,collectionEvents: {
    change: 'render'
  }

})

var userCompositeView = Backbone.Marionette.CompositeView.extend({
  template: TMPL['UserComposite.hbs']
  ,childView: userItemView
  ,childViewContainer: '#usersConrainer'
  ,collectionEvents: {
    change: 'render'
  }
})
