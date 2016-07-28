var tweetModel = Backbone.Model.extend({
  defaults: {
    date: moment()
  }
})

var tweetCollection = Backbone.Collection.extend({
  model: tweetModel

  ,comparator: function (model) {
    return -model.get("date")
  }

  ,parse: function (resp) {
    if (resp.error) console.log("error")
    console.dir(resp.lists.map(function(data){return {title: data.user, content: data.comment}}))
    return resp.lists.map(function(data){return {title: data.user, content: data.comment}})
  }

  ,_loader: {}
  ,_counter: 0
  ,load: function () {
    var self = this
    this._loader = setInterval(function () {
      if (self._counter >= 10) self.stop();
      var rand2 = function () {return Math.round(Math.random() * 100)}
      var month = ('0' + (rand2() % 12 + 1)).slice(-2)
      var date  = ('0' + (rand2() % 24 + 1)).slice(-2)
      var hour  = ('0' + (rand2() % 24    )).slice(-2)
      var min   = ('0' + (rand2() % 60    )).slice(-2)
      var sec   = ('0' + (rand2() % 60    )).slice(-2)
      var dateStr = `2016-${month}-${date} ${hour}:${min}:${sec}`
      console.log(dateStr, Util.Date.getTweetDateStr(moment(dateStr)));
      self.add({title: "author", content: `text No.${self._counter++} original id: ${Math.random()}`, date: moment(dateStr)})
    }, 500)
  }

  ,stop: function () {
    clearInterval(this._loader)
  }
})
