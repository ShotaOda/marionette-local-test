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

  ,parse: function (resp){
    if (resp.error) console.log("error")
    console.dir(resp.lists.map(function(data){return {title: data.user, content: data.comment}}))
    return resp.lists.map(function(data){return {title: data.user, content: data.comment}})
  }
})
