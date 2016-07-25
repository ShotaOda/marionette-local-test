var userStaticItemView = Backbone.Marionette.ItemView.extend({
  template: TMPL['UserStaticItem.hbs']
  ,ui: {
    "navigatetweet": "#button-navigation-myTweet"
    ,"navigatefollow": "#button-navigation-myFollow"
    ,"navigatefollower": "#button-navigation-myFollower"
  }
  // ※ -(ハイフン)があると認識しないので注意
  ,events: {
    "click @ui.navigatetweet": "onClickNavTweet"
    ,"click @ui.navigatefollow": "onClickNavFollow"
    ,"click @ui.navigatefollower": "onClickNavFollower"
  }

  // event functions
  ,onClickNavTweet: function () {
    App.wreqr.request('navigate',routeMap.tweets)
    this._activeList(this.ui.navigatetweet)
  }

  ,onClickNavFollow: function () {
    App.wreqr.request('navigate',routeMap.follow)
    this._activeList(this.ui.navigatefollow)
  }

  ,onClickNavFollower: function () {
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
  ,templateHelpers: function () {
    return {
      dateStr: Util.Date.getTweetDateStr(this.model.get('date'))
    }
  }
})

var tweetCompositeView = Backbone.Marionette.CompositeView.extend({
  template: TMPL['TweetComposite.hbs']
  ,childView: tweetItemView
  ,childViewContainer: '#tweetContainer'
  ,collectionEvents: {
    change: 'render'
  }

  ,ui: {
    tweetInput : '#tweet-input'
    ,textCounter: 'span.text-counter'
    ,postButton : '#tweet-post-button'
  }

  ,events: {
    "keyup @ui.tweetInput"   : "onChangeTweetInput"
    ,"click @ui.postButton"   : "onClickPostButton"
  }

  ,val: {
    TEXTMANCOUNT: 140
  }

  ,onChangeTweetInput: function () {
    var textLength = this.ui.tweetInput.val().length
    this.ui.textCounter.text(this.val.TEXTMANCOUNT - textLength)

    if (textLength > this.val.TEXTMANCOUNT) {
      this.ui.textCounter.addClass("text-danger")
      this.ui.postButton.attr({disabled: true})
    }
    else{
      this.ui.textCounter.removeClass("text-dager")
      this.ui.postButton.attr({disabled: false})
    }
  }

  ,onClickPostButton: function () {
    this.collection.add({
      title: 'ubuntu'
      ,content: this.ui.tweetInput.val()
      ,date: moment()
    })
    this.render() // re-render the entire collection
    this._resetTweetInput()
  }

  ,_resetTweetInput: function () {
    this.ui.tweetInput.val("")
    this.ui.textCounter.val(this.val.TEXTMANCOUNT)
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
