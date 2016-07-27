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

// tweet Base Layout
var tweetLayoutView = Backbone.Marionette.LayoutView.extend({
   template: TMPL['TweetLayout.hbs']
  ,regions: {
     inputForm: '#input-form-region'
    ,tweetList: '#tweet-list-region'
  }
  ,initialize: function (option) {
    this.option = option
  }
  ,onAttach: function () {
    this.showChildView('inputForm', new tweetPostCompositeView({
      collection: new Backbone.Collection()
    }))
    this.showChildView('tweetList', new tweetListCompositeView({
      collection: this.option.tweetCol
    }))
  }
});

// post area's preview item
var tweetPostPreviewItemView = Backbone.Marionette.ItemView.extend({
  template: TMPL['TweetPostPreviewItem.hbs']
})

// post area and preview images(collection)
var tweetPostCompositeView = Backbone.Marionette.CompositeView.extend({
     template: TMPL['TweetPostComposite.hbs']
    ,childView: tweetPostPreviewItemView
    ,childViewContainer: '#preview-container'
    ,collectionEvents: {
      change: 'render'
    }

    ,ui: {
       inputForm        : '#input-form'
      ,tweetInput       : '#tweet-input'
      ,previewContainer : '#preview-container'
      ,fileInput        : '#file-input'
      ,textCounter      : 'span.text-counter'
      ,postButton       : '#tweet-post-button'
    }

    ,events: {
       "keyup @ui.tweetInput"   : "onChangeTweetInput"
      ,'change @ui.fileInput'    : 'onChangeFileInput'
      ,"click @ui.postButton"   : "onClickPostButton"
    }

    ,val: {
      TEXTMANCOUNT: 140
      ,FILEMAXCOUNT: 4
    }

    ,state: {
      fileCount: 0
    }

    ,onAddChild: function (){
      var $folders = this.ui.previewContainer.find('a')
      var width = $folders.first().width()
      $folders.css({height: width})
    }

    ,onChangeFileInput: function (evt) {

      var self = this
      var files = evt.target.files
      var max = this.val.FILEMAXCOUNT

      for (var i = 0, f; f = files[i]; i++) {
        console.log(self.collection.length)
        console.log(self.state.fileCount);
        // ===GUARD===============
        // Only process image files.
        if (!f.type.match('image.*')) {
          // TODO ハンドリング
          continue;
        }
        if (self.collection.length >=  max || self.state.fileCount >= max) {
          // TODO ハンドリング
          break;
        }
        // ===GUARD===============

        self.state.fileCount++;
        Util.File.asyncParseDataUrl(f, function(rUrl){
          self.collection.add({url: rUrl});
        })
      }
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

      App.wreqr.request('postTweet', this.ui.inputForm)

      this.render() // re-render the entire collection
      this._resetTweetInput()

      //TODO CSRF対策?
    }

    ,_resetTweetInput: function () {
      this.ui.tweetInput.val("")
      this.ui.textCounter.val(this.val.TEXTMANCOUNT)
      this.ui.previewContainer.empty()
      this.collection.reset()
      this.state.fileCount = 0
    }

    ,_requestActionToken: function () {
      return App.wreqr.request('actionToken')
    }
})

// tweet one item
var tweetItemView = Backbone.Marionette.ItemView.extend({
  template: TMPL['TweetItem.hbs']
  ,templateHelpers: function () {
    return {
      dateStr: Util.Date.getTweetDateStr(this.model.get('date'))
    }
  }
})

// tweet list
var tweetListCompositeView = Backbone.Marionette.CompositeView.extend({
  template: TMPL['TweetListComposite.hbs']
  ,childView: tweetItemView
  ,childViewContainer: '#tweet-list-container'
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
