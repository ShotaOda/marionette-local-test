var tweetModel = Backbone.Model.extend({

})

var tweetCollection = Backbone.Collection.extend({

   model: tweetModel

  ,parse: function (resp){
    if (resp.error) console.log("error")
    console.dir(resp.lists.map(function(data){return {title: data.user, content: data.comment}}))
    return resp.lists.map(function(data){return {title: data.user, content: data.comment}})
  }
})
